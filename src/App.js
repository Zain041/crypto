import { useEffect } from "react";

import rooster from "./assets/png/rooster4.png";
import rooster1 from "./assets/png/rooster8.png";
import rooster2 from "./assets/png/rooster2.png";
import rooster7 from "./assets/png/rooster9.png";
import rooster10 from "./assets/png/rooster10.png";
import titkimask from "./assets/png/tikimask2.png";
import titkimask2 from "./assets/png/tikimask1.png";
import wood from "./assets/png/wood.png";
import welcome from "./assets/png/welcome.png";
import tree1 from "./assets/png/tree1.png";
import tree3 from "./assets/png/tree3.png";
import liana from "./assets/png/liana.png";
import tree2 from "./assets/png/tree2.png";
import stone from "./assets/png/stone.png";

import circle from "./assets/png/circle.png";
import leaf from "./assets/png/leaf.png";
import wood1 from "./assets/png/wood1.png";
import grass from "./assets/png/grass.png";

import pineapple from "./assets/png/pineapple.png";

import butterfly from "./assets/gif/butterfly1.gif";
import palm1 from "./assets/gif/palm1.gif";
import butterfly1 from "./assets/gif/butterfly2.gif";
import frog from "./assets/gif/frog.gif";
import Lizard2 from "./assets/gif/lizard2.gif";

import waterfall from "./assets/gif/waterfall.gif";
import roostergif1 from "./assets/gif/roosterGif/roostergif7.gif";
import Carousel from "./components/Carousel";

