<template>
    <div class="tab">
        <b-list-group flush v-if="products.length && loading === false">
            <ProductItem
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </b-list-group>
        <p v-else-if="loading === false">
            No products. Add a new one.
        </p>
        <p v-else>
            Loading...
        </p>

        <br>
        <NewProduct/>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'
import NewProduct from '@/components/NewProduct'
import {HTTP} from '@/http-common'
import bListGroup from 'bootstrap-vue/es/components/list-group/list-group'

const RESOURCE = '/Products'

export default {
  name: 'Products',
  components: {
    ProductItem,
    NewProduct,
    bListGroup
  },
  data () {
    return {
      loading: true,
      products: []
    }
  },
  created () {
    HTTP.get(RESOURCE)
      .then(response => {
        this.loading = false
        this.products = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
    .tab {
        margin-left: 20px;
    }
</style>
