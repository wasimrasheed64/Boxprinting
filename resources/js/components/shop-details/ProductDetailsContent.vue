<template>
    <div :class="`product__modal-content ${style_2 ? 'product__modal-content-2' : ''}`">
        <h4>
            <span v-html="item.name"></span>
        </h4>
        <div class="product__modal-form">
<!--            <div class="row">-->
<!--                <div class="col-lg-12 col-md-12">-->
<!--                   <h3>Get Custom Qoute</h3>-->
<!--                </div>-->
<!--            </div>-->
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
