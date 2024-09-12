from django.contrib import admin
from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path("api1", api1.as_view(), name='api1'),
    path("api2", api2.as_view(), name='api2'),
    # path("api3", api3.as_view(), name='api3'),
    # path("api4", api4.as_view(), name='api4'),
   
]