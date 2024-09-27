<script>
export default {
  props: {
    message: String,
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    show() {
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, this.duration);
    },
    handleAnimationEnd() {
      if (!this.showPopup) {
        this.$emit("animationEnd");
      }
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div
      v-if="showPopup"
      class="popup-wrapper"
      @animationend="handleAnimationEnd"
    >
      <div class="popup-message">
        <div class="popup-content">
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.popup-message {
  background-color: #28a745;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.popup-content {
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
