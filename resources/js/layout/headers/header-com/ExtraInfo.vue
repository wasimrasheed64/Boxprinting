<template>
  <ul class="extra-info">
      <li>
          <div class="my-account">
              <div class="extra-title">
                  <h5>My Account</h5>
              </div>
              <ul>
                  <li><Link href="/account">My Account</Link></li>
                  <li><Link href="/wishlist">Wishlist</Link></li>
                  <li><Link href="/cart">Cart</Link></li>
                  <li><Link href="/checkout">Checkout</Link></li>
                  <li><Link href="/register">Create Account</Link></li>
              </ul>
          </div>
      </li>
      <li>
          <div class="lang">
              <div class="extra-title">
                  <h5>Language</h5>
              </div>
              <ul>
                  <li><a href="#">English</a></li>
                  <li><a href="#">France</a></li>
                  <li><a href="#">Germany</a></li>
                  <li><a href="#">Bangla</a></li>
              </ul>
          </div>
      </li>
      <li>
          <div class="currency">
              <div class="extra-title">
                  <h5>currency</h5>
              </div>
              <ul>
                  <li><a href="#">USD - US Dollar</a></li>
                  <li><a href="#">EUR - Ruro</a></li>
                  <li><a href="#">GBP - Britis Pound</a></li>
                  <li><a href="#">INR - Indian Rupee</a></li>
              </ul>
          </div>
      </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';

import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  setup () {
    return {}
  }
})
</script>
