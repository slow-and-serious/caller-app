from notifications.models import Rotation, Notification
from twilioHandler.twilio.example import make_call
import time
from django.utils import timezone
from background_task import background


def is_done(_id):
    try:
        notification = Notification.objects.get(pk=_id)
        return notification.completed
    
    except Notification.DoesNotExist as err:
        print(err)

def did_accept(_id):
    try:
        notification = Notification.objects.get(pk=_id)
        if notification.user_response == "ACCEPT":
            return True
        elif notification.user_response == "DECLINE":
            return False
    except Exception as err:
        print(err)

def start_rota(rotation_id):
    print('running start_rota', 'id is', rotation_id)
    try:
        rotation = Rotation.objects.get(pk=rotation_id)
        notifications = rotation.notification_set.all()

        for notification in notifications:
            message = f'Hello, {notification.user.first_name}. {rotation.message}' 
            print('entering for loop','message is', message)
            phone_number = notification.user.profile.phone_number
            notification_id = notification.id
            start_async_task(str(phone_number), message, notification_id, rotation.id)

    except Exception as err:
        print(err)
        return "fail"


@background(queue='test-queue')
def start_async_task(phone_number, message, notification_id, rotation_id):
    rotation = Rotation.objects.get(pk=rotation_id)
    accepted = rotation.notification_set.filter(user_response='ACCEPT')
    if not accepted:
        make_call(phone_number, message, notification_id)
        count = 0
        while not is_done(notification_id) and count < 6:
            print('entering while loop', 'count is', count)
            time.sleep(10)
            count += 1
            # wait till this call
        if did_accept(notification_id):
            print('inside of did_accept if statement')
            #break this loop
            return "all done"
        else:
            print('inside of did_accept else statement')
            #start the next caller
            return
