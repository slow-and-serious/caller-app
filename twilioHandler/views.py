from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from twilio.twiml.voice_response import VoiceResponse, Gather, Say
from urllib.parse import urlencode
from notifications.models import Rotation, Notification
# Create your views here.


@api_view(['GET', 'POST'])
def home(request):
    """Respond to incoming phone calls with a menu of options"""

    # #lets build some twiML
    resp = VoiceResponse()
    message = request.query_params["message"]
    id = request.query_params["id"]
    message_par = urlencode({"message": message, "id":id})
    print(message_par)
    # start the gather verb
    gather = Gather(num_digits=1, action=f"maketwiml/user_response?{message_par}")
    gather.say(message)
    resp.append(gather)

    print("base route message: ", request.query_params["message"])
    return HttpResponse(str(resp), content_type="text/xml")


@api_view(["GET", "POST"])
def user_response(request):
    message = request.query_params["message"]
    id = request.query_params["id"]
    message = urlencode({"message": message, "id":id})
    notification = Notification.objects.get(pk=id)

    print("user_response route message: ", message)
    resp = VoiceResponse()
    # If Twilio's request to our app included already gathered digits,
    # process them
    called_num = request.POST["To"]
    choice = request.POST["Digits"]
    twilio_call_sid = request.POST["CallSid"]
    if len(choice):
        # <Say> a different message depending on the caller's choice
        if choice == '1':
            resp.say('You have accepted, we have been notified and will be contacting you soon. Thank you')
            print("code for acceptance goes here")
            notification.completed = True
            notification.user_response = "ACCEPT"
            notification.save()
            return HttpResponse(str(resp), content_type="text/xml")
        elif choice == '2':
            resp.say('You have rejected, we have been notified. Thank you')
            print("code for rejection goes here")
            notification.completed = True
            notification.user_response = "DECLINE"
            notification.save()

            return HttpResponse(str(resp), content_type="text/xml")
        else:
            # If the caller didn't choose 1 or 2, apologize and ask them again
            resp.say("Sorry, I don't understand that choice.")

    # If the user didn't choose 1 or 2 (or anything), send them back to the prompt
    resp.redirect(f'/twilio/maketwiml?{message}')
    return HttpResponse(str(resp), content_type="text/xml")
