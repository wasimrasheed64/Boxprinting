<template>
    <section :class="`footer__area footer-bg`">
        <div class="footer__top pt-100 pb-60">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-12">
                        <div class="footer__widget mb-30">
                            <div class="footer__widget-title mb-25">
                                <Link to="/">
                                    <img :src="siteSettings.footer_logo" alt="logo" style="width:100%" />
                                </Link>
                            </div>
                            <div class="footer__widget-content">
                                <p>
                                    {{ siteSettings.footer_description || 'Your trusted partner in delivering exceptional packaging solutions tailored to your needs. From innovative design to seamless delivery, we ensure excellence at every step.' }}
                                </p>

                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-3 col-12">
                        <div class="footer__widget mb-30">
                            <div class="footer__widget-title">
                                <h5>Our Top Categories</h5>
                            </div>
                            <div class="footer__widget-content">
                                <div class="footer__Links">
                                    <ul v-for="(link, index) in footerCategories" :key="index">
                                        <li><a :href="link.slug">{{ link.name }}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-3 col-12">
                        <div class="footer__widget mb-30">
                            <div class="footer__widget-title mb-25">
                                <h5>Our Top Products</h5>
                            </div>
                            <div class="footer__widget-content">
                                <div class="footer__Links">
                                    <ul v-for="(link, index) in footerLinks" :key="index">
                                        <li><a :href="link.link">{{ link.name }}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-12">
                        <div class="footer__widget mb-30">
                            <div class="footer__widget-title mb-25">
                                <h5>Contact Us</h5>
                            </div>
                            <div class="footer__widget-content">
                                <div class="footer__contact">
                                    <ul>
                                        <li>
                                            <div class="icon">
                                                <i class="fa fa-map-marker-alt"></i>
                                            </div>
                                            <div class="text">
                                                <span>Add: {{ siteSettings.address}}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fa fa-envelope-open-text"></i>
                                            </div>
                                            <div class="text">
                                                <span>Email: {{ siteSettings.email}}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fa fa-phone-alt"></i>
                                            </div>
                                            <div class="text">
                                                <span>Phone Number: {{ siteSettings.phone}}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="footer__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-7">
                        <div class="footer__copyright">
                            <p>
                                Copyright {{ currentYear }} © <Link href="/">Create My Packaging</Link> all rights reserved.
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-5">
                        <div class="footer__social f-right">
                            <ul>
                                <Social />
                                <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import Social from '@/components/social/Social.vue';
const siteSettings = ref(usePage().props?.siteSettings || {});
const footerLinks = ref(usePage().props?.footerLinks || {});
const footerCategories = ref(usePage().props?.footerCategories || []);
const topBlogs = ref(usePage().props?.topBlogs || []);

const socialLinks = ref(usePage().props?.socialLinks || {});

defineProps({
    box_style: {
        type: Boolean,
        default: false
    }
});

const currentYear = new Date().getFullYear();
</script>
