<template>
    <b-form @submit="onSubmit">
        <div class="d-block">
            <b-form-group id="productNameGroup"
                          label="Name:"
                          label-for="productNameGroup">
                <b-form-input id="productName"
                              type="text"
                              v-model="form.name"
                              required
                              :state="nameState"
                              placeholder="Enter the product name">
                </b-form-input>
            </b-form-group>
            <b-form-group id="productDescriptionGroup"
                          label="Description:"
                          label-for="productDescriptionGroup">
                <b-form-input id="productDescription"
                              type="text"
                              v-model="form.description"
                              :state="descriptionState"
                              placeholder="Enter a description for the product">
                </b-form-input>
            </b-form-group>
            <b-form-group id="productDescriptionUrl"
                          label="URL:"
                          label-for="productDescriptionUrl">
                <b-form-input id="productUrl"
                              type="url"
                              v-model="form.url"
                              :state="urlState"
                              placeholder="Enter a url for the product">
                </b-form-input>
            </b-form-group>
            <b-form-group id="productCategoriesGroup"
                          label="Categories:"
                          label-for="productCategoriesGroup">
                <b-form-select id="productCategories"
                               multiple
                               :options="categoryOptions"
                               v-model="form.categories"
                               :select-size="4"
                               class="mb-3">
                </b-form-select>
            </b-form-group>
        </div>
        <div class="text-right">
            <b-btn @click="hideModal">Cancel</b-btn>
            <b-btn type="submit" variant="primary">Submit</b-btn>
        </div>
    </b-form>
</template>
<script>
import BBtn from 'bootstrap-vue/es/components/button/button'
import BForm from 'bootstrap-vue/es/components/form/form'
import BFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
import BFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import BFormSelect from 'bootstrap-vue/es/components/form-select/form-select'

export default {
  name: 'ProductForm',
  components: {
    BBtn,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect
  },
  props: {
    categoryOptions: {},
    form: {},
    hideModal: {},
    onSubmit: {}
  },
  computed: {
    nameState () {
      return !!(this.form.name.length && this.form.name.length < 50)
    },
    descriptionState () {
      return this.form.description.length < 200
    },
    urlState () {
      return this.form.url.length < 500
    }
  }
}
</script>
