from django.db import models
from markitup.fields import MarkupField

class Course(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
class CoursePart(models.Model):
    name = models.CharField(max_length=200)
    course = models.ForeignKey(Course,on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Theme(models.Model):
    name = models.CharField(max_length=200)
    course_part = models.ForeignKey(Course,on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Subtheme(models.Model):
    name = models.CharField(max_length=200)
    theory = MarkupField()
    theme = models.ForeignKey(Theme,on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Test(models.Model):
    name =  models.CharField(max_length=200)
    task = MarkupField()
    tip = MarkupField()
    right_answer = models.CharField(max_length=200)
    input_type = models.CharField(max_length=200)
    answers = models.CharField(max_length=200)
    subtheme = models.ForeignKey(Subtheme,on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Student(models.Model):
    full_name = models.CharField(max_length=200,blank=True,default='')
    phone = models.CharField(max_length=200)#TODO
    email = models.EmailField(blank=True,default='')
    address = models.CharField(max_length=200,blank=True,default='')#Привязать выбор
    parent_name = models.CharField(max_length=200,blank=True,default='')
    parent_phone = models.CharField(max_length=200,blank=True,default='')#TODO
    def __str__(self):
        return self.phone


class Teacher(models.Model):
    qualifications  =  (('A','Category A'),('B','Category B'),('C','Category C'))
    full_name = models.CharField(max_length=200,blank=True,default='')
    phone = models.CharField(max_length=200)#TODO
    email = models.EmailField(blank=True,default='')
    address = models.CharField(max_length=200,blank=True,default='')#Привязать выбор
    qualification = models.CharField(max_length=1,choices=qualifications,blank=True,default='')#TODO
    def __str__(self):
        return self.full_name


class Schedule(models.Model):
    student = models.OneToOneField(Student,on_delete=models.CASCADE)
    monday = models.TimeField(blank=True,null=True)
    tuesday = models.TimeField(blank=True,null=True)
    wednesday = models.TimeField(blank=True,null=True)
    thursday = models.TimeField(blank=True,null=True)
    friday = models.TimeField(blank=True,null=True)
    saturday = models.TimeField(blank=True,null=True)
    sunday = models.TimeField(blank=True,null=True)


    def __str__(self):
        return self.student.full_name

