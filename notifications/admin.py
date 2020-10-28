from django.contrib import admin
from .models import Notification


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    """
    docstring
    """
    list_display = ("start_date_time", "end_date_time", "user")
    # admin.site.register(Notification)
