<template>
  <div>
    <!-- Contact Section -->
    <section class="contact-page-section inner-wrapper">
      <div class="container">
        <div class="row clearfix">
          <!-- Info Column -->
          <div class="info-column col-lg-5 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="sec-title">
                <div class="title">Get in Touch</div>
                <h2>
                  For Any Kind of Help
                  <br />And Informations
                </h2>
                <div class="text">
                  We’re glad to discuss your organisation’s situation.
                  <br />So please contact us via the details below, or enter your request.
                </div>
              </div>
              <ul class="list-style-two style-two">
                <li>
                  <span class="icon fa fa-map"></span>
                  <strong>Head Office Address:</strong> 321, art Street 235 Newyork ,USA 102
                </li>
                <li>
                  <span class="icon fa fa-phone"></span>
                  <strong>Call for help:</strong> (012) 697-2907, (843) 971-1906
                </li>
                <li>
                  <span class="icon far fa-envelope"></span>
                  <strong>Mail us for information</strong> info@test.com, test@test.com
                </li>
              </ul>
            </div>
          </div>

          <!-- Form Column -->
          <div class="form-column col-lg-7 col-md-12 col-sm-12">
            <div class="inner-column">
              <!-- Default Form -->
              <div class="default-form style-two contact-form">
                <form method="post" action="/php/contact.php" id="contact-form">
                  <div class="row clearfix">
                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                      <input type="text" name="username" value placeholder="Name *" required />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                      <input type="email" name="email" value placeholder="Email *" required />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                      <input type="text" name="service" value placeholder="Services*" required />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                      <input type="text" name="phone" value placeholder="Phone *" required />
                    </div>
                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group text-center btn-column col-md-12 col-sm-12 col-xs-12">
                      <button type="submit" class="default-btn">
                        <span class="txt">Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Google Map Start -->
    <div class="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004078.75648254!2d-104.6568059439823!3d37.275602428659404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1576166406912!5m2!1sen!2sin"
        allowfullscreen
      ></iframe>
      <div></div>
    </div>
    <!-- Google Map End -->
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style></style>
