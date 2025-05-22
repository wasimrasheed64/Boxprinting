<template>
 <section class="profile__area pt-120 pb-50 grey-bg">
    <div class="container">
        <div class="profile__basic-inner pb-20 bg-white">
          <div class="row align-items-center">
              <div class="col-xxl-6 col-md-6">
                <div class="profile__basic d-md-flex align-items-center">
                    <div class="profile__basic-thumb mr-30">
                      <img src="/assets/img/testimonial/person-1.jpg" alt="">
                    </div>
                    <div class="profile__basic-content">
                      <h3 class="profile__basic-title">
                          Welcome Back <span>Admin</span>
                      </h3>
                      <p>{{state.cart_products.length}} Running Products <nuxt-link href="/cart">View Cart</nuxt-link></p>
                    </div>
                </div>
              </div>
              <div class="col-xxl-6 col-md-6">
                <div class="profile__basic-cart d-flex align-items-center justify-content-md-end">
                    <div class="cart-info mr-10">
                      <Link href="/cart">View cart</Link>
                    </div>
                    <div class="cart-item">
                      <Link href="/cart">
                          <i class="fa-regular fa-basket-shopping"></i>
                          <span class="cart-quantity">{{state.cart_products.length}}</span>
                      </Link>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { useCartStore } from '@/store/useCart';
import { Link } from '@inertiajs/vue3';
export default defineComponent({
    components: { Link },
  setup () {
    const state = useCartStore();
    return {state}
  }
})
</script>
