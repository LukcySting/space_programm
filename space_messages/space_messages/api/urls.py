from django.urls import path
from . import views
from django.views.generic import ListView, DetailView
from api.models import Messages
urlpatterns = [
    path('get_messages', ListView.as_view(queryset=Messages.objects.all().order_by("-date")[:20],
    template_name="api/posts.html")),
]