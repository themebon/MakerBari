<template>
  <div>
    <Slider />
    <Features />
    <About />
    <Services />
    <Team />
    <Counter />
    <Pricing />
    <Testimonial />
    <Blog />
  </div>
</template>

<script>
import Slider from "~/components/Slider.vue";
import Features from "~/components/Features.vue";
import About from "~/components/About.vue";
import Services from "~/components/Services.vue";
import Team from "~/components/Team.vue";
import Counter from "~/components/Counter.vue";
import Pricing from "~/components/Pricing.vue";
import Testimonial from "~/components/Testimonial.vue";
import Blog from "~/components/Blog.vue";

export default {
  components: {
    Slider,
    Features,
    About,
    Services,
    Team,
    Counter,
    Pricing,
    Testimonial,
    Blog
  }
};
</script>

<style scoped>
</style>>
