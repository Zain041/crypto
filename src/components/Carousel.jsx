import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.css";
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
        <div class="container-fluid">
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
        <div class="container-fluid">
          <OwlCarousel
            items={3}
            className="owl-theme"
            loop
            nav
            margin={8}
            autoPlay={true}
            responsive={this.state.responsive}
          >
            <div className="phase1">
              <div className="p-5">
                <h4 style={{ fontWeight: "bolder", marginBottom: "30px" }}>
                  Phase one : Elments{" "}
                  <span style={{ color: "black" }}> 2020</span>
                </h4>
                <div
                  style={{
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>
                    <i
                      class="far fa-check-circle"
                      style={{
                        color: "white",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </p>
                  <p style={{ marginLeft: "10px" }}>AMM Development</p>
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>
                    <i
                      class="far fa-check-circle"
                      style={{
                        color: "white",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </p>
                  <p style={{ marginLeft: "10px" }}>AMM Development</p>
                </div>{" "}
                <div
                  style={{
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>
                    <i
                      class="far fa-check-circle"
                      style={{
                        color: "white",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </p>
                  <p style={{ marginLeft: "10px" }}>AMM Development</p>
                </div>{" "}
                <div
                  style={{
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>
                    <i
                      class="far fa-check-circle"
                      style={{
                        color: "white",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </p>
                  <p style={{ marginLeft: "10px" }}>AMM Development</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ height: "60%", width: "100%" }}
              >
                <path
                  fill="#ad6e47"
                  fill-opacity="1"
                  d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,96C672,64,768,32,864,26.7C960,21,1056,43,1152,69.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
