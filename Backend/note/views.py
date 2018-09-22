from rest_framework.generics import (
	CreateAPIView,
	DestroyAPIView,
	ListAPIView,
	RetrieveAPIView,
	RetrieveUpdateAPIView
)

from rest_framework.permissions import(
	IsAuthenticatedOrReadOnly
)

from note.serializers import (
	NoteCreateSerializer,
	NoteListSerializer,
	NoteDetailSerializer
)
from note.models import Note
from note.permissions import IsOwnerOrReadOnly

class NoteCreateView(CreateAPIView):
	serializer_class=NoteCreateSerializer
	def perform_create(self,serializer):
		serializer.save(author=self.request.user)
		
class NoteDeleteView(DestroyAPIView):
	queryset=Note.objects.all()
	serializer_class=NoteListSerializer
	lookup_field='pk'

class NoteListView(ListAPIView):
	queryset=Note.objects.all()
	serializer_class=NoteListSerializer

class NoteDetailView(RetrieveAPIView):
	queryset=Note.objects.all()
	serializer_class=NoteListSerializer
	lookup_field='pk'

class NoteUpdateView(RetrieveUpdateAPIView):
	queryset=Note.objects.all()
	serializer_class=NoteCreateSerializer
	permission_classes = [IsOwnerOrReadOnly]
	lookup_field='pk'

