# Generated by Django 4.0 on 2022-01-02 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0005_alter_profile_date_of_birth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='photo',
            field=models.CharField(blank=True, default='', max_length=300),
        ),
    ]
