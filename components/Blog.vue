<template>
  <div>
    <!-- Blog Section -->
    <section class="blog-sec">
      <div class="container">
        <!-- Sec Title -->
        <div class="section-title">
          <span>Latest Articles</span>
          <h2>Our Latest Blog</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <!-- Single Blog Sec -->
            <div class="single-blog">
              <nuxt-link to="/blog-single">
                <img src="/images/blog-img1.jpg" alt />
              </nuxt-link>
              <div class="blog-content">
                <a class="user" href="#">
                  <i class="bx bx-user"></i> Admin
                </a>
                <h3>
                  <nuxt-link to="/blog-single">What is Lorem Ipsum?</nuxt-link>
                </h3>
                <ul>
                  <li>
                    5 March 2020
                    <i class="bx bx-calendar"></i>
                  </li>
                  <li class="date">
                    <nuxt-link class="read-more" to="/blog-single">
                      View More
                      <i class="fas fa-arrow-right bx-fade-right"></i>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <!-- Single Blog Sec -->
            <div class="single-blog">
              <nuxt-link to="/blog-single">
                <img src="/images/blog-img2.jpg" alt />
              </nuxt-link>
              <div class="blog-content">
                <a class="user" href="#">
                  <i class="bx bx-user"></i> Admin
                </a>
                <h3>
                  <nuxt-link to="/blog-single">Why do we use it?</nuxt-link>
                </h3>
                <ul>
                  <li>
                    5 March 2020
                    <i class="bx bx-calendar"></i>
                  </li>
                  <li class="date">
                    <nuxt-link class="read-more" to="/blog-single">
                      View More
                      <i class="fas fa-arrow-right bx-fade-right"></i>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <!-- Single Blog Sec -->
            <div class="single-blog">
              <nuxt-link to="/blog-single">
                <img src="/images/blog-img3.jpg" alt />
              </nuxt-link>
              <div class="blog-content">
                <a class="user" href="#">
                  <i class="bx bx-user"></i> Admin
                </a>
                <h3>
                  <nuxt-link to="/blog-single">Where does it come from?</nuxt-link>
                </h3>
                <ul>
                  <li>
                    5 March 2020
                    <i class="bx bx-calendar"></i>
                  </li>
                  <li class="date">
                    <nuxt-link class="read-more" to="/blog-single">
                      View More
                      <i class="fas fa-arrow-right bx-fade-right"></i>
                    </nuxt-link>
                  </li>
                </ul>
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
  name: "Blog"
};
</script>

<style></style>
