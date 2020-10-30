from django.http import JsonResponse
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from twilioHandler.twilio.notification_orchestrator import start_rota
from .models import CustomUser, Notification, Rotation
from .serializers import PostSerializer


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
    users = CustomUser.objects.filter(profile__manager=manager).filter(
        profile__allow_notifications=True)
    if len(users) > 0:
        message = request.data['message']
        rotation = Rotation.objects.create(message=message, manager=manager)

        for user in users:
            Notification.objects.create(
                user=user, rotation=rotation, notification_type='CALL', user_response='NO RESPONSE')
        start_rota(rotation.id) # called from twilio notification_orchestrator

        return Response(status=status.HTTP_202_ACCEPTED)

    return Response(status=status.HTTP_204_NO_CONTENT)


class PostList(generics.ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notification.objects.all()
    serializer_class = PostSerializer
