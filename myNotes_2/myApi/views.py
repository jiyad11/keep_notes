from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Note
from .serializers import NoteSerializer
from rest_framework.decorators import api_view



class myNotes(APIView):
    
    def get(self, request):
        notes = Note.objects.all().order_by('-updated')
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        data = request.data
        note = Note.objects.create(body=data['body'])
        serializer = NoteSerializer(note)
        return Response(serializer.data, status=status.HTTP_201_CREATED)




class myNote(APIView):
   
    def get(self, request, pk):
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(note)
        return Response(serializer.data)
    
    def put(self, request, pk):
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        note = Note.objects.get(id=pk)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)