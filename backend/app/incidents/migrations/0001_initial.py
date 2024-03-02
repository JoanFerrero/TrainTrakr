# Generated by Django 5.0.1 on 2024-02-13 16:28

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stations', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='IncidenceChair',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=25)),
                ('status', models.CharField(default='pending', max_length=100)),
                ('desc', models.CharField(max_length=300)),
                ('chair', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chair_affected', to='stations.chair')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='incident_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='IncidenceTrain',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=25)),
                ('status', models.CharField(default='pending', max_length=100)),
                ('desc', models.CharField(max_length=300)),
                ('train', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='train_affected', to='stations.train')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_incident', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seen', models.BooleanField(default=False)),
                ('desc', models.CharField(max_length=300)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_notification', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
