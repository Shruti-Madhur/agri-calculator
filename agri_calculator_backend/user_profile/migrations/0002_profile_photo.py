# Generated by Django 3.2.9 on 2021-11-26 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='photo',
            field=models.ImageField(default=None, upload_to=None),
        ),
    ]
