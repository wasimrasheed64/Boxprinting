<template>
    <section class="blog__area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div :class="`col-xl-${leftSide ? '12' : '12'} col-lg-12 col-md-12 col-12`">
                    <div class="blog__wrapper">
                        <div class="row">
                            <blog-standard-item
                                v-for="(blog, i) in filteredRows.slice(pageStart, pageStart + countOfPage)"
                                :key="i"
                                :blog="blog"
                            />
                        </div>
                        <div class="row">
                            <div class="col-xl-12">
                                <pagination
                                    :items="blogData.filter((b) => b.blog === 'blog-standard')"
                                    :count-of-page="3"
                                    @paginatedData="paginatedData"
                                />
                            </div>
                        </div>
                    </div>
                </div>
<!--                <div v-if="!leftSide" class="col-xl-3 col-lg-4 offset-xl-1">-->
<!--                    <blog-sidebar />-->
<!--                </div>-->
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import blogData from '../../../data/blog-data.js'
import BlogSidebar from '../common/sidebar/BlogSidebar.vue'
import Pagination from '../../ui/Pagination.vue'
import BlogStandardItem from './BlogStandardItem.vue'

// Props
const props = defineProps({
    leftSide: {
        type: Boolean,
        default: false,
    },
})

// State
const filteredRows = ref([])
const pageStart = ref(0)
const countOfPage = ref(9)

// Methods
function paginatedData(rows = [], start = 0, count = 0) {
    filteredRows.value = rows
    pageStart.value = start
    countOfPage.value = count
}
</script>

<script>
export default {
    components: {
        BlogSidebar,
        Pagination,
        BlogStandardItem,
    },
}
</script>
