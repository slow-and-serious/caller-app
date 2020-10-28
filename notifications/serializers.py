from rest_framework import serializers
from .models import Notification


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id',
                  'start_date_time',
                  'end_date_time',
                  'message',
                  'notification_type',
                  'user_response')
        model = Notification
