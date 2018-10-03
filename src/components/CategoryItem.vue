<template>
    <span class="tab">{{ category.Name }}<br></span>
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
    .tab {
        margin-left: 20px;
    }
</style>
