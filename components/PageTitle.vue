<template>
  <div>
    <!--Page Title-->
    <section class="page-title" style="background-image:url(/images/breadcrumb-bg.jpg)">
      <div class="container">
        <div class="clearfix">
          <div class="float-left">
            <h2>{{pageName}}</h2>
          </div>
          <div class="float-right">
            <ul class="page-breadcrumb">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>{{pageName}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="clearfix">`</div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["pageName"]
};
</script>

<style>
</style>
