<template>
 <tr>
      <td class="product-thumbnail">
       <Link :href="`/product-details/${item.id}`">
         <img :src="item.img" alt="">
       </Link>
      </td>
      <td class="product-name">
        <Link :href="`/product-details/${item.id}`">
          <span v-html="item.title"></span>
        </Link>
      </td>
      <td class="product-price"><span class="amount">${{item.price}}</span></td>
      <td class="product-quantity" @click.prevent="cartState.add_cart_product(item)">
          <button class="os-btn os-btn-black" type="submit">Add TO Cart</button>
      </td>
      <td class="product-subtotal"><span class="amount">${{item.price}}</span></td>
      <td class="product-remove" @click.prevent="wishlistState.removeWishlist(item)">
        <a href="#">
          <i class="fa fa-times"></i>
        </a>
      </td>
  </tr>
</template>

<script>
import { defineComponent } from 'vue'
import { useCartStore } from '../../store/useCart';
import { useWishlistStore } from '../../store/useWishlist';
import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  setup () {
    const cartState = useCartStore();
    const wishlistState = useWishlistStore();
    return {cartState,wishlistState}
  }
})
</script>
