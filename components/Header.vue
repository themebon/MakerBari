<template>
  <div>
    <!-- /.Topbar  -->
    <div class="topbar-one">
      <div class="container">
        <div class="topbar-one__left">
          <div class="topbar-one__social">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fas fa-rss"></i>
            </a>
            <a href="#">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#">
              <i class="fab fa-vimeo-v"></i>
            </a>
          </div>
        </div>
        <div class="topbar-one__right">
          <div class="topbar-one__links">
            <a href="#" class="topbar-one__search search-popup__toggler">
              <i class="fas fa-search"></i>
            </a>
            <a href="#" class="topbar-one__link">
              <i class="far fa-clock"></i>Mon - Fri: 9.30 - 18.30
            </a>
            <a href="#" class="topbar-one__link">
              <i class="far fa-envelope"></i>info@test.com
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Site Header Menu -->
    <header class="site-header site-header__header-one site-header__home-one">
      <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky">
        <div class="container clearfix">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="logo-box">
            <nuxt-link to="/">
              <img src="images/logo.png" width="185" class="main-logo" alt="Awesome Image" />
            </nuxt-link>
            <button class="menu-toggler" data-target=".main-navigation">
              <span class="fa fa-bars"></span>
            </button>
          </div>
          <!-- /.logo-box -->
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="main-navigation">
            <ul class="navigation-box @@extra_class">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul class="submenu">
                  <li>
                    <nuxt-link to="/about-us">About Us</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/team">Our Team</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/faq">Faq</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/gallery">Gallery</nuxt-link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Services</a>
                <ul class="submenu">
                  <li>
                    <nuxt-link to="/services">Services</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/service-detail">Service Details</nuxt-link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog</a>
                <ul class="submenu">
                  <li>
                    <nuxt-link to="/blog">Blog Classic</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/blog-single">Blog Details</nuxt-link>
                  </li>
                </ul>
              </li>
              <li>
                <nuxt-link to="/contact">Contact Us</nuxt-link>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
          <div class="right-side-box">
            <a
              href="#quote-popup"
              class="default-btn open-popup-link"
              data-effect="mfp-move-horizontal"
            >
              Get A Quote
              <i class="fas fa-long-arrow-alt-right"></i>
            </a>
            <!-- /.thm-btn -->
          </div>
          <!-- /.right-side-box -->
        </div>
        <!-- /.container -->
      </nav>
    </header>
    <div class="quote-part mfp-hide" id="quote-popup">
      <div class="container">
        <div class="section-title">
          <span class="section-span">Get A Quote</span>
          <h2 class="text-center head-two">Lets create something awesome together!</h2>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <form class="quote-form">
              <div class="row">
                <div class="col-md">
                  <input type="text" class="form-control" placeholder="Name" required />
                </div>
                <div class="col-md">
                  <input type="text" class="form-control" placeholder="Email" required />
                </div>
              </div>
              <div class="row">
                <div class="col-md">
                  <input type="text" class="form-control" placeholder="Subject" required />
                </div>
              </div>
              <div class="form-group">
                <textarea class="form-control" placeholder="Message" rows="4" required></textarea>
              </div>
              <button type="submit" class="quote-contact-btn">SEND</button>
            </form>
          </div>
          <div class="col-lg-5">
            <div class="contact-detail-grp position-r">
              <div class="contact-middle">
                <div class="contact-detail">
                  <h3 class="head-three">Give us a call</h3>
                  <a href="tel:+01123456789">+01 123 456 789</a>
                </div>
                <div class="contact-detail">
                  <h3 class="head-three">Send us an email</h3>
                  <a href="#" data-popupalt-original-title="null" title="null">info@test.com</a>
                </div>
                <div class="contact-detail social-ac">
                  <h3 class="head-three">Follow us on</h3>
                  <a href="javascript:void(0)">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ttm-stickable-header-w end-->
  </div>
</template>

<script>
export default {
  name: "Header",

  mounted() {
    // Main Navigation
    if ($(".main-navigation .navigation-box").length) {
      var subMenu = $(".main-navigation .submenu");
      subMenu
        .parent("li")
        .children("a")
        .append(function() {
          return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
      var mainNavToggler = $(".header-navigation .menu-toggler");
      var subNavToggler = $(".main-navigation .sub-nav-toggler");
      mainNavToggler.on("click", function() {
        var Self = $(this);
        var menu = Self.closest(".header-navigation").find(Self.data("target"));
        $(menu).slideToggle();
        $(menu).toggleClass("showen");
        return false;
      });
      subNavToggler.on("click", function() {
        var Self = $(this);
        Self.parent()
          .parent()
          .children(".submenu")
          .slideToggle();
        return false;
      });
    }

    // Quote Popup
    $(".open-popup-link").magnificPopup({
      type: "inline",
      midClick: true,
      mainClass: "mfp-fade"
    });
  }
};
</script>

<style></style>
