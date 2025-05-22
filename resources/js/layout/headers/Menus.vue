<template>
  <ul>
    <li
      v-for="(item, index) in menuData"
      :key="index"
      :class="`${
        item.hasDropdown && !item.megamenu
          ? 'active has-dropdown'
          : item.megamenu && 'mega-menu has-dropdown'
      }`"
    >
      <Link :href="`${item.link}`">{{ item.title }}</Link>

      <ul
        v-if="item?.hasDropdown && !item.megamenu"
        class="submenu transition-3"
      >
        <li v-for="(menu, index) in item.dropdownItems" :key="index">
          <Link :href="`${menu.link}`">{{ menu.title }}</Link>
        </li>
      </ul>

      <ul
        v-if="item.hasDropdown && item.megamenu"
        class="submenu transition-3"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <li
          v-for="(m_mnu, index) in item.dropdownItems"
          :key="index"
          class="has-dropdown"
        >
          <Link :href="`${m_mnu.link}`">{{m_mnu.title}}</Link>
          <ul>
            <li v-for="(m, index) in m_mnu.dropdownMenu" :key="index">
              <Link :href="`${m.link}`">{{ m.title }}</Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import bg from '../../../assets/img/bg/mega-menu-bg.jpg';


import { defineComponent } from "vue";
import menuData from "../../mixins/menuData.js";
import { Link } from '@inertiajs/vue3';

export default defineComponent({
    components: { Link },
    mixins: [menuData],
  data(){
    return {
      bg
    }
  },
  setup () {

  }
});
</script>
