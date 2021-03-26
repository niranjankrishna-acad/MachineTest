from django.contrib import admin

from .models import Order
# Register your models here.


class OrdersAdmin(admin.ModelAdmin):
    list_display = ('user', 'product_names', 'total_products',
                    'transaction_id', 'total_amount')


admin.site.register(Order, OrdersAdmin)
