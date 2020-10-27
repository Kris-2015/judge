from django.shortcuts import render
from django.http import  HttpResponse
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
from rest_framework import generics

# Create your views here.
def index (request):
    return HttpResponse("I am in registration app page")

def demo (request):
    
    return HttpResponse('I am in demo api')

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

class NewUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        try:
            print('add new user')
            print(request.data)
            

            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(serializer.data)
        except Exception as e:
            return Response(
                {'error': 'Error Occurred while creating new user!' + str(e)})
