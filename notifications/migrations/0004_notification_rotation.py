# Generated by Django 3.1.2 on 2020-10-30 00:07

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0003_auto_20201029_2348'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='rotation',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='notifications.rotation'),
            preserve_default=False,
        ),
    ]
