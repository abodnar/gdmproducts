<template>
    <div>
        <div class="text-right">
            <b-btn @click="showModal">Edit</b-btn>
        </div>
        <b-modal ref="editProduct" hide-footer title="Edit Product">
            <ProductForm :category-options="categoryOptions" :form="form" :hide-modal="hideModal"
                         :on-submit="onSubmit"/>
        </b-modal>
    </div>
</template>
<script>
import bBtn from 'bootstrap-vue/es/components/button/button'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import ProductForm from '@/components/ProductForm'
import {HTTP} from '@/http-common'

const PRODUCT_RESOURCE = '/Products'
const CATEGORY_RESOURCE = '/Categories'

export default {
  name: 'EditProduct',
  components: {
    bBtn,
    bModal,
    ProductForm
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
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

      HTTP.put(PRODUCT_RESOURCE + '/' + this.id, {
        Name: this.form.name,
        Description: this.form.description,
        Url: this.form.url,
        CategoryIds: this.form.categories
      })
        .then(function (response) {
          console.log(response)
          this.hideModal()
        })
        .catch(error => {
          console.log(error)
        })
    },
    showModal () {
      HTTP.get(PRODUCT_RESOURCE + '/' + this.id)
        .then(response => {
          this.form.name = response.data.Name
          this.form.description = response.data.Description
          this.form.url = response.data.Url
          this.form.categories = []
          if (response.data.Categories !== null) {
            for (let c of response.data.Categories) {
              this.form.categories.push(c.CategoryId)
            }
          }
        })
        .catch(error => {
          console.log(error)
        })

      this.$refs.editProduct.show()
    },
    hideModal () {
      this.$refs.editProduct.hide()
    }
  }
}
</script>
