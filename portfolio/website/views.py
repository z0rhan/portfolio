from django.shortcuts import render

# Create your views here.

def home(request):
    context = {}

    return render(request, "website/home.html", context)

def about(request):
    context = {}

    return render(render, "website/about.html", context)

def projects(request):
    context = {}

    return render(render, "website/projects.html", context)
