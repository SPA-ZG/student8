<script>
import { RouterLink, RouterView } from "vue-router";
import { useLikesStore } from "./stores/likes";

export default {
  data() {
    return {
      totalLikes: 0,
    };
  },
  mounted() {
    const store = useLikesStore();
    store.$onAction((newTotalLikes) => {
      this.totalLikes = newTotalLikes.store.getTotalLikes + 1; // Trick: +1 because this is previous store state
    });
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <RouterLink to="/" class="navbar-brand">Home</RouterLink>
        <RouterLink to="/about" class="navbar-brand">About</RouterLink>
        <div class="navbar-text">Hearts: {{ totalLikes }}</div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style></style>
