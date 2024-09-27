<script>
import Section from "../components/Section.vue";

export default {
  data() {
    return {
      section: {
        image:
          "https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2023/07/13220529/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities.jpeg",
        text: "This project is for educational use. All text about the national park has been generated with AI.",
      },
      totalLikes: 0,
    };
  },
  components: {
    Section,
  },
  methods: {
    updateLikes(likes) {
      this.totalLikes += likes;
    },
  },
};
</script>

<template>
  <div>
    <Section
      :section="section"
      :total-likes="totalLikes"
      @liked="updateLikes"
    />
  </div>
</template>

<style scoped>
/* Add your styling here, if needed */
</style>
