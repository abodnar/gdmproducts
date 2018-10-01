<template>
    <div>
        <select v-model="selected" multiple>
            <CategoryItem
                v-for="category in categories"
                :key="category.CategoryId"
                :category="category"
            />
        </select>
    </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'
import {HTTP} from '@/http-common'

const RESOURCE = '/Categories'

export default {
  name: 'Categories',
  components: {
    CategoryItem
  },
  data () {
    return {
      selected: [],
      categories: []
    }
  },
  created () {
    HTTP.get(RESOURCE)
      .then(response => {
        this.categories = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
