<template>
    <b-list-group-item button>
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
    </b-list-group-item>
</template>

<script>
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item'
import EditProduct from '@/components/EditProduct'

export default {
  name: 'ProductItem',
  components: {
    EditProduct,
    bContainer,
    bRow,
    bCol,
    bListGroupItem},
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
    .tab {
        margin-left: 20px;
    }
</style>
