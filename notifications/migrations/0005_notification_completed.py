# Generated by Django 3.1.2 on 2020-10-30 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0004_notification_rotation'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]
