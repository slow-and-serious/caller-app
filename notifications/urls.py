from django.urls import path

from .views import login_test, PostDetail, PostList, start_rotation


urlpatterns = [
    path('start-rotation', start_rotation, name='start-rotation'),
    path('', PostList.as_view(), name='list'),
    path('', PostDetail.as_view(), name='detail'),
    path('test', login_test, name='test'),
]
