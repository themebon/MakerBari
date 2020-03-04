<template>
  <div>
    <PageTitle pageName="Our Faqs" />
    <Faq />
    <Pricing />
    <Blog />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Faq from "~/components/Faq.vue";
import Pricing from "~/components/Pricing.vue";
import Blog from "~/components/Blog.vue";

export default {
  components: {
    PageTitle,
    Faq,
    Pricing,
    Blog
  }
};
</script>

<style>
</style>