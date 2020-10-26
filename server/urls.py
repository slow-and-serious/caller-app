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
from rest_framework_simplejwt import views as jwt_views
from users.views import token_blacklist

urlpatterns = [

    # React frontend
    path('', TemplateView.as_view(template_name='index.html')),

    # Admin page
    path('admin/', admin.site.urls),

    # Auth for browsable API
    path('api-auth/', include('rest_framework.urls')),

    # JWT auth
    path('api/v1/token', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/v1/token/refresh',
         jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/logout/blacklist', token_blacklist, name='blacklist'),

    # Notifications
    path('api/v1/', include('notifications.urls')),
]
