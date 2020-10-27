from twilio.rest import Client
import environ
from pathlib import Path

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
    }
    return map[key]


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
def make_call(call_num):
    account_sid = env("TWILIO_SID")
    auth_token = env("TWILIO_AUTH")
    client = Client(account_sid, auth_token)
    call = client.calls.create(
        url="http://demo.twilio.com/docs/voice.xml",
        to=call_num,
        from_=env("TWILIO_NUMBER"),
    )
    print(call.sid)


client = Client(env("TWILIO_SID"), env("TWILIO_AUTH"))
outgoing_caller_id = client.outgoing_caller_ids(
    "PNe905d7e6b410746a0fb08c57e5a186f3"
).fetch()
print(outgoing_caller_id.friendly_name)


if __name__ == "__main__":
    # make_call("+14253501717")
    client = Client(env("TWILIO_SID"), env("TWILIO_AUTH"))
outgoing_caller_id = client.outgoing_caller_ids(
    "PNe905d7e6b410746a0fb08c57e5a186f3"
).fetch()
print(outgoing_caller_id.friendly_name)
