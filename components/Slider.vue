<template>
  <div>
    <!-- Site Slider Start -->
    <section class="slider-one">
      <div class="slider-one__carousel owl-carousel owl-theme">
        <div class="item slider-one__slider-1" style="background-image: url(/images/slider-1.jpg);">
          <div class="container">
            <h2 class="slider-one__title">Any Computer Problems?</h2>
            <!-- /.slider-one__title -->
            <p
              class="slider-one__text"
            >Excepteur sint occaecat cupidatat non proident sunt in culpa qui</p>
            <nuxt-link class="default-btn slider-one__text" to="/contact">
              Contact Us
              <i class="fas fa-long-arrow-alt-right"></i>
            </nuxt-link>
            <!-- /.slider-one__text -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.item -->
        <div class="item slider-one__slider-2" style="background-image: url(/images/slider-2.jpg);">
          <div class="container">
            <h2 class="slider-one__title">
              Finding Solutions
              <br />for your problems.
            </h2>
            <!-- /.slider-one__title -->
            <p
              class="slider-one__text"
            >Excepteur sint occaecat cupidatat non proident sunt in culpa qui</p>
            <nuxt-link class="default-btn slider-one__text" to="/contact">
              Contact Us
              <i class="fas fa-long-arrow-alt-right"></i>
            </nuxt-link>
            <!-- /.slider-one__text -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.item -->
        <div class="item slider-one__slider-3" style="background-image: url(/images/slider-3.jpg);">
          <div class="container">
            <h2 class="slider-one__title">
              Repair your Computer
              <br />laptop & iphone.
            </h2>
            <!-- /.slider-one__title -->
            <p
              class="slider-one__text"
            >Excepteur sint occaecat cupidatat non proident sunt in culpa qui</p>
            <nuxt-link class="default-btn slider-one__text" to="/contact">
              Contact Us
              <i class="fas fa-long-arrow-alt-right"></i>
            </nuxt-link>
            <!-- /.slider-one__text -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.item -->
      </div>
      <!-- /.slider-one__carousel -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Slider",

  mounted() {
    // Slider
    if ($(".slider-one__carousel").length) {
      var slideOneWrap = $(".slider-one");
      var slideOneCarousel = $(".slider-one__carousel").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
        autoplay: 7000
      });
      slideOneWrap.find(".slide-one__left-btn").on("click", function(e) {
        slideOneCarousel.trigger("next.owl.carousel");
        e.preventDefault();
      });
      slideOneWrap.find(".slide-one__right-btn").on("click", function(e) {
        slideOneCarousel.trigger("prev.owl.carousel");
        e.preventDefault();
      });
    }
  }
};
</script>

<style></style>
