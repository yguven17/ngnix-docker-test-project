from django.db import models

# Create your models here.

class Inputs(models.Model):
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    input1 = models.CharField(max_length=100)
    input2 = models.CharField(max_length=100)
    