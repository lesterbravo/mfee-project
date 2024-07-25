import { reactive } from 'vue';
import { getPosts } from '../helpers/posts';
export const store = reactive({
  currentCategoryId: '1',
  setCurrentCategory(categorySelected) {
    this.currentCategoryId = categorySelected;
  },
  posts: [],
  async getPosts() {
    this.posts = await getPosts();
  }
});
