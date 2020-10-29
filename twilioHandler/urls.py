from django.urls import path

from .views import home , user_response

urlpatterns = [
    path('', home, name='home'),
    path('user_response', user_response, name="user_response")
]
