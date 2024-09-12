from rest_framework import serializers
from .models import *

class InputsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inputs
        fields = '__all__'