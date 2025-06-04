<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-20">
      <label for="email-id">Email Address <span>**</span></label>
      <Field name="email" id="email-id" type="text" placeholder="Email address..." />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="pass">Password <span>**</span></label>
      <Field name="password" id="pass" type="password" placeholder="Enter password..." />
      <ErrorMessage name="password" class="text-danger" />
    </div>

    <div class="login-action mb-20 fix">
        <span class="log-rem f-left">
            <input id="remember" type="checkbox" />
            <label for="remember">Remember me!</label>
        </span>
        <span class="forgot-login f-right">
            <a href="#">Lost your password?</a>
        </span>
    </div>
    <button class="os-btn w-100">Login Now</button>
    <div class="or-divide"><span>or</span></div>
    <Link href="/register" class="os-btn os-btn-black w-100">
      Register Now
    </Link>
  </Form>
</template>

<script>
import { defineComponent } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  components: { Field, Form, ErrorMessage },
  setup() {
    const schema = yup.object({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().min(6).label("Password"),
    });

    function onSubmit(values, { resetForm }) {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }
    return { schema, onSubmit };
  },
});
</script>

