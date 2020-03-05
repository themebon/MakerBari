<template>
  <div>
    <PageTitle pageName="About Us" />
    <About sectionTitle="false" />
    <Pricing />
    <Testimonial />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import About from "~/components/About.vue";
import Pricing from "~/components/Pricing.vue";
import Testimonial from "~/components/Testimonial.vue";

export default {
  components: {
    PageTitle,
    About,
    Pricing,
    Testimonial
  }
};
</script>

<style>
</style>