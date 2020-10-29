from django.urls import path

from .views import home, PostDetail, PostList


urlpatterns = [
    path('', PostList.as_view(), name='list'),
    path('', PostDetail.as_view(), name='detail'),
    path('test', home, name='test'),
]
