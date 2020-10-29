from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import PostSerializer
from rest_framework import status, generics
from .models import Notification


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def home(request):
    test_response = {
        'message': 'login successful'
    }

    return Response(test_response)


class PostList(generics.ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notification.objects.all()
    serializer_class = PostSerializer
