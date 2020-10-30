from django.contrib import admin
from .models import Notification, Rotation


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('start_date_time', 'end_date_time', 'user', 'manager', 'message')
    
    def message(self, obj):
        return obj.rotation.message
    
    def manager(self, obj):
        return obj.rotation.manager

@admin.register(Rotation)
class RotationAdmin(admin.ModelAdmin):
    list_display = ('start_date', 'message', 'manager')
    readonly_fields = ('start_date', 'manager')

