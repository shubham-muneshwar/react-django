from rest_framework.serializers import (
	ModelSerializer,
	SerializerMethodField
)
from note.models import Note



class NoteListSerializer(ModelSerializer):
	author = SerializerMethodField()
	class Meta:
		model=Note
		fields=['id','title','content','author','published']

	def get_author(self,obj):
		return str(obj.author.username)

class NoteDetailSerializer(ModelSerializer):
	author = SerializerMethodField()
	class Meta:
		model=Note
		fields=['id','title','content','published','author','published']
		lookup_field='pk'

	def get_author(self,obj):
		return str(obj.author.username)

class NoteCreateSerializer(ModelSerializer):
	author = SerializerMethodField()
	class Meta:
		model=Note
		fields=['title','content','author','published']
	
	def get_author(self,obj):
		return str(obj.author.username)