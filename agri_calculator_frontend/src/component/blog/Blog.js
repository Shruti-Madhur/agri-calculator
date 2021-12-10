import React from "react";
import "./Blog.css";
function Blog() {
  return (
    <div>
      <div class="blog-single gray-bg">
        <div class="container">
          <div class="row align-items-start">
            <div class="col-lg-8 m-15px-tb">
              <article class="article">
                <div class="article-img">
                  <img
                    src="https://image.freepik.com/free-photo/smart-digital-agriculture-technology-by-futuristic-sensor-data-collection_31965-13402.jpg"
                    title=""
                    alt=""
                  />
                </div>
                <div class="article-title">
                  <h6>
                    <a href="#">Agriculture</a>
                  </h6>
                  <h2>“Farmers only worry during the growing season, but townspeople worry all the time.”</h2>
                  <div class="media">
                    <div class="avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        title=""
                        alt=""
                      />
                    </div>
                    <div class="media-body">
                      <label>Rachel Roth</label>
                      <span>26 FEB 1996</span>
                    </div>
                  </div>
                </div>
                <div class="article-content">
                  <p>
                  Farming has come a long way since its beginning! It is said that during the first Agricultural Revolution, which started around the 10,000 B.C. it came into prominence when the nomadic tribes started growing crops. The Industrial Revolution, from 1700 AD to 1900 AD helped usher the second Agricultural Revolution which led to faster and more efficient farming technology being discovered. And last but not the least, the Green Revolution in the late 20th century saw population growth and the creation of genetic engineering, chemical fertilizers and biotechnology further aiding the mass production of agricultural goods
                  </p>
                  <blockquote>
                  <p>
                  “In olden times there were warriors, farmers, craftsmen, and merchants. Agriculture was said to be closer to the source of things than trade or manufacturing, and the farmer was said to be “the cupbearer of the gods.”  He was always able to get by somehow or other and have enough to eat.”
                  </p>

                  <p class="blockquote-footer">
                  Masanobu Fukuoka {" "}
                      <cite title="Source Title">'The One-Straw Revolution'</cite>
                    </p>
                  </blockquote>
                  <h4>What are my payment options?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <p class="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Dick Grayson</cite>
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div class="nav tag-cloud">
                  <a href="#">Design</a>
                  <a href="#">Development</a>
                  <a href="#">Travel</a>
                  <a href="#">Web Design</a>
                  <a href="#">Marketing</a>
                  <a href="#">Research</a>
                  <a href="#">Managment</a>
                </div>
              </article>
              <div class="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <form id="contact-form" method="POST">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name *"
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email *"
                          class="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows="4"
                          class="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="send">
                        <button class="px-btn theme">
                          <span>Submit</span> <i class="arrow"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 m-15px-tb blog-aside">
              <div class="widget widget-author">
                <div class="widget-title">
                  <h3>Author</h3>
                </div>
                <div class="widget-body">
                  <div class="media align-items-center">
                    <div class="avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        title=""
                        alt=""
                      />
                    </div>
                    <div class="media-body">
                      <h6>
                        Hello, I'm
                        <br /> Rachel Roth
                      </h6>
                    </div>
                  </div>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                </div>
              </div>

              <div class="widget widget-post">
                <div class="widget-title">
                  <h3>Trending Now</h3>
                </div>
                <div class="widget-body"></div>
              </div>

              <div class="widget widget-latest-post">
                <div class="widget-title">
                  <h3>Latest Post</h3>
                </div>
                <div class="widget-body">
                  <div class="latest-post-aside media">
                    <div class="lpa-left media-body">
                      <div class="lpa-title">
                        <h5>
                          <a href="#">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div class="lpa-meta">
                        <a class="name" href="#">
                          Rachel Roth
                        </a>
                        <a class="date" href="#">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div class="lpa-right">
                      <a href="#">
                        <img
                          src="https://via.placeholder.com/400x200/FFB6C1/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="latest-post-aside media">
                    <div class="lpa-left media-body">
                      <div class="lpa-title">
                        <h5>
                          <a href="#">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div class="lpa-meta">
                        <a class="name" href="#">
                          Rachel Roth
                        </a>
                        <a class="date" href="#">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div class="lpa-right">
                      <a href="#">
                        <img
                          src="https://via.placeholder.com/400x200/FFB6C1/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="latest-post-aside media">
                    <div class="lpa-left media-body">
                      <div class="lpa-title">
                        <h5>
                          <a href="#">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div class="lpa-meta">
                        <a class="name" href="#">
                          Rachel Roth
                        </a>
                        <a class="date" href="#">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div class="lpa-right">
                      <a href="#">
                        <img
                          src="https://via.placeholder.com/400x200/FFB6C1/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="widget widget-tags">
                <div class="widget-title">
                  <h3>Latest Tags</h3>
                </div>
                <div class="widget-body">
                  <div class="nav tag-cloud">
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                    <a href="#">Travel</a>
                    <a href="#">Web Design</a>
                    <a href="#">Marketing</a>
                    <a href="#">Research</a>
                    <a href="#">Managment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
