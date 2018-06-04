from django.db import models
from datetime import datetime

class Messages(models.Model):
    date = models.DateTimeField()
    text = models.TextField()
    readed = models.BooleanField()
    
    def __str__(self):
        return self.text

# Create your models here.
