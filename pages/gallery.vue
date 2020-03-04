<template>
  <div>
    <PageTitle pageName="Gallery" />
    <Gallery />
    <Blog />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Gallery from "~/components/Gallery.vue";
import Blog from "~/components/Blog.vue";

export default {
  components: {
    PageTitle,
    Gallery,
    Blog
  }
};
</script>

<style>
</style>