<template>
    <form @submit.prevent="submitForm" class="container p-4 bg-light rounded shadow-sm">
        <div class="row g-3">
            <div class="col-md-6">
                <label for="fullName" class="form-label">Full Name*</label>
                <input v-model="form.fullName" type="text" class="form-control" id="fullName" required />
            </div>

            <div class="col-md-6">
                <label for="email" class="form-label">Email*</label>
                <input v-model="form.email" type="email" class="form-control" id="email" required />
            </div>

            <div class="col-md-6">
                <label for="phone" class="form-label">Phone*</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone" required />
            </div>

            <div class="col-md-6">
                <label for="quantity" class="form-label">Quantity (min: 500)*</label>
                <input v-model.number="form.quantity" type="number" class="form-control" id="quantity" :min="500" required />
            </div>

            <div class="col-12">
                <label for="boxType" class="form-label">Select Box Type</label>
                <select v-model="form.boxType" class="form-select" id="boxType" required>
                    <option value="" disabled>Select Box Type</option>
                    <option v-for="type in boxTypes" :key="type" :value="type">{{ type }}</option>
                </select>
            </div>

            <div class="col-12">
                <label for="details" class="form-label">Details</label>
                <textarea
                    v-model="form.details"
                    class="form-control"
                    id="details"
                    rows="5"
                    placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
                ></textarea>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-lg w-100 text-white" style="background-color: #791432">
                    Get a Quote
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    fullName: '',
    email: '',
    phone: '',
    quantity: 500,
    boxType: '',
    details: ''
})

const boxTypes = [
    'Mailer Box',
    'Folding Carton',
    'Rigid Box',
    'Display Box',
    'Shipping Box'
]

function submitForm() {
    if (!form.fullName || !form.email || !form.phone || form.quantity < 500 || !form.boxType) {
        alert('Please fill all required fields and make sure quantity is at least 500.')
        return
    }

    // Replace with your actual submit logic
    console.log('Form data:', form)
}
</script>
