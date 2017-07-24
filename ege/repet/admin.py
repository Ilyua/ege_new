from django.contrib import admin
from .models import Course,Theme,Subtheme,Student,Teacher,Test #,Lesson

admin.site.register(Course)
admin.site.register(Theme)
admin.site.register(Subtheme)
admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(Test)

#admin.site.register(Lesson)


