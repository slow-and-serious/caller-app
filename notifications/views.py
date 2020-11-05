from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from twilioHandler.twilio.notification_orchestrator import start_rota

from .models import CustomUser, Notification, Rotation
from .serializers import (NotificationSerializer, PostSerializer,
                          RotationSerializer)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def login_test(request):
    test_response = {
        'message': 'login successful'
    }

    return Response(test_response)


@api_view(['POST'])
@permission_classes([IsAuthenticated & IsAdminUser])
def start_rotation(request):
    manager = request.user
    users = CustomUser.objects.filter(
        profile__manager=manager, profile__allow_notifications=True).order_by('id')
    if len(users) > 0:
        message = request.data['message']
        rotation = Rotation.objects.create(message=message, manager=manager)

        for user in users:
            Notification.objects.create(
                user=user, rotation=rotation, notification_type='CALL', user_response='NO RESPONSE')
        start_rota(rotation.id)  # called from twilio notification_orchestrator

        return Response(rotation.id, status=status.HTTP_200_OK)

    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def notification_history(request):
    user = request.user
    notifications = user.notification_set.all().order_by('-id')
    if len(notifications) > 0:
        notifications = [NotificationSerializer(
            notification).data for notification in notifications]
        return Response(notifications, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated & IsAdminUser])
def rotation_history(request):
    manager = request.user
    rotations = manager.rotation_set.all().order_by('-id')
    if len(rotations) > 0:
        serialized_rotations = []
        for rotation in rotations:
            serialized_rotation = RotationSerializer(rotation).data
            serialized_rotation['number_of_notifications'] = len(
                rotation.notification_set.all())
            serialized_rotations.append(serialized_rotation)
        return Response(serialized_rotations, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated & IsAdminUser])
def get_rotation_info(request, rotation_id):
    rotation = get_object_or_404(Rotation, pk=rotation_id)
    notifications = rotation.notification_set.all()
    if len(notifications) > 0:
        notifications = [NotificationSerializer(
            notification).data for notification in notifications]
        return Response(notifications, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)


class PostList(generics.ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notification.objects.all()
    serializer_class = PostSerializer
