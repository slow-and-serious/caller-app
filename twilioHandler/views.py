from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from twilio.twiml.voice_response import VoiceResponse, Gather, Say
# Create your views here.


@api_view(['GET', 'POST'])
def home(request):
    """Respond to incoming phone calls with a menu of options"""

    # #lets build some twiML
    resp = VoiceResponse()

    # resp.append(Say(message=request.query_params["message"]))

    # start the gather verb
    gather = Gather(num_digits=1, action="/user_response")
    gather.say(request.query_params["message"])
    resp.append(gather)

#     output = """<?xml version="1.0" encoding="UTF-8"?><Response>
# <Say voice="alice">Thanks for trying our documentation. Enjoy!</Say>
# <Play>http://demo.twilio.com/docs/classic.mp3</Play>
# </Response>"""

    print(request.query_params["message"])
    return HttpResponse(str(resp), content_type="text/xml")


@api_view(["GET", "POST"])
def user_response(request):
    resp = VoiceResponse()
    # If Twilio's request to our app included already gathered digits,
    # process them
    if 'Digits' in request.values:
        # Get which digit the caller chose
        choice = request.values['Digits']

        # <Say> a different message depending on the caller's choice
        if choice == '1':
            resp.say('You selected sales. Good for you!')
            return HttpResponse(str(resp), content_type="text/xml")
        elif choice == '2':
            resp.say('You need support. We will help!')
            return HttpResponse(str(resp), content_type="text/xml")
        else:
            # If the caller didn't choose 1 or 2, apologize and ask them again
            resp.say("Sorry, I don't understand that choice.")

    # If the user didn't choose 1 or 2 (or anything), send them back to /voice
    resp.redirect('/voice')
    return HttpResponse(str(resp), content_type="text/xml")
