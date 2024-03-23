# Install dependencies
FROM python:3.10.12 as install
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY /backend/app/requirements.txt .
COPY /backend/app .

# Start application
FROM python:3.10.12 as start
WORKDIR /app
COPY --from=install /app .
RUN pip install -r requirements.txt
RUN pip install django-cors-headers
EXPOSE 8000
ENTRYPOINT ["python3", "/app/manage.py", "runserver", "0.0.0.0:8000", "--noreload"]