import React from "react";
import "./carousel.css";
const Carousel = () => {
  return (
    <section class="teams" style="width:100%;">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div id="customers-teams" class="owl-carousel">
              <div class="item">
                <div class="shadow-effect">
                  <img
                    class="img-circle"
                    src="http://homedroidtech.com/assets/images/team/ankurgupta.jpeg"
                    alt="ankurgupta"
                  />
                  <h2>Ankur Gupta</h2>
                  <p class="title">Director, Founder & CEO</p>
                  <div id="pastexp">
                    <h5 id="pastexphead">RESEARCH SCHOLAR</h5>
                    <p>Dept. of CSE</p>
                    <p style="margin-top:-5px;">
                      Indian Institute of Technology (IIT) Roorkee
                    </p>
                  </div>
                  <div class="social-icons" id="teamsocial">
                    <a
                      class="social-icon social-icon--facebook"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/c9JxYPS.png" />
                    </a>

                    <a class="social-icon social-icon--twitter" id="socialicon">
                      <img src="https://i.imgur.com/VHB4APa.png" />
                    </a>
                    <a
                      class="social-icon social-icon--linkedin"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/egfJ4V2.png" />
                    </a>

                    <a
                      class="social-icon social-icon--instagram"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/cgH07pQ.png" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="shadow-effect">
                  <img
                    class="img-circle"
                    src="http://homedroidtech.com/assets/images/team/sushilgupta.jpeg"
                    alt="ankurgupta"
                  />
                  <h2>Sushil Gupta</h2>
                  <p class="title">Co-Founder & Managing Director</p>
                  <div id="pastexp">
                    <h5 id="pastexphead">EMBEDDED EXPERT</h5>
                    <p>20+ Years of Experience</p>
                    <p style="margin-top:-5px;">Businessman</p>
                  </div>
                  <div class="social-icons" id="teamsocial">
                    <a
                      class="social-icon social-icon--facebook"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/c9JxYPS.png" />
                    </a>

                    <a class="social-icon social-icon--twitter" id="socialicon">
                      <img src="https://i.imgur.com/VHB4APa.png" />
                    </a>
                    <a
                      class="social-icon social-icon--linkedin"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/egfJ4V2.png" />
                    </a>

                    <a
                      class="social-icon social-icon--instagram"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/cgH07pQ.png" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="shadow-effect">
                  <img
                    class="img-circle"
                    src="http://homedroidtech.com/assets/images/team/parveen.jpeg"
                    alt="ankurgupta"
                  />
                  <h2>Parveen Kumar</h2>
                  <p class="title">Member, Technical Advisory Board</p>
                  <div id="pastexp">
                    <h5 id="pastexphead">ASSISTANT PROFESSOR</h5>
                    <p>Dept. of CSE</p>
                    <p style="margin-top:-5px;">
                      National Institute of Technology (NIT) Uttarakhand
                    </p>
                  </div>
                  <div class="social-icons" id="teamsocial">
                    <a
                      class="social-icon social-icon--facebook"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/c9JxYPS.png " />
                    </a>

                    <a class="social-icon social-icon--twitter" id="socialicon">
                      <img src="https://i.imgur.com/VHB4APa.png" />
                    </a>
                    <a
                      class="social-icon social-icon--linkedin"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/egfJ4V2.png" />
                    </a>

                    <a
                      class="social-icon social-icon--instagram"
                      id="socialicon"
                    >
                      <img src="https://i.imgur.com/cgH07pQ.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
