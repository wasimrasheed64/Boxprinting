<template>
  <section class="profile__menu pb-70 grey-bg">
    <div class="container">
        <div class="row">
          <div class="col-xxl-4 col-md-4">
              <div class="profile__menu-left bg-white mb-50">
                <h3 class="profile__menu-title"><i class="fa fa-list-alt"></i> Your Menu</h3>
                <div class="profile__menu-tab">
                    <div class="nav nav-tabs flex-column justify-content-start text-start" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="nav-account-tab" data-bs-toggle="tab" data-bs-target="#nav-account" type="button" role="tab" aria-controls="nav-account" aria-selected="true"> <i class="fa fa-user"></i> My Account</button>
                      <button class="nav-link" id="nav-order-tab" data-bs-toggle="tab" data-bs-target="#nav-order" type="button" role="tab" aria-controls="nav-order" aria-selected="false"><i class="fa fa-file"></i>Orders</button>
                      <button class="nav-link" id="nav-password-tab" data-bs-toggle="tab" data-bs-target="#nav-password" type="button" role="tab" aria-controls="nav-password" aria-selected="false"><i class="fa fa-lock"></i>Change Password</button>
                      <button class="nav-link"><i class="fa fa-sign-out"></i> Logout</button>
                    </div>
                </div>
              </div>
          </div>
          <div class="col-xxl-8 col-md-8">
              <div class="profile__menu-right">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">
                      <div class="profile__info">
                          <div class="profile__info-top d-flex justify-content-between align-items-center">
                            <h3 class="profile__info-title">Profile Information</h3>
                            <button class="profile__info-btn" type="button" data-bs-toggle="modal" data-bs-target="#profile_edit_modal">
                              <i class="fa-regular fa-pen-to-square"></i> Edit Profile
                            </button>
                          </div>
                          <div class="profile__info-wrapper white-bg">
                            <div class="profile__info-item">
                                <p>Name</p>
                                <h4>John Smith</h4>
                            </div>
                            <div class="profile__info-item">
                                <p>Email</p>
                                <h4>
                                  <a href="mailt:outstock@hotmail.com" class="__cf_email__" data-cfemail="94fdfaf2fbd4f1f0e1fff1e6baf7fbf9">outstock@hotmail.com</a>
                                </h4>
                            </div>
                            <div class="profile__info-item">
                                <p>Phone</p>
                                <h4>(325) 463-5693</h4>
                            </div>
                            <div class="profile__info-item">
                                <p>Address</p>
                                <h4>Abingdon, Maryland(MD), 21009</h4>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-order" role="tabpanel" aria-labelledby="nav-order-tab">
                      <div class="order__info">
                          <div class="order__info-top d-flex justify-content-between align-items-center">
                            <h3 class="order__info-title">My Orders</h3>
                            <button type="button" class="order__info-btn">
                              <i class="fa-regular fa-trash-can"></i> Clear
                            </button>
                          </div>
                          <div class="order__list white-bg table-responsive">
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td class="order__id">#3520</td>
                                    <td>
                                      <Link href="/product-details" class="order__title">University seminar series global.</Link></td>
                                    <td>$144.00</td>
                                    <td>
                                      <Link href="/product-details" class="order__view-btn">View</Link></td>
                                  </tr>
                                  <tr>
                                    <td class="order__id">#2441</td>
                                    <td>
                                      <Link href="/product-details" class="order__title">Web coding and apache basics</Link></td>
                                    <td>$59.54</td>
                                    <td>
                                      <Link href="/product-details" class="order__view-btn">View</Link></td>
                                  </tr>
                                </tbody>
                              </table>
                          </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                      <div class="password__change">
                          <div class="password__change-top">
                            <h3 class="password__change-title">Change Password</h3>
                          </div>
                          <div class="password__form white-bg">
                            <!-- form start -->
                            <change-password-form/>
                            <!-- form start -->
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  </section>

  <!-- edit modal start -->
  <profile-edit-modal/>
  <!-- edit modal end -->
</template>

<script>
import { defineComponent } from 'vue';
import ProfileEditModal from '../common/modals/ProfileEditModal.vue';
import ChangePasswordForm from '../forms/ChangePasswordForm.vue';
import { Link } from '@inertiajs/vue3';

export default defineComponent({
  components: { ChangePasswordForm, ProfileEditModal, Link },
})
</script>
