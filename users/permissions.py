from rest_framework import permissions
from .models import CustomUser, Profile


class IsOwner(permissions.BasePermission):

    def has_permission(self, request, view):
        try:
            user = CustomUser.objects.get(
                pk=view.kwargs['pk'])
            profile = user.profile
        except:
            return False

        if request.user.profile == profile:
            return True

        return False
