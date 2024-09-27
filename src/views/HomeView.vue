<script>
import Section from "../components/Section.vue";
import PopupMessage from "../components/PopupMessage.vue";

export default {
  data() {
    return {
      sections: [
        {
          image:
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg",
          title: "Why Visit Mystic Peaks?",
          text: "Embark on a journey to Mystic Peaks National Park and discover the unparalleled beauty that awaits. Nestled within majestic mountains, this park is a haven for nature enthusiasts and adventure seekers alike. Immerse yourself in the enchanting allure of dense forests, pristine rivers, and serene lakes that create a harmonious symphony of nature. Mystic Peaks beckons with promises of awe-inspiring landscapes and unforgettable experiences that will leave you breathless.",
        },
        {
          image:
            "https://cdn.forestresearch.gov.uk/2023/11/Forestry-Home-Web-P-Format-Optimised.webp",
          title: "Enchanting Forests",
          text: "Step into a realm of enchantment as you explore the lush and diverse forests that blanket Mystic Peaks National Park. Towering trees, adorned with emerald leaves, create a cathedral-like atmosphere that transports you into a world of tranquility. The air is filled with the sweet scent of pine, and vibrant flora carpets the forest floor, making every step a journey through a living tapestry. Lose yourself in the beauty of nature's untouched masterpiece.",
        },
        {
          image:
            "https://www.gns.cri.nz/assets/Uploads/Heroes/lake-hero-2-v2__FillWzEyMDAsNjAwXQ.jpg",
          title: "Majestic River and Lakes",
          text: "At the heart of Mystic Peaks, a powerful river gracefully winds its way through the landscape, giving life to the surrounding wilderness. Follow its meandering course to discover a pristine lake nestled at the park's lowest point. Crystal-clear waters reflect the towering mountains above, creating a mesmerizing panorama that captivates the soul. Whether you seek peaceful contemplation or exciting water activities, the river and lake offer an unparalleled experience that will rejuvenate your spirit.",
        },
        {
          image:
            "https://i.insider.com/5a271fbe7101ad7b9647b9e0?width=1000&format=jpeg&auto=webp",
          title: "Spectacular Mountains",
          text: "Mystic Peaks National Park is cradled by towering mountains that stand as timeless sentinels, their peaks touching the sky. As you ascend the trails, panoramic vistas unfold, revealing a breathtaking spectacle of rugged terrain, lush valleys, and distant horizons. The mountains embody the very essence of mystique, inviting you to conquer their heights or simply bask in their awe-inspiring presence. Adventure awaits on every trail, making Mystic Peaks a haven for both seasoned mountaineers and casual hikers alike.",
        },
        {
          image:
            "https://cdn.getyourguide.com/img/tour/5a181a8918897.jpeg/98.jpg",
          title: "Summary and Information",
          text: "In summary, Mystic Peaks National Park is a symphony of nature's finest elements, offering a unique blend of enchanting forests, a majestic river with a serene lake, and awe-inspiring mountains. To embark on this unforgettable journey, purchase your admission card online or at the park's entrance. Stay tuned for the launch of our online reservation system, where you can secure your spot in this natural paradise. Prices and additional information will be available soon. Experience the magic of Mystic Peaks – where nature's wonders await your exploration.",
        },
      ],
      totalLikes: 0,
      welcomeMessage: "Welcome to our national park!",
    };
  },
  components: {
    Section,
    PopupMessage,
  },
  mounted() {
    this.$refs.popup.show();
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
      v-for="(section, index) in sections"
      :key="index"
      :section="section"
      @liked="updateLikes"
    />
    <div class="thanks-message text-center mb-5">
      Thank you to all of You! We collected <b>{{ totalLikes }}</b> hearts!
    </div>
    <PopupMessage ref="popup" :message="welcomeMessage" />
  </div>
</template>

<style scoped>
.thanks-message {
  margin-top: 20px;
  font-weight: bold;
  color: #28a745;
}
</style>
