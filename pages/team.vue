<template>
  <div>
    <PageTitle pageName="Team Members" />
    <Team />
    <Pricing />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Team from "~/components/Team.vue";
import Pricing from "~/components/Pricing.vue";

export default {
  components: {
    PageTitle,
    Team,
    Pricing
  }
};
</script>

<style>
</style>