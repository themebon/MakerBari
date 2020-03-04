<template>
  <div>
    <!-- Faq -->
    <section class="faq-page-section inner-wrapper">
      <div class="container">
        <div class="row clearfix">
          <!-- Accordian Column -->
          <div class="accordian-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <!-- Accordian Box -->
              <ul class="accordion-box">
                <!--Block-->
                <li class="accordion block">
                  <div class="acc-btn">
                    <div class="icon-outer">
                      <span class="icon icon-plus fa fa-plus"></span>
                      <span class="icon icon-minus fa fa-minus"></span>
                    </div>What is the procedure to join with ycompany?
                  </div>
                  <div class="acc-content">
                    <div class="content">
                      <div
                        class="text"
                      >The master-builder of human happiness one rejects, dislikes avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. packages and web page editors now use uncover.</div>
                    </div>
                  </div>
                </li>

                <!--Block-->
                <li class="accordion block active-block">
                  <div class="acc-btn active">
                    <div class="icon-outer">
                      <span class="icon icon-plus fa fa-plus"></span>
                      <span class="icon icon-minus fa fa-minus"></span>
                    </div>Do you give any offer for premium customer?
                  </div>
                  <div class="acc-content current">
                    <div class="content">
                      <div
                        class="text"
                      >The master-builder of human happiness one rejects, dislikes avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. packages and web page editors now use uncover.</div>
                    </div>
                  </div>
                </li>

                <!--Block-->
                <li class="accordion block">
                  <div class="acc-btn">
                    <div class="icon-outer">
                      <span class="icon icon-plus fa fa-plus"></span>
                      <span class="icon icon-minus fa fa-minus"></span>
                    </div>What makes you special from others?
                  </div>
                  <div class="acc-content">
                    <div class="content">
                      <div
                        class="text"
                      >The master-builder of human happiness one rejects, dislikes avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. packages and web page editors now use uncover.</div>
                    </div>
                  </div>
                </li>

                <!--Block-->
                <li class="accordion block">
                  <div class="acc-btn">
                    <div class="icon-outer">
                      <span class="icon icon-plus fa fa-plus"></span>
                      <span class="icon icon-minus fa fa-minus"></span>
                    </div>Why Would a Successful Entrepreneur Hire a Coach?
                  </div>
                  <div class="acc-content">
                    <div class="content">
                      <div
                        class="text"
                      >The master-builder of human happiness one rejects, dislikes avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. packages and web page editors now use uncover.</div>
                    </div>
                  </div>
                </li>

                <!--Block-->
                <li class="accordion block">
                  <div class="acc-btn">
                    <div class="icon-outer">
                      <span class="icon icon-plus fa fa-plus"></span>
                      <span class="icon icon-minus fa fa-minus"></span>
                    </div>What kind of financial advice do you give?
                  </div>
                  <div class="acc-content">
                    <div class="content">
                      <div
                        class="text"
                      >The master-builder of human happiness one rejects, dislikes avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. packages and web page editors now use uncover.</div>
                    </div>
                  </div>
                </li>

                <!--Block-->
                <li class="accordion block">
                  <div class="acc-btn">
                    <div class="icon-outer">
                      <span class="icon icon-plus fa fa-plus"></span>
                      <span class="icon icon-minus fa fa-minus"></span>
                    </div>Waht makes your financial projects special?
                  </div>
                  <div class="acc-content">
                    <div class="content">
                      <div
                        class="text"
                      >The master-builder of human happiness one rejects, dislikes avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. packages and web page editors now use uncover.</div>
                    </div>
                  </div>
                </li>

                <!--Block-->

                <li class="accordion block">
                  <div class="acc-btn">
                    <div class="icon-outer">
                      <span class="icon icon-plus fa fa-plus"></span>
                      <span class="icon icon-minus fa fa-minus"></span>
                    </div>How long will take us to raise capital?
                  </div>
                  <div class="acc-content">
                    <div class="content">
                      <div
                        class="text"
                      >The master-builder of human happiness one rejects, dislikes avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure. packages and web page editors now use uncover.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Form Column -->
          <div class="form-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="sec-title">
                <h2>Ask Your Questions</h2>
                <div
                  class="text"
                >Our industry consultants help address your most challenging issues by providing strategic, financial, operational, human capital, and IT services.</div>
              </div>

              <!-- Default Form -->
              <div class="default-form style-two">
                <form method="post" action>
                  <div class="form-group">
                    <input type="text" name="username" value placeholder="Your Name" required />
                  </div>
                  <div class="form-group">
                    <input type="email" name="email" value placeholder="Your Email" required />
                  </div>
                  <div class="form-group">
                    <input type="text" name="phone" value placeholder="Phone" required />
                  </div>
                  <div class="form-group">
                    <input type="text" name="question" value placeholder="Question" required />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="default-btn">
                      <span class="txt">Send Now</span>
                    </button>
                  </div>
                </form>
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
  name: "Faq",

  mounted() {
    // Faq
    if ($(".accordion-box").length) {
      $(".accordion-box").on("click", ".acc-btn", function() {
        var outerBox = $(this).parents(".accordion-box");
        var target = $(this).parents(".accordion");

        if ($(this).hasClass("active") !== true) {
          $(outerBox)
            .find(".accordion .acc-btn")
            .removeClass("active");
        }

        if (
          $(this)
            .next(".acc-content")
            .is(":visible")
        ) {
          return false;
        } else {
          $(this).addClass("active");
          $(outerBox)
            .children(".accordion")
            .removeClass("active-block");
          $(outerBox)
            .find(".accordion")
            .children(".acc-content")
            .slideUp(300);
          target.addClass("active-block");
          $(this)
            .next(".acc-content")
            .slideDown(300);
        }
      });
    }
  }
};
</script>

<style></style>
