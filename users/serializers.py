from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('phone_number', 'allow_notifications')
        model = Profile
