<template>
  <div>
    <!-- Gallery -->
    <section class="gallery-area inner-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img1.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img1.jpg">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img2.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img2.jpg">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img3.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img3.jpg">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img4.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img4.jpg">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img5.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img5.jpg">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img6.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img6.jpg">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img7.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img7.jpg">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img8.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img8.jpg">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="gallery-item mt-15">
              <img src="images/gallery-img9.jpg" alt="gallery" />
              <div class="gallery-overlay">
                <a class="image-popup" href="images/gallery-img9.jpg">
                  <i class="fas fa-expand"></i>
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
  name: "Gallery",

  mounted() {
    // magnificPopup
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
