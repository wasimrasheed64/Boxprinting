<template>
  <section :class="`footer__area footer-bg`">
      <div class="footer__top pt-100 pb-60">
          <div class="container">
              <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div class="footer__widget mb-30">
                          <div class="footer__widget-title mb-25">
                              <Link to="/">
                                  <img src="/assets/img/logo/logo-2.png" alt="logo" />
                              </Link>
                          </div>
                          <div class="footer__widget-content">
                              <p>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p>
                              <div class="footer__contact">
                                  <ul>
                                      <li>
                                          <div class="icon">
                                              <i class="fal fa-map-marker-alt"></i>
                                          </div>
                                          <div class="text">
                                              <span>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</span>
                                          </div>
                                      </li>
                                      <li>
                                          <div class="icon">
                                              <i class="fal fa-envelope-open-text"></i>
                                          </div>
                                          <div class="text">
                                              <span>Email: Contact@basictheme.com</span>
                                          </div>
                                      </li>
                                      <li>
                                          <div class="icon">
                                              <i class="fal fa-phone-alt"></i>
                                          </div>
                                          <div class="text">
                                              <span>Phone Number: (800) 123 456 789</span>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-12">
                      <div class="footer__widget mb-30">
                          <div class="footer__widget-title">
                              <h5>information</h5>
                          </div>
                          <div class="footer__widget-content">
                              <div class="footer__Links">
                                  <ul>
                                      <li><a href="#">About Us</a></li>
                                      <li><a href="#">Careers</a></li>
                                      <li><a href="#">Delivery Inforamtion</a></li>
                                      <li><a href="#">Privacy Policy</a></li>
                                      <li><a href="#">Terms & Condition</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-12">
                      <div class="footer__widget mb-30">
                          <div class="footer__widget-title mb-25">
                              <h5>Customer Service</h5>
                          </div>
                          <div class="footer__widget-content">
                              <div class="footer__Links">
                                  <ul>
                                      <li><a href="#">Shipping Policy</a></li>
                                      <li><a href="#">Help & Contact Us</a></li>
                                      <li><a href="#">Returns & Refunds</a></li>
                                      <li><a href="#">Online Stores</a></li>
                                      <li><a href="#">Terms & Conditions</a></li>
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
                          <p>Copyright {{new Date().getFullYear()}} © <Link href="/">Outstock</Link> all rights reserved. Powered by <Link href="/">Theme_pure</Link></p>
                      </div>
                  </div>
                  <div class="col-xl-6 col-lg-5">
                      <div class="footer__social f-right">
                          <ul>
                              <social/>
                              <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { Link } from '@inertiajs/vue3';
import Social from '@/components/social/Social.vue';

export default defineComponent({
  components: { Social, Link},
  props:{
    box_style:{
        type:Boolean,
        default:false,
    }
  }
})
</script>
