from django.urls import path

from .views import (PostDetail, PostList, login_test, notification_history,
                    rotation_history, start_rotation)

urlpatterns = [
    path('start-rotation', start_rotation, name='start-rotation'),
    path('notification-history', notification_history,
         name='notification-history'),
    path('rotation-history', rotation_history,
         name='rotation_history'),
    path('', PostList.as_view(), name='list'),
    path('', PostDetail.as_view(), name='detail'),
    path('test', login_test, name='test'),
]
