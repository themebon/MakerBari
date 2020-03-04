<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>


<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: "MakerBari - Vue Nuxt Computer and Electronics Repair Template",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "MakerBari - Vue Nuxt Computer and Electronics Repair Template"
        }
      ]
    };
  }
};
</script>

<style>
</style>
