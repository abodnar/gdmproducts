<template>
    <option v-bind:value="category.CategoryId">{{ category.Name }}</option>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
