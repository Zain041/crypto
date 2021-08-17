import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.css";

import liana from "../assets/png/liana2.png";
// import liana1 from "../assets/png/lian1.png";

export class Owldemo1 extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  render() {
    return (
      <div>
        <div class="container-fluid ">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div
              class="col-sm-12 btn btn-info"
              style={{
                color: "white",

                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <h2 className="text-center p-text">Phase Section</h2>
            </div>
          </div>
        </div>
        <div class="container-fluid ">
          <OwlCarousel
            className="owl-theme"
            loop
            items={4}
            autoplaySpeed={true}
            margin={8}
            autoPlay={true}
            responsive={this.state.responsive}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
          >
            {/* card 1 */}
            <div
              className="phase1"
              style={{
                backgroundImage: `url(${liana})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ad6e47"
                    fill-opacity="1"
                    d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                  ></path>
                </svg>
                <div className="p-5">
                  <h4 className="phase-heading">Phase 1 : Elments</h4>
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~Token Creation</p>
                  </div>{" "}
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~Website launched</p>
                  </div>{" "}
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~White paper created</p>
                  </div>{" "}
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~1,000+ Holders</p>
                  </div>
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~2,000+ Telegram members</p>
                  </div>
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~Coingecko listing</p>
                  </div>
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~Coinmarketcap listing</p>
                  </div>
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~Swap/contract Audit</p>
                  </div>
                </div>
                <svg
                  className="fixed-bottom"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#ad6e47"
                    fill-opacity="1"
                    d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,96C672,64,768,32,864,26.7C960,21,1056,43,1152,69.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            {/* card 1 end */}

            {/* card 2 */}
            <div
              className="phase1"
              style={{
                backgroundImage: `url(${liana})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ad6e47"
                    fill-opacity="1"
                    d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                  ></path>
                </svg>
                <div className="p-5">
                  <h4 className="phase-heading">Phase 2 : Elments</h4>
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~5,000+ holders</p>
                  </div>{" "}
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">
                      ~10% burn of tokens (every 3 months)
                    </p>
                  </div>{" "}
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~Sweepstakes creation</p>
                  </div>{" "}
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">~10,000+ Telegram holders</p>
                  </div>
                  <div className="content-text">
                    <p>
                      <i class="far fa-check-circle"></i>
                    </p>
                    <p className="margin-text">
                      ~Marketing Campaign ( Telegram, twitter, instagtam,
                      pintrest, facebook, google, tiktok, youtube, discord and
                      much more )
                    </p>
                  </div>
                </div>
                <svg
                  className="fixed-bottom"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#ad6e47"
                    fill-opacity="1"
                    d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,96C672,64,768,32,864,26.7C960,21,1056,43,1152,69.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            {/* card 2 end */}

            {/* card 3 */}
            <div
              className="phase1"
              style={{
                backgroundImage: `url(${liana})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
              </svg>
              <div className="p-5">
                <h4 className="phase-heading">Phase 3 : Elments</h4>
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~35,000 holders</p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~Mutual Partnerships</p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~50,000+ Telegram holders</p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~NFT RPG creation</p>
                </div>
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~ tv/radio ads and interviews</p>
                </div>
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">
                    ~10% burn of tokens (every 3 months)
                  </p>
                </div>
              </div>
              <svg
                className="fixed-bottom"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,96C672,64,768,32,864,26.7C960,21,1056,43,1152,69.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            {/* card 3 end */}
            {/* card 4 */}
            <div
              className="phase1"
              style={{
                backgroundImage: `url(${liana})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
              </svg>
              <div className="p-5">
                <h4 className="phase-heading">Phase 4 : Elments</h4>
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">
                    ~ios & android app wallet creation for marketplace
                  </p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">
                    ~ integration of donations for charity's
                  </p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~ small exchange listings</p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">
                    ~10% burn of tokens (every 3 months)
                  </p>
                </div>
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~60,000+ holders</p>
                </div>
              </div>
              <svg
                className="fixed-bottom"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,96C672,64,768,32,864,26.7C960,21,1056,43,1152,69.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            {/* card 4 end */}

            {/* card 5 */}
            <div
              className="phase1"
              style={{
                backgroundImage: `url(${liana})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
              </svg>
              <div className="p-5">
                <h4 className="phase-heading">Phase 5 : Elments</h4>
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~100,000+ holders</p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">
                    ~ well know big exchange listings
                  </p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">
                    ~10% burn of tokens (every 3 months)
                  </p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">
                    ~more worldwide intense marketing
                  </p>
                </div>
              </div>
              <svg
                className="fixed-bottom"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,96C672,64,768,32,864,26.7C960,21,1056,43,1152,69.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            {/* card 5 end */}

            {/* card 6 */}
            <div
              className="phase1"
              style={{
                backgroundImage: `url(${liana})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
              </svg>
              <div className="p-5">
                <h4 className="phase-heading">Phase 6 : Elments</h4>
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">~HuliHuli to the next galaxy </p>
                </div>{" "}
                <div className="content-text">
                  <p>
                    <i class="far fa-check-circle"></i>
                  </p>
                  <p className="margin-text">
                    10% Mystery burn date (after 1 year of launch)
                  </p>
                </div>{" "}
              </div>
              <svg
                className="fixed-bottom"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,96C672,64,768,32,864,26.7C960,21,1056,43,1152,69.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            {/* card 6 end */}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
