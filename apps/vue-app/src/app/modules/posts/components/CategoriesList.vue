<template>
  <div class="btn-group" role="group">
    <CategoryItem v-for="category in categories" :key="category._id" />
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';

export default {
  name: 'CategoriesList',
  components: {
    CategoryItem
  },
  data() {
    return {
      categories: [
        {
          _id: '2',
          name: 'Category 1'
        },
        {
          _id: '3',
          name: 'Category 2'
        },
        {
          _id: '4',
          name: 'Category 3'
        }
      ]
    };
  },
  methods: {
    buildCategories() {
      this.categories = [
        {
          _id: '1',
          name: 'All'
        },
        ...this.categories
      ];

      this.categories = this.categories.map((category) => ({
        ...category,
        active: category.name === 'All'
      }));
    }
  },
  created() {
    this.buildCategories();
  }
};
</script>
