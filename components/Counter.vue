<template>
  <div>
    <!-- Counter Section -->
    <section class="counter-section" style="background-image: url(/images/counter_bg.jpg)">
      <div class="container">
        <!-- Sec Title -->
        <div class="section-title">
          <h2>Our Team Result</h2>
        </div>

        <!-- Fact Counter -->
        <div class="fact-counter">
          <div class="row clearfix">
            <!--Column-->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="3000ms" data-stop="105">0</span>+
                  <div class="counter-title">Team Members</div>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="2000" data-stop="215">0</span>+
                  <div class="counter-title">Client’s Feedback</div>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="2000" data-stop="15">0</span>+
                  <div class="counter-title">Winning Awards</div>
                </div>
              </div>
            </div>

            <!--Column-->
            <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
              <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                <div class="count-outer count-box">
                  <span class="count-text" data-speed="1500" data-stop="310">0</span>+
                  <div class="counter-title">Completed Works</div>
                </div>
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
  name: "Counter",

  mounted() {
    // Counter
    if ($(".count-box").length) {
      $(".count-box").appear(
        function() {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text()
            }).animate(
              {
                countNum: n
              },
              {
                duration: r,
                easing: "linear",
                step: function() {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function() {
                  $t.find(".count-text").text(this.countNum);
                }
              }
            );
          }
        },
        { accY: 0 }
      );
    }
  }
};
</script>

<style></style>
