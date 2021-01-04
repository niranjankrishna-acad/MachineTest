from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# Creating model based on existing model


class CustomUser(AbstractUser):
    name = models.CharField(max_length=30, default='Anonymous')
    email = models.CharField(max_length=100, unique=True)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    phone = models.CharField(max_length=12, blank=True, null=True)
    gender = models.CharField(max_length=8, blank=True, null=True)

    session_token = models.CharField(max_length=10, default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
