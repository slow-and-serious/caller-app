from django.db import models
from users.models import CustomUser
# import shortuuid


class Rotation(models.Model):
    # id = models.UUIDField(
    #      primary_key = True,
    #      default = shortuuid.uuid(),
    #      editable = False)
    message = models.TextField()
    start_date = models.DateTimeField(auto_now_add=True)
    manager = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.message


class Notification(models.Model):
    # id = models.UUIDField(
    #      primary_key = True,
    #      default = shortuuid.uuid(),
    #      editable = False)
    USER_RESPONSE_CHOICES = (
        ('ACCEPT', 'ACCEPT'), ('DECLINE', 'DECLINE'), ('NO RESPONSE', 'NO RESPONSE'))
    NOTIFICATION_TYPE_CHOICES = (('TEXT', 'TEXT'), ('CALL', 'CALL'))

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rotation = models.ForeignKey(Rotation, on_delete=models.CASCADE)
    start_date_time = models.DateTimeField(auto_now_add=True)
    end_date_time = models.DateTimeField(auto_now=True)
    notification_type = models.CharField(
        choices=NOTIFICATION_TYPE_CHOICES, max_length=20)
    user_response = models.CharField(
        choices=USER_RESPONSE_CHOICES, max_length=20)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.start_date_time},{self.user}'
