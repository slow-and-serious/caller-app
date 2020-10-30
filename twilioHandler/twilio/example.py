
from twilio.rest import Client
from pathlib import Path
from urllib.parse import urlencode
from server import settings

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
def make_call(call_num, message, id):
    message = urlencode({"message": message, "id":id})
    account_sid = settings.TWILIO_SID
    auth_token = settings.TWILIO_AUTH
    base_url = settings.DEPLOYED_URL
    client = Client(account_sid, auth_token)
    call = client.calls.create(
        url=f"{base_url}/twilio/maketwiml?{message}",
        to=call_num,
        from_=settings.TWILIO_NUMBER
    )


if __name__ == "__main__":
    make_call("+14253501717", "Hello. This is an automated caller. Would you work a shift Today 10/28 Press 1 for yes and 2 for no", 1)
