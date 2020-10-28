
from twilio.rest import Client
import environ
from pathlib import Path
from urllib.parse import urlencode

# BASE_DIR = Path(__file__).resolve().parent.parent
# env = environ.Env(
#     # set casting, default value
#     DEBUG=(bool, False),
# )
# # reading .env file
# environ.Env.read_env()


def env(key):
    map = {
        "TWILIO_SID": "AC42f3eb6dc4abfe728e13a0401a391c5f",
        "TWILIO_AUTH": "6be2dc11b46e0a1e67f1bd42c278007f",
        "TWILIO_NUMBER": "+13342315571",
        "DEPLOYED_URL": "http://27a3e8e40b76.ngrok.io"
    }
    return map[key]


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
def make_call(call_num, message):
    message = urlencode({"message": message})
    account_sid = env("TWILIO_SID")
    auth_token = env("TWILIO_AUTH")
    base_url = env("DEPLOYED_URL")
    client = Client(account_sid, auth_token)
    call = client.calls.create(
        url=f"{base_url}/twilio/maketwiml?{message}",
        to=call_num,
        from_=env("TWILIO_NUMBER"),
    )




if __name__ == "__main__":
    make_call("+14253501717", "I do so enjoy these talks.")