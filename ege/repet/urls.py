from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'is_teacher$', views.is_teacher, name='is_teacher'),#TODO
    url(r'register_student$', views.register_student, name='register_student'),
    url(r'update_student_info$',views.update_student_info,name='update_student_info'),
]
