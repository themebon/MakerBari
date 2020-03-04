<template>
  <div>
    <PageTitle pageName="Services" />
    <Services />
    <Pricing />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Services from "~/components/Services.vue";
import Pricing from "~/components/Pricing.vue";

export default {
  components: {
    PageTitle,
    Services,
    Pricing
  }
};
</script>

<style>
</style>