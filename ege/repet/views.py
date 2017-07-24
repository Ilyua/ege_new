from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Student,Teacher,Subtheme
import json
from django.shortcuts import get_object_or_404


def is_teacher(request):

    if request.GET.get('phone'):
        phone = request.GET.get('phone')
        try:
            Teacher.objects.get(phone=phone)
        except Teacher.DoesNotExist:
            return JsonResponse({'is_teacher':'False'},status=200)
        else:
            return JsonResponse({'is_teacher':'True'},status=200)
    else:
        return JsonResponse({'message':'paramet doesn\'t exist or it is empty'},status=404)

@csrf_exempt
def register_student(request):
    if request.method == 'POST':
        received_data=json.loads(request.body.decode('utf8'))
        full_name = received_data.get('full_name')
        phone = received_data.get('phone')
        email = received_data.get('email')
        address = received_data.get('address')
        parent_name = received_data.get('parent_name')
        parent_phone = received_data.get('parent_phone')
        student = Student(
                full_name = full_name,
                phone = phone,
                email = email,
                address = address,#Привязать выбор
                parent_name = parent_name,
                parent_phone = parent_phone)#TODO)
        student.save()
        return JsonResponse({'message':'sucsesfully registered'},status=200)
    else:
        return JsonResponse({'message':'Unsuitable request method'},status=400)

@csrf_exempt
def update_student_info(request):

    if request.method == 'POST' :
        received_data=json.loads(request.body.decode('utf8'))

        search_phone = received_data.get('search_phone')
        full_name = received_data.get('full_name')
        phone = received_data.get('phone')
        email = received_data.get('email')
        address = received_data.get('address')
        parent_name = received_data.get('parent_name')
        parent_phone = received_data.get('parent_phone')

        student_to_update = get_object_or_404(Student, phone=search_phone)
        for (key, value) in received_data.items():
            setattr(student_to_update, key, value)


        student_to_update.save()
        return JsonResponse({'message':'student updated'},status=200)
    else:
        return JsonResponse({'message':'Unsuitable request method'},status=400)



def get_developments(request):
    if request.method == 'GET' and request.GET.get('phone'):

        phone = request.GET.get('phone')
        student = get_object_or_404(Student, phone=phone)

        week_shedule = {'monday':student.schedule.monday,
                        'tuesday':student.schedule.tuesday,
                        'wednesday':student.schedule.wednesday,
                        'thursday':student.schedule.thursday,
                        'friday':student.schedule.friday,
                        'saturday':student.schedule.saturday,
                        'sunday':student.schedule.sunday}
        return JsonResponse(week_shedule,status=200)
    else:
        return JsonResponse({'message':'Unsuitable request method or parameter is empty'},status=400)



def get_subtheme(request):
    if request.method == 'GET' and request.GET.get('subtheme_name'):

        subtheme_name = request.GET.get('subtheme_name')

        subtheme = get_object_or_404(Subtheme, name=subtheme_name)

        course = subtheme.theme.course.name
        theme = subtheme.theme.name
        return JsonResponse({'course':course,
                             'theme':theme,
                             'subtheme':subtheme.name,
                             'rendered_theory':subtheme.theory.rendered},status=200)
    else:
        return JsonResponse({'message':'Unsuitable request method or parameter is empty'},status=400)



