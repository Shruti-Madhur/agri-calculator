from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from calc_history import views

urlpatterns = [
    path('', views.CalcResultList.as_view()),
    path('<int:pk>/', views.CalcResultDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)