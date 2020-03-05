<template>
  <div>
    <!-- Main Footer -->
    <footer class="main-footer" style="background-image: url(/images/footer-bg.jpg)">
      <div class="container">
        <!--Widgets Section-->
        <div class="widgets-section">
          <div class="row clearfix">
            <!-- Footer Column -->
            <div class="footer-column col-lg-4 col-md-6 col-sm-12">
              <div class="footer-widget logo-widget">
                <div class="logo">
                  <a href="index.html">
                    <img src="/images/logo.png" alt />
                  </a>
                </div>
                <div
                  class="text"
                >We provide expert Business Coaching to both individuals and businesses. With over 30 years of experience we’ll ensure that you’re always getting the best guidance from the top people in the entire industry.</div>
                <ul class="contact-link">
                  <li>
                    <span class="icon mbri-clock"></span> Monday -Sturday at 09am-6pm
                  </li>
                  <li>
                    <span class="icon mbri-home"></span> 52 Tailstoi Town 546 IT, NYC
                  </li>
                </ul>
              </div>
            </div>

            <!-- Footer Column -->
            <div class="footer-column col-lg-4 col-md-6 col-sm-12">
              <div class="footer-widget news-widget">
                <div class="footer-title">
                  <h4>Latest News</h4>
                </div>
                <!-- Footer Column -->
                <div class="widget-content">
                  <div class="post">
                    <div class="thumb">
                      <a href="blog-details.html">
                        <img src="/images/post-thumb-1.jpg" alt />
                      </a>
                    </div>
                    <h5>
                      <a href="blog-details.html">Retail banks wakeup to digital</a>
                    </h5>
                    <span class="date">28 Dec, 2019</span>
                  </div>
                  <div class="post">
                    <div class="thumb">
                      <a href="blog-details.html">
                        <img src="/images/post-thumb-2.jpg" alt />
                      </a>
                    </div>
                    <h5>
                      <a href="blog-details.html">How to improve employees skills</a>
                    </h5>
                    <span class="date">13 Oct, 2019</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Column -->
            <div class="footer-column col-lg-4 col-md-6 col-sm-12">
              <div class="footer-widget newsletter-widget">
                <div class="footer-title">
                  <h4>Newsletter</h4>
                </div>
                <div class="text">Sign up for our mailing list to get latest updates and offers.</div>
                <div class="newsletter-form">
                  <form method="post" action>
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        value
                        placeholder="Enter your email address ....."
                        required
                      />
                      <button type="submit" class="theme-btn submit-btn">
                        <span class="txt fas fa-mouse-pointer"></span>
                      </button>
                    </div>
                  </form>
                </div>
                <ul class="social-icon-one">
                  <li class="title">Follow Us:</li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fas fa-rss"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fab fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="copyright">
                &copy;
                <span id="year"></span> MakerBari. Designed By codenpy
              </div>
            </div>
            <div class="col-lg-7 float-right">
              <ul class="footer-nav text-right">
                <li>
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Privacy Policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Terms & Conditions</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Cookie Policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Header",

  mounted() {
    // Scrollup
    $.scrollUp({
      scrollText: '<i class="fas fa-long-arrow-alt-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade"
    });

    // Year
    $(function() {
      var theYear = new Date().getFullYear();
      $("#year").html(theYear);
    });
  }
};
</script>

<style></style>
