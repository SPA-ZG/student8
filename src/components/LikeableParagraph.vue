<script>
import { useLikesStore } from "../stores/likes";
let store = undefined;

export default {
  props: {
    title: String,
    text: String,
  },
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    like() {
      this.likes += 1;
      if (store == undefined) store = useLikesStore();
      store.incrementTotalLikes();
      this.$emit("liked", 1);
    },
  },
};
</script>

<template>
  <div class="likeable">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <button @click="like" class="btn btn-danger like-btn">
      <i class="fas fa-heart"></i> {{ likes }}
    </button>
    <span class="text-info">Like</span>
  </div>
</template>

<style scoped>
p {
  color: #28a745;
}

.like-btn {
  background-color: #dc3545;
  border: 1px solid #dc3545;
  margin-right: 8px;
}

.like-btn:hover {
  background-color: #c82333;
  border-color: #c82333;
}

.fa-heart {
  color: white;
}
</style>
