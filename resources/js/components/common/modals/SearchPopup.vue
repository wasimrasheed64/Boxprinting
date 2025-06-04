<template>
  <section :class="`header__search white-bg transition-3 ${showSearch?'search-opened':''}`">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="header__search-inner text-center">
                    <form action="#">
                        <div class="header__search-btn" @click="showSearch = false">
                            <a href="#" class="header__search-btn-close">
                              <i class="fal fa-times"></i>
                            </a>
                        </div>
                        <div class="header__search-header">
                            <h3>Search</h3>
                        </div>
                        <div class="header__search-categories">
                            <ul class="search-category">
                                <li><Link href="/shop">All Categories</Link></li>
                                <li><Link href="/shop">Accessories</Link></li>
                                <li><Link href="/shop">Chair</Link></li>
                                <li><Link href="/shop">Tablet</Link></li>
                                <li><Link href="/shop">Men</Link></li>
                                <li><Link href="/shop">Women</Link></li>
                            </ul>
                        </div>
                        <div class="header__search-input p-relative">
                            <input type="text" placeholder="Search for products... ">
                            <button type="submit"><i class="far fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!-- body overlay start -->
  <div @click="showSearch = false" 
   :class="`body-overlay transition-3 ${showSearch?'opened':''}`">
  </div>
  <!-- body overlay end -->
</template>

<script>
import { defineComponent } from 'vue';
import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
//  emits:['searchPopup'],
 data() {
  return {
    showSearch:false,
  }
 },
 methods:{
  openSearchPopup(){
    console.log('first')
    this.showSearch = true
  }
 }
})
</script>
