<template>
    <div>
        <b-btn @click="showModal" variant="primary">New Product</b-btn>
        <b-modal ref="newProduct" hide-footer title="Create Product">
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
                    <!--<b-form-group id="productCategoriesGroup"-->
                    <!--label="Categories:"-->
                    <!--label-for="productCategoriesGroup">-->
                    <!--&lt;!&ndash;<b-form-select id="exampleInput3"&ndash;&gt;-->
                    <!--&lt;!&ndash;:options="foods"&ndash;&gt;-->
                    <!--&lt;!&ndash;required&ndash;&gt;-->
                    <!--&lt;!&ndash;v-model="form.food">&ndash;&gt;-->
                    <!--&lt;!&ndash;</b-form-select>&ndash;&gt;-->
                    <!--</b-form-group>-->
                </div>
                <div class="text-right">
                    <b-btn @click="hideModal">Cancel</b-btn>
                    <b-btn type="submit" variant="primary">Submit</b-btn>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import bBtn from 'bootstrap-vue/es/components/button/button'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bForm from 'bootstrap-vue/es/components/form/form'
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import {HTTP} from '@/http-common'

const RESOURCE = '/Products'

export default {
  name: 'NewProduct',
  components: {
    bBtn,
    bModal,
    bForm,
    bFormGroup,
    bFormInput
  },
  data () {
    return {
      form: {
        name: '',
        description: '',
        url: '',
        categories: []
      }
    }
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
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      HTTP.post(RESOURCE, {
        Name: this.form.name,
        Description: this.form.description,
        Url: this.form.url,
        CategoryIds: this.form.categories
      })
        .then(response => {
          this.$parent.products.push(response.data)
          this.hideModal()
        })
        .catch(error => {
          console.log(error)
        })
    },
    showModal () {
      this.$refs.newProduct.show()
    },
    hideModal () {
      this.$refs.newProduct.hide()
      this.clearForm()
    },
    clearForm () {
      this.form.name = ''
      this.form.description = ''
      this.form.url = ''
      this.form.categories = []
    }
  }
}
</script>

<style scoped>

</style>
