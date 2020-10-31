from rest_framework import serializers
from .models import Notification, Rotation


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        fields = (
            'start_date_time',
            'end_date_time',
            'notification_type',
            'user_response')
        model = Notification
        
class RotationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id', 'start_date', 'message', 'manager'
        )
        model = Rotation
class NotificationSerializer(serializers.ModelSerializer):
    message = serializers.CharField(source='rotation.message', read_only=True)
    manager = serializers.CharField(source='rotation.manager.first_name', read_only=True)
    user = serializers.CharField(source='user.first_name', read_only=True)
    class Meta:
        model = Notification
        fields = ('id', 'start_date_time', 'end_date_time', 'user', 'manager', 'notification_type', 'message', 'user_response', 'completed')

