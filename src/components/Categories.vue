<template>
    <div>
        <CategoryItem
            v-for="category in categories"
            :key="category.CategoryId"
            :category="category"
        />
    </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'

export default {
  name: 'Categories',
  components: {
    CategoryItem
  },
  props: {
    categories: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>
