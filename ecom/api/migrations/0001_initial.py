from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name='Maneesh',
                          email='man@gmail.com',
                          is_staff=True,
                          is_superuser=True,
                          gender='Male',
                          phone='987654321'
                          )
        user.set_password("12345")
        user.save()

    dependencies = []

    operations = [
        migrations.RunPython(seed_data),
    ]
