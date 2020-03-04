<template>
  <div>
    <!-- About Sec Start -->
    <section class="about-sec">
      <div class="container">
        <div class="section-title">
          <span>What We Do</span>
          <h2>About Us</h2>
        </div>
        <div class="row justify-content-between align-items-center">
          <div class="col-md-12 col-lg-5">
            <div class="video-promo-content mb-md-4 mb-lg-0">
              <h2>Service We Offers</h2>
              <p>
                Interactively develop timely niche markets before extensive imperatives. Professionally
                repurpose interoperable growth strategies before effective core competencies.
              </p>
              <ul class="list-unstyled tech-feature-list">
                <li class="py-1">
                  <span class="ti-check-box mr-2"></span>
                  <strong>Mobile Repair</strong> Services
                </li>
                <li class="py-1">
                  <span class="ti-check-box mr-2"></span>
                  <strong>Computer Repair</strong> Service
                </li>
                <li class="py-1">
                  <span class="ti-check-box mr-2"></span>
                  <strong>Television Repair</strong> Services
                </li>
                <li class="py-1">
                  <span class="ti-check-box mr-2"></span>
                  <strong>Desktop Repair</strong> Services
                </li>
                <li class="py-1">
                  <span class="ti-check-box mr-2"></span>
                  <strong>Tab Repair</strong> Services
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 mt-3 mt-lg-0">
            <div class="card border-0 shadow-sm text-white">
              <img
                src="images/about-img.jpg"
                alt="video"
                class="img-fluid rounded shadow-sm"
                data-popupalt-original-title="null"
                title="video"
              />
              <div
                class="card-img-overlay text-center"
                data-popupalt-original-title="null"
                title="video"
              >
                <a
                  href="https://www.youtube.com/watch?v=9No-FiEInLA"
                  class="popup-youtube video-play-icon color-bip shadow"
                >
                  <span class="ti-control-play" data-popupalt-original-title="null" title="null"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",

  mounted() {
    // Popup
    $(".popup-youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    $(".image-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true
      }
    });
  }
};
</script>

<style></style>
