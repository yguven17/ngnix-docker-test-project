from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.views import APIView

# Create your views here.

# Create new object using input1 and input2 from request
class api1(APIView):
    def post(self, request):
        input1 = request.data['input1']
        input2 = request.data['input2']
        try:
            user = Inputs.objects.get(input1=input1)
            return Response({'message': 'User already exists Backend_b', 'user_info': InputsSerializer(user).data}, status=status.HTTP_200_OK)
        except Inputs.DoesNotExist:
            serializer = InputsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                user_info = {
                'input1': input1,
                'input2': input2
            }
                return Response({'message': 'User saved succesfully Backend_b', 'user_info': user_info}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_200_OK)
        return Response({'message': 'User already exists Backend_b'}, status=status.HTTP_200_OK)

# Check database for input1 and input2 to login
class api2(APIView):
    def post(self, request):
        input1 = request.data['input1']
        input2 = request.data['input2']
        try:
            user = Inputs.objects.get(input1=input1)
            if user.input2 == input2:
                # User exists and input2 is correct
                return Response({'message': 'User logged in successfully Backend_b', 'user_info': InputsSerializer(user).data}, status=status.HTTP_200_OK)
            else:
                # User exists but input2 is incorrect
                return Response({'message': 'Invalid input2 Backend_b'}, status=status.HTTP_200_OK)
        except Inputs.DoesNotExist:
            # User does not exist
            return Response({'message': 'User not found Backend_b'}, status=status.HTTP_200_OK)
    
# # Delete input1 and input2 from database
# class api3(APIView):
#     def post(self, request):
#         input1 = request.data['input1']
#         input2 = request.data['input2']
#         try:
#             user = Inputs.objects.get(input1=input1)
#             if user.input1 == input1 and user.input2 == input2:
#                 user.delete()
#                 user_info = {
#                     'input1': input1,
#                     'input2': input2
#                 }
#                 return Response({'message': 'input1 deleted Backend_b', 'user_info': user_info}, status=status.HTTP_200_OK)
#             else:
#                 return Response({'message': 'input1 and input2 do not match Backend_b'}, status=status.HTTP_200_OK)
#         except Inputs.DoesNotExist:
#             return Response({'message': 'User does not exist Backend_b'}, status=status.HTTP_200_OK)
        
# class api4(APIView):
#     def get(self, request):
#         users = Inputs.objects.all()
#         serializer = InputsSerializer(users, many=True)
#         print("Backend_b")
#         return Response(serializer.data, status=status.HTTP_200_OK)