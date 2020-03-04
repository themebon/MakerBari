<template>
  <div>
    <PageTitle pageName="Blog" />
    <Blog />
    <Pricing />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Blog from "~/components/Blog.vue";
import Pricing from "~/components/Pricing.vue";

export default {
  components: {
    PageTitle,
    Blog,
    Pricing
  }
};
</script>

<style>
</style>