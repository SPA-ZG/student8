<script>
import LikeableParagraph from "./LikeableParagraph.vue";

export default {
  props: {
    section: Object,
  },
  data() {
    return {
      totalLikes: 0,
    };
  },
  components: {
    LikeableParagraph,
  },
  methods: {
    updateLikes(likes) {
      this.totalLikes += likes;
      this.$emit("liked", likes);
    },
  },
};
</script>

<template>
  <div class="section row m-3">
    <div class="col-md-1"></div>
    <div class="col-md-3">
      <img
        :src="section.image"
        alt="Section Image"
        class="img-fluid image-hover"
      />
    </div>
    <div class="col-md-7">
      <LikeableParagraph
        :title="section.title"
        :text="section.text"
        :total-likes="totalLikes"
        @liked="updateLikes"
      />
    </div>
    <div class="col-md-1"></div>
  </div>
</template>

<style scoped>
.image-hover {
  transition: transform 0.3s;
  border: 1px solid #28a745;
}

.image-hover:hover {
  transform: scale(1.05);
}
</style>
