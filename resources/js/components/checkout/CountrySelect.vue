<template>
  <div class="country-select">
    <label>Country <span class="required">*</span></label>
    <Field name="country" as="select">
      <option value="">Select A Country</option>
      <option value="bangladesh">bangladesh</option>
      <option value="Algeria">Algeria</option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Ghana">Ghana</option>
      <option value="Albania">Albania</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Colombia">Colombia</option>
      <option value="Dominican Republic">Dominican Republic</option>
    </Field>
    <ErrorMessage name="country" class="error" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field,ErrorMessage } from "vee-validate";

export default defineComponent({
  components: { Field,ErrorMessage },
});
</script>
