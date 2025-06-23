<template>
    <section class="py-3 bg-light">
        <div class="container">
            <h3 class="theme-primary-color text-center mb-4">Get an Instant Quote</h3>

            <form @submit.prevent="handleSubmit" class="row g-3">
                <div class="col-md-6">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name*"
                        v-model="form.fullName"
                        required
                    />
                </div>
                <div class="col-md-6">
                    <input
                        type="email"
                        class="form-control"
                        placeholder="Email*"
                        v-model="form.email"
                        required
                    />
                </div>
                <div class="col-md-6">
                    <input
                        type="tel"
                        class="form-control"
                        placeholder="Phone*"
                        v-model="form.phone"
                        required
                    />
                </div>
                <div class="col-md-6">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity (min: 500)*"
                        v-model="form.quantity"
                        min="500"
                        required
                    />
                </div>
                <div class="col-12">
                    <select
                        class="form-select"
                        v-model="form.packagingType"
                        required
                    >
                        <option disabled value="">Select Packaging Type</option>
                        <option>Cosmetic Packaging</option>
                        <option>Food Packaging</option>
                        <option>Retail Packaging</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                <div class="col-12">
          <textarea
              class="form-control"
              rows="5"
              v-model="form.details"
              placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
          ></textarea>
                </div>
                <div class="col-12 text-center">
                    <button type="submit" class="btn theme-color-button
 px-5 py-2 fw-semibold">
                        Get a Quote
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    fullName: '',
    email: '',
    phone: '',
    quantity: '',
    packagingType: '',
    details: '',
})

function handleSubmit() {
    // Replace with API integration or emit event
    console.log('Form submitted:', form)
    alert('Your quote request has been submitted!')
}
</script>
