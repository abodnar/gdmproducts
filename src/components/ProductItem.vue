<template>
    <b-list-group-item button @click="toggleDetails" :class="showCollapse ? 'collapsed' : null"
                       aria-controls="collapse4">
        <b-container fluid>
            <b-row>
                <b-col sm="6">
                    {{ product.Name }}
                    <br><span class="tab">{{ product.Description }}</span>
                </b-col>
                <b-col sm="6">
                    <EditProduct :id="product.ProductId" :product="product"/>
                </b-col>
            </b-row>
        </b-container>
        <b-collapse v-model="showCollapse" id="collapse4">
            <b-container fluid>
                <b-row>
                    <b-col sm="12">
                        URL: {{ product.Url }}
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="12">
                        Categories: <Categories :categories="product.Categories"/>
                    </b-col>
                </b-row>
            </b-container>
        </b-collapse>
    </b-list-group-item>
</template>

<script>
import bToggle from 'bootstrap-vue/es/directives/toggle/toggle'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item'
import EditProduct from '@/components/EditProduct'
import {HTTP} from '@/http-common'
import Categories from '@/components/Categories'

const RESOURCE = '/Products'

export default {
  name: 'ProductItem',
  components: {
    Categories,
    EditProduct,
    bContainer,
    bCollapse,
    bRow,
    bCol,
    bListGroupItem
  },
  directives: {
    bToggle: bToggle
  },
  methods: {
    toggleDetails () {
      if (!this.product.hasOwnProperty('Url')) {
        HTTP.get(RESOURCE + '/' + this.product.ProductId)
          .then(response => {
            for (let i = 0; i < this.$parent.products.length; i++) {
              if (this.$parent.products[i].ProductId === response.data.ProductId) {
                this.$parent.products.splice(i, 1, response.data)
              }
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
      this.showCollapse = !this.showCollapse
    },
    isCollapsed () {
      return this.showCollapse
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style scoped>
    .tab {
        margin-left: 20px;
    }
</style>
