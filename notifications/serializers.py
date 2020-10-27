from rest_framework import serializers
from .models import Notification


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'date_time', 'first_name', 'last_name', 'message',)
        model = Notification
