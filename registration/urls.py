from django.urls import path
from django.conf.urls import url, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('demo', views.demo, name='demo'),
    url(r'^list_users/', views.UserList.as_view()),
    url(r'^new_users/', views.NewUser.as_view()),
]