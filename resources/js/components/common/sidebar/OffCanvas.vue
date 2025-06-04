<template>
  <section
    :class="`extra__info transition-3 ${showSidebar ? 'info-opened' : ''}`"
  >
    <div class="extra__info-inner">
      <div class="extra__info-close text-end" @click="showSidebar = false">
        <a
          @click.prevent="showSidebar = false"
          href="#"
          class="extra__info-close-btn"
        >
          <i class="fal fa-times"></i>
        </a>
      </div>

      <!-- side-mobile-menu start -->
      <nav class="side-mobile-menu d-block d-lg-none mm-menu">
        <ul>
          <template v-for="(menu, i) in mobile_menus" :key="i">
            <li
              v-if="menu.dropdownMenu"
              :class="`menu-item-has-children has-droupdown
              ${activeMenu === menu.title ? 'active' : ''}`"
            >
              <a @click.prevent="handleOpenMenu(menu.title)">
               {{menu.title}}
              </a>
              <ul
                @click.prevent="showSidebar = false"
                :class="`sub-menu ${activeMenu === menu.title ? 'active' : ''}`"
              >
                <li v-for="(sub_m, index) in menu.dropdownMenu" :key="index">
                  <Link :href="`${sub_m.link}`">
                   {{sub_m.title}}
                  </Link>
                </li>
              </ul>
            </li>

            <li v-if="!menu.dropdownMenu">
              <Link :href="`${menu.link}`">{{ menu.title }}</Link>
            </li>
          </template>
        </ul>
      </nav>
      <!-- side-mobile-menu end -->
    </div>
  </section>

  <!--  body overlay  -->
  <div
    @click="showSidebar = false"
    :class="`body-overlay transition-3 ${showSidebar ? 'opened' : ''}`"
  ></div>
</template>

<script>
import { defineComponent, ref } from "vue";
// import menuData from "../../../mixins/menuData";

import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  data() {
    return {
      activeMenu: "",
      showSidebar: false,
    };
  },
  methods: {
    OpenOffcanvas() {
      this.showSidebar = true;
    },
    handleOpenMenu(navTitle) {
      if (navTitle === this.activeMenu) {
        this.activeMenu = "";
      } else {
        this.activeMenu = navTitle;
      }
    },
  },
  setup() {
    const mobile_menus = ref([
      {
        title: "Home",
        dropdown: true,
        dropdownMenu: [
          { link: "/", title: "Home Style 1" },
        ],
      },
      {
        title: "Shop",
        dropdown: true,
        dropdownMenu: [
          { link: "/shop", title: "Standard Shop Page" },
          { link: "/product-details", title: "Shop Details" },
        ],
      },
      {
        title: "Other Pages",
        dropdown: true,
        dropdownMenu: [
          { link: "/wishlist", title: "Wishlist" },
          { link: "/cart", title: "Cart" },
          { link: "/compare", title: "Compare" },
          { link: "/checkout", title: "Checkout" },
          { link: "/register", title: "Register" },
          { link: "/login", title: "Login" },
          { link: "/account", title: "Account" },
        ],
      },
      {
        title: "Blog",
        dropdown: true,
        dropdownMenu: [
          { link: "/blog", title: "Blog" },
          { link: "/blog-details", title: "Blog Details" },
        ],
      },
      {
        title: "Contact",
        dropdown: false,
        link: "/contact",
      },
    ]);
    return { mobile_menus };
  },
});
</script>
