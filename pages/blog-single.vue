<template>
  <div>
    <PageTitle pageName="Blog Details" />
    <BlogSingle />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import BlogSingle from "~/components/BlogSingle.vue";

export default {
  components: {
    PageTitle,
    BlogSingle
  }
};
</script>

<style>
</style>