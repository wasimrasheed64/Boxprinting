<template>
    <div :class="`product__modal-content ${style_2 ? 'product__modal-content-2' : ''}`">
        <h4 class="theme-primary-color">
            <span v-html="item.name"></span>
            <p  v-html="item.short_description"></p>
        </h4>

        <div class="product__modal-form">

         <QouteForm></QouteForm>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useCartStore } from '@/store/useCart'
import QouteForm from '@/components/forms/QouteForm.vue';

const props = defineProps<{
    item: any
    style_2?: boolean
}>()

const cart = useCartStore()
const orderQuantity = ref(1)

const addCartProduct = (product: any) => {
    cart.orderQuantity = orderQuantity.value
    cart.add_cart_product(product)
}
</script>
