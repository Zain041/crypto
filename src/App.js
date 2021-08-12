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

import pineapple from "./assets/png/pineapple.png";

import butterfly from "./assets/gif/butterfly1.gif";
import palm1 from "./assets/gif/palm1.gif";
import butterfly1 from "./assets/gif/butterfly2.gif";
import frog from "./assets/gif/frog.gif";
import Lizard2 from "./assets/gif/lizard2.gif";

import waterfall from "./assets/gif/waterfall.gif";
import roostergif1 from "./assets/gif/roosterGif/roostergif7.gif";

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
              fill="#c8f7a3"
              fill-opacity="1"
              d="M0,32L30,80C60,128,120,224,180,218.7C240,213,300,107,360,80C420,53,480,107,540,144C600,181,660,203,720,208C780,213,840,203,900,218.7C960,235,1020,277,1080,266.7C1140,256,1200,192,1260,176C1320,160,1380,192,1410,208L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="p-2">
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
              <div className="tabs-menu w-tab-menu d-lg-flex d-xl-flex d-md-flex d-block">
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
                    <div className="htb-text p-4">
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
                    <div className="htb-text p-4">
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
                    <div className="htb-text p-4">
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
                    <div className="htb-text p-4">
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
      <section style={{ backgroundColor: "#c8f7a3" }}>
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

      <section>
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
              {/* <h3 className="text-center p-5">DECENTRALIZED EXCHANGE</h3>
              <h2 className="text-center p-5">HulihuliX Swap</h2> */}
              <p
                className="_w-660   "
                style={{
                  fontSize: "15px",
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
      <section>
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
              {/* <h3 className="text-center p-5">DECENTRALIZED EXCHANGE</h3>
              <h2 className="text-center p-5">HulihuliX Swap</h2> */}
              <p
                className="_w-660  "
                style={{
                  fontSize: "15px",
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
          <div
            data-w-id="239ab2f1-7937-e5fc-7485-1632648133f6"
            className="moonmap-scrolling-wrapper"
          >
            <div className="moonmap-horiztonal-scrolling-container">
              <div className="sticky-container horizontal">
                <div
                  data-w-id="942a9278-044b-0f8a-f7c5-75c5c9d7c39a"
                  className="flex-horizontal"
                >
                  <div className="kishu-rocket-wrapper">
                    <img
                      src={rooster1}
                      loading="lazy"
                      sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 593.828125px, 37vw"
                      // srcSet="images/kishu-rocket-alone-p-500.png 500w, images/kishu-rocket-alone.png 791w"
                      alt="rooster4"
                      className="kishu-rocket"
                    />

                    <img
                      src={rooster2}
                      loading="lazy"
                      srcSet="images/kishu-rocket-trail-p-500.png 500w, images/kishu-rocket-trail-p-800.png 800w, images/kishu-rocket-trail.png 805w"
                      // sizes="(max-width: 479px) 100vw, (max-width: 1919px) 671.9921875px, 42vw"
                      alt="tikimask122"
                      className="rocket-trail"
                    />
                    <img
                      src={titkimask2}
                      loading="lazy"
                      width="100%"
                      alt="tikimask12"
                      className="rocket-smoke"
                    />
                    {/* <img
                      src={titkimask2}
                      loading="lazy"
                      data-w-id="b901c4bf-ff2e-dbae-ab88-d6aa4c2268f2"
                      sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 671.9921875px, 710px"
                      // srcSet="images/kishu-rocket-space-p-500.png 500w, images/kishu-rocket-space.png 710w"
                      alt="tikimask"
                      className="space"
                    /> */}
                  </div>
                  <div className="moonmap-phase-wrapper">
                    <div className="phase">
                      <h3
                        style={{
                          color: "#a6745e",
                          fontSize: "22px",
                          fontWeight: "bolder",
                        }}
                      >
                        PHASE 1
                      </h3>
                    </div>
                    <div className="phase-details">
                      <h6 className="phase-status in-progress">IN PROGRESS</h6>
                      <h3
                        style={{
                          color: "#a6745e",
                          fontSize: "22px",
                          fontWeight: "bolder",
                        }}
                      >
                        Launch
                      </h3>
                      <div className="phase-activities">
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            ✅ Whitepaper - roadmap{" "}
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            ✅ Website launch
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">✅ HulihuliX</p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Techrate - contract audit{" "}
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Marketing campaign
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Partnership global organization
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Community marketing fund
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="moonmap-phase-wrapper">
                    <div className="phase">
                      <h3
                        style={{
                          color: "#a6745e",
                          fontSize: "22px",
                          fontWeight: "bolder",
                        }}
                      >
                        PHASE 2
                      </h3>
                    </div>
                    <div className="phase-details">
                      <h6 className="phase-status"></h6>
                      <h3
                        style={{
                          color: "#a6745e",
                          fontSize: "22px",
                          fontWeight: "bolder",
                        }}
                      >
                        Growth
                      </h3>
                      <div className="phase-activities ">
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Pricetracking listings: CoinGecko and
                            CoinMarketCap
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">• Cex listings</p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Creation of Hulihuli Foundation
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          {/*  */}
                          <p className="no-bottom-padding">• First donations</p>
                        </div>
                        <div className="phase-activity-item">
                          {/*  */}
                          <p className="no-bottom-padding">
                            • Expand development team
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • SafeArt (NFT marketplace)
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Passive income dashboard (HulihuliX Swap)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="moonmap-phase-wrapper">
                    <div className="phase">
                      <h3
                        style={{
                          color: "#a6745e",
                          fontSize: "22px",
                          fontWeight: "bolder",
                        }}
                      >
                        PHASE 3
                      </h3>
                    </div>
                    <div className="phase-details">
                      <h6 className="phase-status"></h6>
                      <h3
                        style={{
                          color: "#a6745e",
                          fontSize: "22px",
                          fontWeight: "bolder",
                        }}
                      >
                        Expansion
                      </h3>
                      <div className="phase-activities">
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • DAO governance structure for Hulihuli Foundation{" "}
                            <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Celebrity foundation member(s) <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            • One million dollars donated to Hulihuli cancer
                            awareness
                            <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            • Hulihuli impact wallet
                            <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            • Business model for sustainable development
                            <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            • Expand marketing + management team
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="moonmap-phase-wrapper">
                    <div className="phase">
                      <h3
                        style={{
                          color: "#a6745e",
                          fontSize: "22px",
                          fontWeight: "bolder",
                        }}
                      >
                        PHASE 4
                      </h3>
                    </div>
                    <div className="phase-details">
                      <h6 className="phase-status"></h6>
                      <h3
                        style={{
                          color: "#a6745e",
                          fontSize: "22px",
                          fontWeight: "bolder",
                        }}
                      >
                        Expansion
                      </h3>

                      <div
                        className="phase-activities"
                        // style={{ fontSize: "15px" }}
                      >
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • DAO governance structure for Hulihuli Foundation{" "}
                            <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            • Celebrity foundation member(s) <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            • One million dollars donated to Hulihuli cancer
                            awareness
                            <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            • Hulihuli impact wallet
                            <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            • Business model for sustainable development
                            <br />
                          </p>
                        </div>
                        <div className="phase-activity-item">
                          <p className="no-bottom-padding">
                            {" "}
                            • Expand marketing + management team
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ backgroundColor: "#c8f7a3" }}>
          <div>
            <div>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <img src={rooster} loading="lazy" width="50%" alt="rooster" />
                {/* <img src="images/08-v2-big.gif" loading="lazy" alt='pics' className="image-21" /> */}
              </div>
              <div
                style={{ backgroundColor: "#c8f7a3" }}
                className="col-xl-5 col-lg-5 col-md-5 col-sm-12"
              >
                <h2>Community</h2>
                <div className="text-center ">
                  <img width="100%" height="50px" src={wood} alt="footer" />
                </div>
                <p
                  className="_w-660"
                  style={{ fontWeight: "bolder", fontSize: "14px" }}
                >
                  Feel free to reach out to anyone in the community! We would
                  love to have you. Hulihuli Inu was founded by Chris, he will
                  happily share info about himself with you. Link to his profile
                  in the whitepaper{" "}
                </p>
                <div className="founding-members">
                  <div className="founding-member-item">
                    <div className="founding-member-image-container">
                      <img
                        src={butterfly}
                        loading="lazy"
                        alt="pics"
                        className="image-16"
                      />
                    </div>
                    <div className="founding-member-text">
                      <h4>Chris</h4>
                      <p style={{ fontWeight: "bolder", fontSize: "14px" }}>
                        Founder
                      </p>
                      <a
                        href="https://t.me/Chrisli6"
                        target="_blank"
                        className="social-icon-item is--founder w-inline-block"
                      >
                        <div className="fa-social-icon is--founder"></div>
                      </a>
                    </div>
                  </div>
                  <div className="founding-member-item">
                    <div className="founding-member-image-container">
                      <img
                        src={butterfly1}
                        loading="lazy"
                        alt="pics"
                        className="image-16"
                      />
                    </div>
                    <div className="founding-member-text">
                      <h4>Telegram Community</h4>
                      <p style={{ fontWeight: "bolder", fontSize: "14px" }}>
                        Community
                      </p>
                      <a
                        href="https://t.me/Hulihuli"
                        target="_blank"
                        className="social-icon-item is--founder w-inline-block"
                      >
                        <div className="fa-social-icon is--founder"></div>
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
        <div style={{ backgroundColor: "#c8f7a3" }}>
          <div>
            <div>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 ml-5 ">
                <img src={rooster10} loading="lazy" width="50%" alt="rooster" />
                {/* <img src="images/08-v2-big.gif" loading="lazy" alt='pics' className="image-21" /> */}
              </div>
              <div
                style={{ backgroundColor: "#c8f7a3" }}
                className="col-xl-5 col-lg-5 col-md-5 col-sm-12"
              >
                <h2>Donations</h2>
                <div className="text-center">
                  <img width="100%" height="50px" src={wood} alt="footer" />
                </div>
                <p
                  className="_w-660"
                  style={{ fontWeight: "bolder", fontSize: "14px" }}
                >
                  One In eight women In their lifetime will experience Hulihuli
                  cancer. This is something the Hulihuli community cares deeply
                  about. The more transactions on the Hulihuli network the more
                  we are able to raise. Thus, you can help by donating to
                  marketing wallet, or you can donate directly to the charity
                  wallet and the Hulihuli community team will make sure to
                  donate It well on you behalf ‍ Accepted: We accept any ERC20
                  token Preferred: $ETH, $USDC, Hulihuli
                </p>
                <div className="founding-members">
                  <div className="founding-member-item">
                    <div className="founding-member-image-container">
                      <img
                        src={Lizard2}
                        loading="lazy"
                        alt="pics"
                        className="image-16"
                      />
                    </div>
                    <div className="founding-member-text">
                      <a
                        href="https://etherscan.io/address/0x6ae55e8c0355a61913ff4818afbe06a17eacf005"
                        target="_blank"
                        className="cta-button red-button w-button"
                      >
                        Charity Wallet
                      </a>
                    </div>
                  </div>
                  <div className="founding-member-item">
                    <div className="founding-member-image-container">
                      <img
                        src={frog}
                        loading="lazy"
                        alt="pics"
                        className="image-16"
                      />
                    </div>
                    <div className="founding-member-text">
                      <a
                        href="https://etherscan.io/address/0xbd582f84fc667e3b1ef6743237b766988164a302"
                        target="_blank"
                        className="chuddar-button cta-button red-button w-button"
                      >
                        Marketing Wallet
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
            <img width="80%" height="100px" src={wood} alt="footer" />
            <h3 className="text-center w-100 ">Copyright © 2021,Encodix</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
