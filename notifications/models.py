from django.db import models
from users.models import CustomUser

# Create your models here.


class Notification(models.Model):
    """
    docstring
    """
    USER_RESPONSE_CHOICES = (
        ("ACCEPT", "ACCEPT"), ("DECLINE", "DECLINE"), ("NO RESPONSE", "NO RESPONSE"))
    NOTIFICATION_TYPE_CHOICES = (("TEXT", "TEXT"), ("CALL", "CALL"))

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=1)
    start_date_time = models.DateTimeField(auto_now_add=True)
    end_date_time = models.DateTimeField(auto_now=True)
    message = models.TextField()
    notification_type = models.CharField(
        choices=NOTIFICATION_TYPE_CHOICES, max_length=20)
    user_response = models.CharField(
        choices=USER_RESPONSE_CHOICES, max_length=20)

    def __str__(self):
        return f"{self.start_date_time},{self.user}"
