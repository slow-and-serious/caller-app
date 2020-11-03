from notifications.models import Rotation, Notification
from twilioHandler.twilio.example import make_call
import time
from django.utils import timezone
from background_task import background


def is_done(id):
    try:
        notification = Notification.objects.get(pk=id)
        return notification.completed
    
    except Notification.DoesNotExist as err:
        print(err)

def did_accept(id):
    try:
        notification = Notification.objects.get(pk=id)
        if notification.user_response == "ACCEPT":
            return True
        elif notification.user_response == "DECLINE":
            return False
    except Exception as err:
        print(err)

@background(schedule=timezone.now())
def start_rota(notification_id):
    try:
        rotation = Rotation.objects.get(pk=notification_id)
        notifications = rotation.notification_set.all()

        for notification in notifications:
            message = f'Hello, {notification.user.first_name}. {rotation.message}' 
            phone_number = notification.user.profile.phone_number
            id = notification.id
            make_call(str(phone_number), message, id)
            count = 0
            while not is_done(id) and count < 6:
                time.sleep(10)
                count += 1
                # wait till this call
            if did_accept(id):
                #break this loop
                return "all done"
            else:
                #start the next caller
                pass
        # todo database updates and async stuff

    except Exception as err:
        print(err)
        return "fail"


if __name__ == "__main__":
    pass