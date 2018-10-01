<template>
    <b-list-group-item button>
        <b-container fluid>
            <b-row>
                <b-col sm="6">
                    {{ product.Name }}
                    <br><span class="tab">{{ product.Description }}</span>
                </b-col>
                <b-col align="right" sm="6">
                    <b-btn @click="editProduct(product.ProductId)">Edit</b-btn>
                </b-col>
            </b-row>
        </b-container>
    </b-list-group-item>
</template>

<script>
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item'
import bBtn from 'bootstrap-vue/es/components/button/button'

export default {
  name: 'ProductItem',
  components: {
    bContainer,
    bRow,
    bCol,
    bListGroupItem,
    bBtn
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    editProduct (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
    .tab {
        margin-left: 20px;
    }
</style>
