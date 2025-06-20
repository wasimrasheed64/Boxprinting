<template>
    <section
        class="page__title p-relative d-flex align-items-center"
        :style="{ backgroundImage: `url(${bannerBg})` }"
    >
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="page__title-inner text-center">
                        <h1>{{ title }}</h1>
                        <div class="page__title-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">{{ subtitle }}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import bg from '../../../../assets/img/page-title/page-title-1.jpg'

// Props definition
const props = defineProps<{
    title: string
    subtitle: string
    image?: string
}>()
const bannerBg = props.image || bg
</script>