// eslint-disable-next-line
function App() {
  const run = () => {
    let head = document.getElementsByTagName("head")[0];
    let script = document.createElement("script");
    let script2 = document.createElement("script");
    script.async = 1;
    script.src = "js/webflow.js";
    script2.src =
      "d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8e1ad.js";
    head.appendChild(script);
    head.appendChild(script2);
  };
  useEffect(() => {
    run();
  }, []);
  return (
    <main>
      <section className="front-page w-row">
        <div
          style={{
            backgroundImage: `url(${waterfall})`,
            height: "100vh",
            position: "relative",
          }}
        >
          <img
            style={{ position: "absolute", top: "0px" }}
            src={roostergif1}
            alt="rooster"
            width="350px"
          />
          <svg
            style={{ position: "absolute", bottom: "0px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#71db4f"
              fill-opacity="1"
              d="M0,32L30,80C60,128,120,224,180,218.7C240,213,300,107,360,80C420,53,480,107,540,144C600,181,660,203,720,208C780,213,840,203,900,218.7C960,235,1020,277,1080,266.7C1140,256,1200,192,1260,176C1320,160,1380,192,1410,208L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section
        className="p-2"
        style={{
          backgroundImage: `url(${tree1})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div>
            <h1 className="text-center" style={{ color: "#a6745e" }}>
              Buy
            </h1>
            <div className="text-center">
              <img width="50%" height="80px" src={wood} alt="footer" />
            </div>
            <h2 className="text-center">How to buy Hulihuli</h2>
          </div>

          <div className="htbs-wrapper " style={{ fontSize: "20px" }}>
            <div
              data-duration-in={300}
              data-duration-out={100}
              className="tabs w-tabs"
            >
              <div className="tabs-menu w-tab-menu d-lg-flex d-xl-flex d-md-flex d-sm-flex d-inline">
                <a
                  data-w-tab="Tab 1"
                  className="htb-tab w-inline-block w-tab-link w--current"
                >
                  <h6 className="htb-tab">STEP 1</h6>
                </a>
                <a
                  data-w-tab="Tab 2"
                  className="htb-tab w-inline-block w-tab-link"
                >
                  <h6 className="htb-tab">STEP 2</h6>
                </a>
                <a
                  data-w-tab="Tab 3"
                  className="htb-tab w-inline-block w-tab-link"
                >
                  <h6 className="htb-tab">STEP 3</h6>
                </a>
                <a
                  data-w-tab="Tab 4"
                  className="htb-tab w-inline-block w-tab-link"
                >
                  <h6 className="htb-tab">STEP 4</h6>
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                  <div className="htb-item">
                    <div className="htb-number">
                      <img
                        src={titkimask}
                        loading="lazy"
                        alt="pics"
                        className="htb-shape"
                      />
                      <div className="htb-number-text"></div>
                    </div>
                    <div className="p-4 htb-text">
                      <h4>Create a MetaMask Wallet</h4>
                      <p style={{ fontWeight: "bolder" }}>
                        Hulihuli token is available on the Ethereum blockchain.
                        MetaMask is the market leader in ERC20 (Ethereum)
                        wallets. On Google Chrome, visit{" "}
                        <a href="https://metamask.io/" target="_blank">
                          <strong>metamask.io</strong>
                        </a>{" "}
                        to download the extension and set up a wallet. On
                        mobile? Get MetaMask's app for{" "}
                        <a
                          href="https://metamask.app.link/skAH3BaF99"
                          target="_blank"
                        >
                          <strong>iPhone</strong>
                        </a>{" "}
                        or{" "}
                        <a
                          href="https://metamask.app.link/bxwkE8oF99"
                          target="_blank"
                        >
                          <strong>Android</strong>
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="tab-pane-tab-2 w-tab-pane">
                  <div className="htb-item">
                    <div className="htb-number">
                      <img
                        src={titkimask}
                        loading="lazy"
                        alt="pics"
                        className="htb-shape"
                      />
                      <div className="htb-number-text"></div>
                    </div>
                    <div className="p-4 htb-text">
                      <h4 className="heading-3">
                        Send $ETH to MetaMask
                        <br />
                      </h4>
                      <p>
                        Buy Ethereum through MetaMask or transfer it to your
                        MetaMask wallet address from another wallet (e.g.
                        Coinbase or Binance).
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 3" className="w-tab-pane">
                  <div className="htb-item">
                    <div className="htb-number">
                      <img
                        src={titkimask}
                        loading="lazy"
                        alt="pics"
                        className="htb-shape"
                      />
                      <div className="htb-number-text"></div>
                    </div>
                    <div className="p-4 htb-text">
                      <h4 className="heading-3">
                        Visit HulihuliX Swap
                        <br />
                      </h4>
                      <p>
                        You can currently buyHulihuli on{" "}
                        <a href="https://dex.Hulihuli.com" target="_blank">
                          <strong>HulihuliX Swap</strong>
                        </a>
                        , Hulihuli's official decentralized exchange where you
                        can swap any ERC20 token.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 4" className="w-tab-pane">
                  <div className="htb-item">
                    <div className="htb-number">
                      <img
                        src={titkimask}
                        loading="lazy"
                        alt="pics"
                        className="htb-shape"
                      />
                      <div className="htb-number-text"></div>
                    </div>
                    <div className="p-4 htb-text">
                      <h4 className="heading-3">
                        Visit HulihuliX Swap
                        <br />
                      </h4>
                      <p>
                        You can currently buyHulihuli on{" "}
                        <a href="https://dex.Hulihuli.com" target="_blank">
                          <strong>HulihuliX Swap</strong>
                        </a>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#71db4f" }}>
        <div>
          <div className="">
            <h1 className="text-center" style={{ color: "#a6745e" }}>
              Stats
            </h1>
            <div className="text-center">
              <img width="50%" height="80px" src={wood} alt="footer" />
            </div>
            <h2 className="text-center">Tokenomics</h2>
          </div>
          <div>
            <div className="d-lg-flex d-md-flex align-items-center">
              <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12">
                <img src={rooster7} alt="rooster1" width="90%" />
                <div />
              </div>
              <div className="text-center col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                <h2>Hulihuli</h2>
                <h4>TOKEN SYMBOL</h4>
                <h2>Hulihuli</h2>
                <h4>TOKEN SYMBOL</h4>
                <h2>Hulihuli</h2>
                <h4>TOKEN SYMBOL</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${leaf})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div>
            <h1 className="text-center " style={{ color: "#a6745e" }}>
              Swap
            </h1>
            <div className="text-center">
              <img width="50%" height="80px" src={wood} alt="footer" />
            </div>
          </div>
          <div>
            <div>
              {/* <h3 className="p-5 text-center">DECENTRALIZED EXCHANGE</h3>
              <h2 className="p-5 text-center">HulihuliX Swap</h2> */}
              <p
                className="_w-660 "
                style={{
                  fontSize: "20px",
                  margin: "20px auto",
                  padding: "0 20px",
                  fontWeight: 600,
                }}
              >
                HulihuliX Swap is our official decentralized exchange (DEX). It
                gives holders the ability to swap any ERC20 token for another
                one. It is powered by Uniswap, the safest and most trusted DEX
                in the world. Furthermore, it acts as the foundation from which
                we will build additional features and functionality exclusive to
                Hulihuli holders.
              </p>
            </div>
            <div
              data-w-id="144a6b52-a9d9-1231-1db6-5ffa2cee27cf"
              className="purple-paw-wrapper"
            ></div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${tree3})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div>
            <h1 className="text-center " style={{ color: "#a6745e" }}>
              Moon
            </h1>
            <div className="text-center">
              <img width="50%" height="80px" src={wood} alt="footer" />
            </div>
            <h2 className="text-center ">Road Map</h2>
          </div>
          <div>
            <div>
              {/* <h3 className="p-5 text-center">DECENTRALIZED EXCHANGE</h3>
              <h2 className="p-5 text-center">HulihuliX Swap</h2> */}
              <p
                className="_w-660 "
                style={{
                  fontSize: "20px",
                  margin: "20px auto",
                  padding: "0 20px",
                  fontWeight: 600,
                }}
              >
                HulihuliX Swap is our official decentralized exchange (DEX). It
                gives holders the ability to swap any ERC20 token for another
                one. It is powered by Uniswap, the safest and most trusted DEX
                in the world. Furthermore, it acts as the foundation from which
                we will build additional features and functionality exclusive to
                Hulihuli holders.
              </p>
            </div>
            <div
              data-w-id="144a6b52-a9d9-1231-1db6-5ffa2cee27cf"
              className="purple-paw-wrapper"
            ></div>
          </div>
        </div>
      </section>

      <section
        style={{
          marginBottom: "30px",
          backgroundImage: `url(${tree3})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ backgroundColor: "#71db4f" }}>
          <div>
            <div className="d-lg-flex">
              <div className="text-center col-xl-6 col-lg-6 col-md-12 col-sm-12 pull-left">
                <img src={rooster10} width="40%" alt="rooster" />
              </div>
              <div
                style={{
                  backgroundColor: "#71db4f",
                }}
                className=" col-xl-5 col-lg-5 col-md-12 col-sm-12 pull-right"
              >
                <h2 className="text-center m-5">Community</h2>
                <div className="text-center ">
                  <img width="100%" height="50px" src={wood} alt="footer" />
                </div>
                <p
                  style={{
                    fontWeight: "bolder",
                    fontSize: "20px",
                    margin: "13px",
                    marginRight: "20px",
                  }}
                >
                  Feel free to reach out to anyone in the community! We would
                  love to have you. Hulihuli Inu was founded by Chris, he will
                  happily share info about himself with you. Link to his profile
                  in the whitepaper{" "}
                </p>
                <div>
                  <div className="d-flex">
                    <div>
                      <img
                        src={butterfly}
                        loading="lazy"
                        alt="pics"
                        width="40px"
                      />
                    </div>
                    <div>
                      <h3>Chris</h3>
                      <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                        Founder
                      </p>
                      <a
                        href="https://t.me/Chrisli6"
                        target="_blank"
                        style={{
                          backgroundColor: "#d49e6c",
                          padding: "15px",
                          borderRadius: "50%",
                        }}
                      >
                        <i
                          class="far fa-paper-plane"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img
                        src={butterfly1}
                        loading="lazy"
                        alt="pics"
                        width="40px"
                      />
                    </div>
                    <div>
                      <h3>Telegram Community</h3>
                      <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                        Community
                      </p>
                      <a
                        href="https://t.me/Hulihuli"
                        target="_blank"
                        style={{
                          backgroundColor: "#d49e6c",
                          padding: "15px",
                          borderRadius: "50%",
                        }}
                      >
                        <i
                          class="far fa-paper-plane"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center ">
          <div className="text-center">
            {" "}
            <img
              style={{ marginTop: "50px" }}
              width="80%"
              height="200px"
              src={grass}
              alt="footer"
            />
            <img
              style={{ marginTop: "50px" }}
              width="80%"
              height="100px"
              src={wood}
              alt="footer"
            />
            <h4
              className="text-center w-100 "
              style={{ backgroundColor: "#d49e6c", padding: "10px" }}
            >
              Copyright © 2021,Encodix
            </h4>
          </div>
        </div>
      </section>
      {/* <Carousel /> */}
    </main>
  );
}

export default App;
