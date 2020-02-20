import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    return (
      <div classNameName="App">
        <div className="site-wrap">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>

          <header
            className="site-navbar py-4 js-sticky-header site-navbar-target"
            role="banner"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-xl-2">
                  <h1 className="mb-0 site-logo">
                    <a href="index.html" className="h2 mb-0">
                      Pointer<span className="text-primary">.</span>{" "}
                    </a>
                  </h1>
                </div>

                <div className="col-12 col-md-10 d-none d-xl-block">
                  <nav
                    className="site-navigation position-relative text-right"
                    role="navigation"
                  >
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                      <li>
                        <a href="#home-section" className="nav-link">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#about-section" className="nav-link">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#team-section" className="nav-link">
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="#services-section" className="nav-link">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#testimonials-section" className="nav-link">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a href="#blog-section" className="nav-link">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#contact-section" className="nav-link">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div
                  className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
                  style={{ position: "relative", top: "3px" }}
                >
                  <a
                    href="#"
                    className="site-menu-toggle js-menu-toggle text-black float-right"
                  >
                    <span className="icon-menu h3"></span>
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div
            className="site-blocks-cover overlay"
            style={{ backgroundImage: "url(images/hero_2.jpg)" }}
            data-aos="fade"
            id="home-section"
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 mt-lg-5 text-center">
                  <h1>We Are The Best Consulting Agency</h1>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                    officia.
                  </p>
                  <div>
                    <a href="#" className="btn btn-primary mr-2 mb-2">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section cta-big-image" id="about-section">
            <div className="container">
              <img
                src="images/img_big_1.jpg"
                alt="Image"
                className="img-fluid"
              />
              <div className="img-box">
                <span className="sub-title">Creative Skills</span>
                <h2>Create Your Own Web Masterpiece</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis eveniet, voluptatem harum provident iusto modi
                  explicabo! Aperiam velit reiciendis, eius impedit ea
                  necessitatibus facilis nobis ipsum, architecto cum, doloribus
                  nesciunt.
                </p>
                <p>
                  <a href="#" className="btn btn-outline-dark">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>

          <section className="site-section border-bottom" id="team-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-5 text-left">
                  <h2 className="section-title mb-3">
                    Our Dedicated <br /> Professionals
                  </h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus minima neque tempora reiciendis.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="team-member">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="images/person_5.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Kaiara Spencer</h3>
                      <span className="position">Product Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="team-member">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="images/person_6.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Dave Simpson</h3>
                      <span className="position">Product Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="team-member">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="images/person_7.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Ben Thompson</h3>
                      <span className="position">Product Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="team-member">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="images/person_8.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Kyla Stewart</h3>
                      <span className="position">Product Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="team-member">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Kaiara Spencer</h3>
                      <span className="position">Product Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="team-member">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="images/person_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Dave Simpson</h3>
                      <span className="position">Product Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="team-member">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="images/person_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Ben Thompson</h3>
                      <span className="position">Product Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="team-member">
                    <figure>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <img
                        src="images/person_4.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="p-3">
                      <h3>Chris Stewart</h3>
                      <span className="position">Product Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="owl-carousel slide-one-item-alt">
                    <img
                      src="images/slide_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <img
                      src="images/slide_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <img
                      src="images/slide_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <img
                      src="images/slide_4.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="custom-direction">
                    <a href="#" className="custom-prev">
                      Prev
                    </a>
                    <a href="#" className="custom-next">
                      Next
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 ml-auto">
                  <h2 className="section-title mb-3">
                    We Are The Best Consulting Agency
                  </h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Est qui eos quasi ratione nostrum excepturi id recusandae
                    fugit omnis ullam pariatur itaque nisi voluptas impedit Quo
                    suscipit omnis iste velit maxime.
                  </p>

                  <p>
                    <a href="#" className="btn btn-primary mr-2 mb-2">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12">
                  <h2 className="section-title mb-3">Our Approach</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className=" box-with-humber">
                    <h2 className="text-black">
                      <span className="text-primary">01.</span>Creative
                    </h2>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et praesentium eos nulla qui commodi consectetur beatae
                      fugiat. Veniam iste rerum perferendis.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className=" box-with-humber">
                    <h2 className="text-black">
                      <span className="text-primary">02.</span>Strategy
                    </h2>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et praesentium eos nulla qui commodi consectetur beatae
                      fugiat. Veniam iste rerum perferendis.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className=" box-with-humber">
                    <h2 className="text-black">
                      <span className="text-primary">03.</span>Production
                    </h2>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et praesentium eos nulla qui commodi consectetur beatae
                      fugiat. Veniam iste rerum perferendis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="site-section border-bottom bg-light"
            id="services-section"
          >
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h2 className="section-title mb-3">Our Services</h2>
                </div>
              </div>
              <div className="row align-items-stretch">
                <div
                  className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                  data-aos="fade-up"
                >
                  <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4">
                      <span className="text-primary icon-autorenew"></span>
                    </div>
                    <div>
                      <h3>Great Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                      <p>
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4">
                      <span className="text-primary icon-backspace"></span>
                    </div>
                    <div>
                      <h3>Time Saving</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                      <p>
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4">
                      <span className="text-primary icon-av_timer"></span>
                    </div>
                    <div>
                      <h3>Quick Response</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                      <p>
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4">
                      <span className="text-primary icon-beenhere"></span>
                    </div>
                    <div>
                      <h3>Best Support</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                      <p>
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4">
                      <span className="text-primary icon-business_center"></span>
                    </div>
                    <div>
                      <h3>Finest Quality</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                      <p>
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="unit-4 d-flex">
                    <div className="unit-4-icon mr-4">
                      <span className="text-primary icon-cloud_done"></span>
                    </div>
                    <div>
                      <h3>Real Solutions</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                      <p>
                        <a href="#">Learn More</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="site-section testimonial-wrap"
            id="testimonials-section"
          >
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h2 className="section-title mb-3">Testimonials</h2>
                </div>
              </div>
            </div>
            <div className="slide-one-item home-slider owl-carousel">
              <div>
                <div className="testimonial">
                  <blockquote className="mb-5">
                    <p>
                      &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Consectetur unde reprehenderit aperiam quaerat
                      fugiat repudiandae explicabo animi minima fuga beatae
                      illum eligendi incidunt consequatur. Amet dolores
                      excepturi earum unde iusto.&rdquo;
                    </p>
                  </blockquote>

                  <figure className="mb-4 d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        src="images/person_3.jpg"
                        alt="Image"
                        className="w-50 img-fluid mb-3"
                      />
                    </div>
                    <p>John Smith</p>
                  </figure>
                </div>
              </div>
              <div>
                <div className="testimonial">
                  <blockquote className="mb-5">
                    <p>
                      &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Consectetur unde reprehenderit aperiam quaerat
                      fugiat repudiandae explicabo animi minima fuga beatae
                      illum eligendi incidunt consequatur. Amet dolores
                      excepturi earum unde iusto.&rdquo;
                    </p>
                  </blockquote>
                  <figure className="mb-4 d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        src="images/person_2.jpg"
                        alt="Image"
                        className="w-50 img-fluid mb-3"
                      />
                    </div>
                    <p>Christine Aguilar</p>
                  </figure>
                </div>
              </div>

              <div>
                <div className="testimonial">
                  <blockquote className="mb-5">
                    <p>
                      &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Consectetur unde reprehenderit aperiam quaerat
                      fugiat repudiandae explicabo animi minima fuga beatae
                      illum eligendi incidunt consequatur. Amet dolores
                      excepturi earum unde iusto.&rdquo;
                    </p>
                  </blockquote>
                  <figure className="mb-4 d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        src="images/person_4.jpg"
                        alt="Image"
                        className="w-50 img-fluid mb-3"
                      />
                    </div>
                    <p>Robert Spears</p>
                  </figure>
                </div>
              </div>

              <div>
                <div className="testimonial">
                  <blockquote className="mb-5">
                    <p>
                      &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Consectetur unde reprehenderit aperiam quaerat
                      fugiat repudiandae explicabo animi minima fuga beatae
                      illum eligendi incidunt consequatur. Amet dolores
                      excepturi earum unde iusto.&rdquo;
                    </p>
                  </blockquote>
                  <figure className="mb-4 d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        src="images/person_4.jpg"
                        alt="Image"
                        className="w-50 img-fluid mb-3"
                      />
                    </div>
                    <p>Bruce Rogers</p>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section" id="about-section">
            <div className="container">
              <div className="row mb-5">
                <div
                  className="col-md-5 ml-auto mb-5 order-md-2"
                  data-aos="fade"
                >
                  <div className="owl-carousel slide-one-item-alt">
                    <img
                      src="images/slide_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <img
                      src="images/slide_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <img
                      src="images/slide_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <img
                      src="images/slide_4.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="custom-direction">
                    <a href="#" className="custom-prev">
                      Prev
                    </a>
                    <a href="#" className="custom-next">
                      Next
                    </a>
                  </div>
                </div>
                <div className="col-md-6 order-md-1" data-aos="fade">
                  <div className="row">
                    <div className="col-12 mb-4">
                      <h2 className="section-title mb-3">
                        Consulting Agency It's Best
                      </h2>
                    </div>
                    <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                      <div className="unit-4">
                        <div className="unit-4-icon mr-4 mb-3">
                          <span className="text-primary icon-adb"></span>
                        </div>
                        <div>
                          <h3>Web &amp; Mobile Specialties</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis quis consect.
                          </p>
                          <p className="mb-0">
                            <a href="#">Learn More</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                      <div className="unit-4">
                        <div className="unit-4-icon mr-4 mb-3">
                          <span className="text-primary icon-assignment"></span>
                        </div>
                        <div>
                          <h3>Intuitive Thinkers</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis quis.
                          </p>
                          <p className="mb-0">
                            <a href="#">Learn More</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section" id="blog-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h3 className="section-sub-title">Blog</h3>
                  <h2 className="section-title mb-3">Our Blog Posts</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                  <div className="h-entry">
                    <a href="single.html">
                      <img
                        src="images/img_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <h2 className="font-size-regular">
                      <a href="single.html">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </a>
                    </h2>
                    <div className="meta mb-4">
                      Ham Brook <span className="mx-2">&bullet;</span> Jan 18,
                      2019<span className="mx-2">&bullet;</span>{" "}
                      <a href="single.html">News</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus eligendi nobis ea maiores sapiente veritatis
                      reprehenderit suscipit quaerat rerum voluptatibus a eius.
                    </p>
                    <p>
                      <a href="single.html">Continue Reading...</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                  <div className="h-entry">
                    <a href="single.html">
                      <img
                        src="images/img_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <h2 className="font-size-regular">
                      <a href="single.html">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </a>
                    </h2>
                    <div className="meta mb-4">
                      James Phelps <span className="mx-2">&bullet;</span> Jan
                      18, 2019<span className="mx-2">&bullet;</span>{" "}
                      <a href="single.html">News</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus eligendi nobis ea maiores sapiente veritatis
                      reprehenderit suscipit quaerat rerum voluptatibus a eius.
                    </p>
                    <p>
                      <a href="single.html">Continue Reading...</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                  <div className="h-entry">
                    <a href="single.html">
                      <img
                        src="images/img_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <h2 className="font-size-regular">
                      <a href="single.html">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </a>
                    </h2>
                    <div className="meta mb-4">
                      James Phelps <span className="mx-2">&bullet;</span> Jan
                      18, 2019<span className="mx-2">&bullet;</span>{" "}
                      <a href="single.html">News</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus eligendi nobis ea maiores sapiente veritatis
                      reprehenderit suscipit quaerat rerum voluptatibus a eius.
                    </p>
                    <p>
                      <a href="single.html">Continue Reading...</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section bg-light" id="contact-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h3 className="section-sub-title">Services</h3>
                  <h2 className="section-title mb-3">Our Services</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 mb-5">
                  <form action="#" className="p-5 bg-white">
                    <h2 className="h4 text-black mb-5">Contact Form</h2>

                    <div className="row form-group">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="text-black" for="fname">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="fname"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="text-black" for="lname">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lname"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <label className="text-black" for="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <label className="text-black" for="subject">
                          Subject
                        </label>
                        <input
                          type="subject"
                          id="subject"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <label className="text-black" for="message">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          className="form-control"
                          placeholder="Write your notes or questions here..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-primary btn-md text-white"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-5">
                  <div className="p-4 mb-3 bg-white">
                    <p className="mb-0 font-weight-bold">Address</p>
                    <p className="mb-4">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </p>

                    <p className="mb-0 font-weight-bold">Phone</p>
                    <p className="mb-4">
                      <a href="#">+1 232 3235 324</a>
                    </p>

                    <p className="mb-0 font-weight-bold">Email Address</p>
                    <p className="mb-0">
                      <a href="#">youremail@domain.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-5">
                      <h2 className="footer-heading mb-4">About Us</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque facere laudantium magnam voluptatum autem. Amet
                        aliquid nesciunt veritatis aliquam.
                      </p>
                    </div>
                    <div className="col-md-3 ml-auto">
                      <h2 className="footer-heading mb-4">Quick Links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <h2 className="footer-heading mb-4">
                      Subscribe Newsletter
                    </h2>
                    <form action="#" method="post" className="footer-subscribe">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control border-secondary text-white bg-transparent"
                          placeholder="Enter Email"
                          aria-label="Enter Email"
                          aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary text-black"
                            type="button"
                            id="button-addon2"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="">
                    <h2 className="footer-heading mb-4">Follow Us</h2>
                    <a href="#" className="pl-0 pr-3">
                      <span className="icon-facebook"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-twitter"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-instagram"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-linkedin"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div classNameName="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <div className="border-top pt-5"></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
