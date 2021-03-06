# Generated by Django 3.1.2 on 2020-10-27 03:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date_time', models.DateTimeField(auto_now_add=True)),
                ('end_date_time', models.DateTimeField(auto_now=True)),
                ('message', models.TextField()),
                ('notification_type', models.CharField(choices=[('TEXT', 'TEXT'), ('CALL', 'CALL')], max_length=20)),
                ('user_response', models.CharField(choices=[('ACCEPT', 'ACCEPT'), ('DECLINE', 'DECLINE'), ('NO RESPONSE', 'NO RESPONSE')], max_length=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
