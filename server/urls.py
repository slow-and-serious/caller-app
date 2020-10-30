"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from django_otp.admin import OTPAdminSite

# Replacing default Admin Site with OTP Admin Site
otp_admin_site = OTPAdminSite(OTPAdminSite.name)
for model_cls, model_admin in admin.site._registry.items():
    otp_admin_site.register(model_cls, model_admin.__class__)

urlpatterns = [

    # React frontend
    path('', TemplateView.as_view(template_name='index.html')),

    # Admin page
    # path('admin/', admin.site.urls), # Old admin without 2FA
    path('admin/', otp_admin_site.urls, name='admin'),

    # Users
    path('api/v1/user/', include('users.urls')),
    
    # Auth for browsable API
    path('api-auth/', include('rest_framework.urls')),

    # Notifications
    path('api/v1/notification/', include('notifications.urls')),

    # Twilio
    path('twilio/maketwiml/', include('twilioHandler.urls')),
]
