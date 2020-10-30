from rest_framework import serializers
from .models import CustomUser, Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('phone_number', 'allow_notifications')
        model = Profile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email',)
        model = CustomUser