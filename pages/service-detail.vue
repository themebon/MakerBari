<template>
  <div>
    <PageTitle pageName="Service Details" />
    <ServiceDetail />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import ServiceDetail from "~/components/ServiceDetail.vue";

export default {
  components: {
    PageTitle,
    ServiceDetail
  }
};
</script>

<style>
</style>