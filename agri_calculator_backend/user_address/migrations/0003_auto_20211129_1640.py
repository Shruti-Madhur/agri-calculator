# Generated by Django 3.2.9 on 2021-11-29 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_address', '0002_auto_20211129_1633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='district',
            field=models.CharField(blank=True, default='', max_length=30),
        ),
        migrations.AlterField(
            model_name='address',
            name='division',
            field=models.CharField(blank=True, default='', max_length=30),
        ),
        migrations.AlterField(
            model_name='address',
            name='upazila',
            field=models.CharField(blank=True, default='', max_length=30),
        ),
    ]
