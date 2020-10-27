from django.db import models

# Create your models here.
class User(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    organization = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)

    class Meta:
        db_table = 'users'
    
    def __str__(self):
        return self.firstname

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
