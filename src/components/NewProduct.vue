<template>
    <div>
        <b-btn @click="showModal" variant="primary">New Product</b-btn>
        <b-modal ref="newProduct" hide-footer title="Create Product">
            <ProductForm :category-options="categoryOptions" :form="form" :hide-modal="hideModal"
                         :on-submit="onSubmit"/>
        </b-modal>
    </div>
</template>

<script>
import bBtn from 'bootstrap-vue/es/components/button/button'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import {HTTP} from '@/http-common'
import ProductForm from '@/components/ProductForm'

const PRODUCT_RESOURCE = '/Products'
const CATEGORY_RESOURCE = '/Categories'

export default {
  name: 'NewProduct',
  components: {
    ProductForm,
    bBtn,
    bModal
  },
  data () {
    return {
      form: {
        name: '',
        description: '',
        url: '',
        categories: []
      },
      categoryOptions: []
    }
  },
  created () {
    HTTP.get(CATEGORY_RESOURCE)
      .then(response => {
        for (let c of response.data) {
          this.categoryOptions.push({text: c.Name, value: c.CategoryId})
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      HTTP.post(PRODUCT_RESOURCE, {
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
