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
    manager_id = serializers.CharField(source='rotation.manager.id', read_only=True)
    user_id = serializers.CharField(source='user.id', read_only=True)
    class Meta:
        model = Notification
        fields = ('id', 'start_date_time', 'end_date_time', 'user_id', 'manager_id', 'notification_type', 'message', 'user_response', 'completed')

