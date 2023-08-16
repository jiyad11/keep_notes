from django.urls import path
from .views import myNotes, myNote



urlpatterns = [
    path('notes/', myNotes.as_view(), name='notes'),
    path('notes/<str:pk>/', myNote.as_view(), name='note'),
]
