from notifications.models import Rotation, Notification
from twilioHandler.twilio.example import make_call
import time
from django.utils import timezone
from background_task import background


def is_done(id):
    notification = Notification.objects.get(pk=id)
    return notification.completed

def did_accept(id):
    notification = Notification.objects.get(pk=id)
    if notification.user_response == "ACCEPT":
        return True
    elif notification.user_response == "DECLINE":
        return False

@background(schedule=timezone.now())
def start_rota(notification_id):
    try:
        rotation = Rotation.objects.get(pk=notification_id)
        # print(rotation)
        message = rotation.message
        # print(message)
        notifications = rotation.notification_set.all()
        # print(notifications)
        # print("-------------------")


        for notification in notifications:
            message = rotation.message # to update later with personalized message
            phone_number = notification.user.profile.phone_number
            id = notification.id
            make_call(str(phone_number), message, id)
            while is_done(id) == False:
                time.sleep(10)
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