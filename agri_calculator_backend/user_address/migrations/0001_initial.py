# Generated by Django 3.2.9 on 2021-11-26 00:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='District',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, default='', max_length=30)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Division',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, default='', max_length=30)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Upazila',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, default='', max_length=30)),
                ('district', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_address.district')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.AddField(
            model_name='district',
            name='division',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_address.division'),
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('street', models.CharField(blank=True, default='', max_length=30)),
                ('post_office', models.CharField(blank=True, default='', max_length=30)),
                ('postal_code', models.CharField(blank=True, default='', max_length=30)),
                ('district', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='user_address.district')),
                ('division', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='user_address.division')),
                ('upazila', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='user_address.upazila')),
            ],
            options={
                'ordering': ['created'],
            },
        ),
    ]
