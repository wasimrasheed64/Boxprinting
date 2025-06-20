<template>
    <ul>
        <li
            v-for="(item, index) in mainCategories"
            :key="index"
            class="mega-menu has-dropdown"
        >
            <Link :href="`${item.slug}`">{{ item.name }}</Link>

            <!-- Mega menu dropdown -->
            <ul
                v-if="item.categories?.length"
                class="submenu mega-menu-grid"
            >
                <li class="mega-menu-left">
                    <div class="category-grid">
                        <div
                            v-for="(category, index) in item.categories.slice(0, 4)"
                            :key="index"
                            class="category-card"
                        >
                            <Link :href="category.slug">
                                <img src="https://www.halfpricepackaging.com/_ipx/f_webp&fit_cover&s_440x440/images/home-featured-industries/cosmetics-boxes.jpg" class="category-image" alt="category" />
                                <div class="category-title">{{ category.name }}</div>
                            </Link>
                        </div>
                    </div>
                </li>

                <!-- Right side text links + Remaining categories -->
                <li class="mega-menu-right">
                    <ul class="link-list">
                        <!-- Right Categories from categories list -->
                        <li
                            v-for="(category, index) in item.categories.slice(4, 9)"
                            :key="'cat-' + index"
                        >
                            <Link :href="category.link" class="arrow-link">
                                {{ category.name }}
                                <span class="arrow">›</span>
                            </Link>
                        </li>

                        <!-- Right predefined links -->
                    </ul>

                    <!-- Show View All button only if more than 9 categories -->
                    <Link v-if="item.categories.length > 9" :href="item.viewAllLink" class="view-all-button">
                        View All Industries
                    </Link>
                </li>

            </ul>
        </li>
    </ul>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { usePage, Link } from '@inertiajs/vue3'


const mainCategories = ref(usePage().props?.mainCategories || [])

</script>


<style lang="scss" scoped>
.submenu.mega-menu-grid {
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    gap: 30px;

    .mega-menu-left {
        flex: 2;

        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 10px;

            .category-card {
                text-align: center;

                .category-image {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    border-radius: 20px;
                    margin-bottom: 10px;
                }

                .category-title {
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
    }

    .mega-menu-right {
        flex: 1;

        .link-list {
            list-style: none;
            padding: 0;
            margin: 0 0 20px 0;

            li {

                .arrow-link {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 500;
                    color: #333;
                    text-decoration: none;

                    .arrow {
                        font-size: 18px;
                    }

                    &:hover {
                        color: #d81e5b; // your primary color
                    }
                }
            }
        }

        .view-all-button {
            display: inline-block;
            background-color: #d81e5b;
            color: #fff;
            padding: 10px 10px;
            border-radius: 8px;
            text-align: center;
            margin-right: 5px;
            font-weight: 500;
            text-decoration: none;
            &:hover {
                background-color: #b3184b;
            }
        }
    }
}


</style>
