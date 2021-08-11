import { useEffect } from "react";

import rooster from "./assets/png/rooster4.png";
import rooster1 from "./assets/png/rooster8.png";
import rooster2 from "./assets/png/rooster2.png";
import rooster7 from "./assets/png/rooster9.png";
import rooster5 from "./assets/png/rooster5.png";
import titkimask from "./assets/png/tikimask2.png";
import titkimask2 from "./assets/png/tikimask1.png";

import butterfly from "./assets/gif/butterfly1.gif";
import butterfly1 from "./assets/gif/butterfly2.gif";
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
    <>
      <div className="kishu-live-ticker w-embed w-script">
        {/*  TradingView Widget BEGIN  */}
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget" />
        </div>
        {/*  TradingView Widget END  */}
      </div>
      <div
        data-w-id="c16aa2e5-b43d-c2cf-7dba-44198f5f82bf"
        className="google-translator-2"
      >
        <div className="html-embed w-embed">
          <div id="google_translate_element" />
        </div>
      </div>
      {/* <div
        data-w-id="52e8b043-e2cb-1d7c-5a6f-3c81d4b9a9f2"
        style={{ display: "flex", opacity: 1 }}
        className="page-load-wrapper"
      >
        <img
          src="images/06-small.gif"
          loading="lazy"
          alt="pics"
          className="image-23"
        />
      </div> */}
      <div
        data-w-id="e3673c46-df59-1f99-93e3-043bb54261e5"
        className="back-to-top"
      >
        <a href="#home" className="capitals nav-link is--back-to-top">
          BACK TO TOP
        </a>
      </div>
      <section
        id="home"
        className="hero"
        style={{
          display: "none",
          border: "1px solid black",
        }}
      >
        <div
          data-collapse="medium"
          data-animation="over-right"
          data-duration={400}
          data-doc-height={1}
          data-no-scroll={1}
          role="banner"
          className="navbar native w-nav"
        >
          <div className="container-1800 is--nav">
            <div className="navbar custom">
              <a
                href="#home"
                id="Kishu-logo"
                className="brand brand-2 w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7fe-52018772 w-nav-brand"
              />
              <nav
                role="navigation"
                id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7ff-52018772"
                className="nav-menu w-nav-menu"
              >
                {/* <a href="#why-kishu" className="capitals nav-link w-nav-link">Why kishu</a> */}
                <div
                  data-hover={1}
                  data-delay={0}
                  className="dropdown w-dropdown"
                >
                  <div className="w-dropdown-toggle">
                    <div className="icon w-icon-dropdown-toggle" />
                    <div className="capitals nav-link is--dropdown">
                      Why $BREAST
                    </div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <a href="#" className="dropdown-link w-dropdown-link">
                      $BREAST Swap
                    </a>
                    <a href="#" className="dropdown-link _2 w-dropdown-link">
                      $BREAST Swap
                    </a>
                    <a href="#" className="dropdown-link _3 w-dropdown-link">
                      $BREAST Swap
                    </a>
                  </nav>
                </div>
                <a href="#how-to-buy" className="capitals nav-link w-nav-link">
                  How to buy
                </a>
                <a href="#stats" className="capitals nav-link w-nav-link">
                  tokenomics
                </a>
                <a
                  href="#safebreastx-swap"
                  className="capitals nav-link w-nav-link"
                >
                  swap
                </a>
                <a href="#moonmap" className="capitals nav-link w-nav-link">
                  Roadmap
                </a>
                <a href="#donate" className="capitals nav-link w-nav-link">
                  donation
                </a>
              </nav>
              <a
                id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e80c-52018772"
                href="https://dex.safebreast.com"
                target="_blank"
                className="re-button cta-button is--nav-link w-button"
              >
                BUY $SAFEBREAST
              </a>
              <div className="spacer" />
              <div className="w-nav-button">
                <div className="w-icon-nav-menu" />
              </div>
            </div>
          </div>
        </div>
        <div className="background-image is--hero" />
        <div className="floating-elements-container">
          <div className="fl-element v1">
            <img src={butterfly} width="60px" loading="lazy" alt="pics" />
          </div>
          <div className="fl-element v2">
            <img src={butterfly1} width="60px" loading="lazy" alt="pics" />
          </div>
        </div>
        <div className="container-1800">
          <div className="hero-content-wrapper">
            <div className="_2-col-grid is--hero">
              <div
                id="w-node-_151b762e-3975-8bd9-09a6-b15858026423-52018772"
                className="hero-text"
              >
                <h1 className="display">
                  Breasts safely
                  <br /> to the jungle
                </h1>

                <p className="white-text is--hero-text">
                  SafeBreast Inu ($BREAST) is a charity-oriented and community
                  focused decentralized cryptocurrency with instant rewards for
                  charities and holder 🐶
                </p>
                <div className="hero-buttons">
                  <a
                    href="https://dex.safebreast.com"
                    target="_blank"
                    className="cta-button red-button w-button"
                  >
                    BUY $SAFEBREAST
                  </a>
                  <a
                    href="https://drive.google.com/file/d/169iYsSiNTQYnajnBTlyx3OPYzrtlFplK/view"
                    target="_blank"
                    className="chuddar-button cta-button w-button"
                  >
                    WHITEPAPER
                  </a>
                </div>
                <div className="social-icons is--hero">
                  <a
                    href="https://t.me/SafeBreast"
                    target="_blank"
                    className="social-icon-item is--hero w-inline-block"
                  >
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a
                    href="mailto:admin@safebreast.com"
                    target="_blank"
                    className="social-icon-item is--hero w-inline-block"
                  >
                    <div className="fa-social-icon is--hero">✉️</div>
                  </a>
                  <a
                    href="https://twitter.com/SafeBreastInu"
                    target="_blank"
                    className="social-icon-item is--hero w-inline-block"
                  >
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  {/*<a href="https://www.instagram.com/inukishu/?hl=en" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a> */}
                  {/* <a href="https://www.youtube.com/results?search_query=kishu+inu" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://medium.com/coinmonks/kishu-inu-token-everything-about-it-798dc0ae6a43" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://github.com/Kishu-Inu/Kishu-Inu-Contracts" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://discord.gg/kishuinucommunity" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a> */}
                </div>
              </div>
              <div
                id="w-node-c5f9f19b-7168-f059-943c-ccb78b848fa7-52018772"
                className="hero-graphics-wrapper"
              >
                {/* <img src="images/V1.gif" loading="lazy" alt='pics' className="kishu-tailwag is-full-height" />
                <img src="images/bowl2x.png" loading="lazy" sizes="(max-width: 479px) 95.99609375px, 256.9921875px" width={257} alt='pics' className="dog-bowl" />
                <img src="images/dream2x.png" loading="lazy" width={193} alt='pics' className="kishu-dreambubble" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down-container">
          <a href="#why-kishu" className="scroll-down w-inline-block">
            <h6 className="purple">Learn more</h6>
            <div className="arrow is--down" />
          </a>
        </div>
      </section>

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

      {/* <section id="why-kishu" className="why-kishu">
        <div className="container-1800">
          <div className="section-heading is--why-kishu">
            <div className="accent-large">$Breast</div>
            <h2 className="h2-what-is-kishu">SafeBreast Inu Explained</h2>
          </div>
          <div data-w-id="87ebf16d-1406-997c-c236-81e39756dba7" className="why-kishu-scrolling-container">
            <div className="_2-col-grid bottom-padding is--sticky">
              <div id="w-node-_4d01e470-0316-6366-bff1-e94ed46148b2-52018772" className="left-col">
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea0" className="why-kishu-image">
                  <img src="images/instant-rewards---background-no-kishu.png" loading="lazy" width={772} sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/instant-rewards---background-no-kishu-p-500.png 500w, images/instant-rewards---background-no-kishu-p-800.png 800w, images/instant-rewards---background-no-kishu.png 887w" alt='pics' className="what-is-kishu-img" /> */}
      {/* <img src="images/shining-stars-.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw" srcSet="images/shining-stars--p-500.png 500w, images/shining-stars-.png 618w" alt='pics' className="shining-stars" /> */}
      {/* <img src="images/02-v1-big.gif" loading="lazy" width={1038} alt='pics' className="image-19" /> */}
      {/* </div>
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea2" className="why-kishu-image _2"><img src="images/1.png" loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/1-p-800.png 800w, images/1.png 887w" alt='pics' className="what-is-kishu-img" /></div>
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea4" className="why-kishu-image _3"><img src="images/3.png" loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/3-p-800.png 800w, images/3.png 887w" alt='pics' className="what-is-kishu-img" /></div>
              </div>
              <div id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772" className="right-col"> */}

      {/* <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" className="why-kishu-text-item">
                  <h3>Charity Contribution</h3>
                  <p className="_w-414">For every transaction in the SafeBreast network (buy or sell), 2% of the transaction is automatically converted to ethereum and can be donated without needing to sell any coins */}

      {/* <a href="https://etherscan.io/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f">https://etherscan.io/address</a> */}
      {/* </p>
                </div> */}

      {/* <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" className="why-kishu-text-item">
                  <h3>Holder Rewards</h3>
                  <p className="_w-414">Of all buy or sell transactions in the SafeBreast network 2% will be distributed to existing holders. That means you earn $BREAST just by holding it. Remember to go back and checkour wallet once in a while y?
We also burned 35% of total supply, so if as this wallet gets rewards the number of circulating coins will decrease.</p>
                </div> */}

      {/* <div id="telegram" data-w-id="cd9039a0-2dd2-5175-0451-9e43e496cf63" className="why-kishu-text-item"> */}
      {/* <h3>Holder <br />Rewards</h3> */}
      {/* <h4>Community Driven</h4>*/}
      {/* <p className="_w-414">Of all buy or sell transactions in the SafeBreast network 2% will be distributed to existing holders. That means you earn $BREAST just by holding it. Remember to go back and check your wallet occasionally. We also burned 35% of total supply, so as this wallet gets rewards the number of circulating coins will decrease</p> */}
      {/*<a href="https://t.me/SafeBreast" target="_blank" className="link">Join our Telegram community</a>*/}
      {/* </div>
                <div data-w-id="050d4163-cfce-5ea7-6bb8-c24dc4660203" className="why-kishu-text-item">
                  <h3>Community Driven</h3>
                  <p className="_w-414">SafeBreast is 100% community driven. Where the full team are holders from the very launch of this token, but we are always expanding and want as many people as possible to get involved. The team and community love watching their own wallets and the charity wallet grow</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="why-kishu" className="why-kishu">
        <div className="container-1800"> */}
      {/* <div className="section-heading is--why-kishu">
            <div className="accent-large">$Breast</div>
            <h2 className="h2-what-is-kishu">SafeBreast Inu Explained</h2>
          </div> */}
      {/* <div data-w-id="87ebf16d-1406-997c-c236-81e39756dba7" className="why-kishu-scrolling-container">
            <div className="_2-col-grid bottom-padding is--sticky">
              <div id="w-node-_4d01e470-0316-6366-bff1-e94ed46148b2-52018772" className="left-col">
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea0" className="why-kishu-image">
                  <img src="images/instant-rewards---background-no-kishu.png" loading="lazy" width={772} sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/instant-rewards---background-no-kishu-p-500.png 500w, images/instant-rewards---background-no-kishu-p-800.png 800w, images/1st.png 887w" alt='pics' className="what-is-kishu-img" /> */}
      {/* <img src="images/shining-stars-.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw" srcSet="images/shining-stars--p-500.png 500w, images/shining-stars-.png 618w" alt='pics' className="shining-stars" /> */}
      {/* <img src="images/02-v1-big.gif" loading="lazy" width={1038} alt='pics' className="image-19" /> */}
      {/* </div> */}
      {/* <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea2" className="why-kishu-image _2"><img src="images/1.png" loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/1-p-800.png 800w, images/2nd.png 887w" alt='pics' className="what-is-kishu-img" /></div>
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea4" className="why-kishu-image _3"><img src="images/3.png" loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/3-p-800.png 800w, images/3rd.png 887w" alt='pics' className="what-is-kishu-img" /></div>
              </div>
              <div id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772" className="right-col">






                <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" className="why-kishu-text-item">
                  <h3>Transparent <br />and Trusted</h3>
                  <p className="_w-414">The crypto space sees a lot of mistrust and lack of transparency. SafeBreast strives to be a beacon for trust and transparency in everything we do, be it everything from launching new features to donating to charity */}
      {/* <a href="https://etherscan.io/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f">https://etherscan.io/address</a> */}
      {/* </p>
                </div> */}

      {/* <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" className="why-kishu-text-item">
                  <h3>Holder Rewards</h3>
                  <p className="_w-414">Of all buy or sell transactions in the SafeBreast network 2% will be distributed to existing holders. That means you earn $BREAST just by holding it. Remember to go back and checkour wallet once in a while y?
We also burned 35% of total supply, so if as this wallet gets rewards the number of circulating coins will decrease.</p>
                </div> */}

      {/* <div data-w-id="cd9039a0-2dd2-5175-0451-9e43e496cf63" className="why-kishu-text-item">
                  <h3>150k</h3>
                  <p className="_w-414">Donated to Breast Cancer research and awareness</p> */}
      {/* <h3>Charity Wallet</h3> */}
      {/* <h4>Community Driven</h4>*/}
      {/* <a href="https://etherscan.io/address/0x6ae55e8c0355a61913ff4818afbe06a17eacf005">Charity Wallet</a> */}
      {/*<a href="https://t.me/SafeBreast" target="_blank" className="link">Join our Telegram community</a>*/}
      {/* // </div> */}

      {/* <div data-w-id="050d4163-cfce-5ea7-6bb8-c24dc4660203" className="why-kishu-text-item">
                  <h3>< img src="images/slide1.png"  className="heading-img"/></h3>
                  <p className="_w-414">75k donated to the American cancer society &nbsp; <a href="https://drive.google.com/file/d/1yypQax70nFXOMUfNSldogBXST13ysnkV/view?usp=sharing
"><b>Check Here</b></a></p>
                  <p className="_w-414">To check Successful Transaction &nbsp; <a href="https://etherscan.io/tx/0x3e36779e5adfa7a76f11fe84dc21b576defe2926f45c826159b5e36d3163f280
"><b>Click Here</b></a></p>
                  
                  
                  <h3>< img src="images/slide2.png"  className="heading-img"/></h3> */}
      {/* <p className="_w-414">75k donated to the the Bor Foundation</p> */}
      {/* <p className="_w-414"><a href="https://drive.google.com/file/d/1J0Xka-uBsqEwCeorB12-CTwTUz-JpPEK/view
">Drive Link</a></p> */}
      {/* <p className="_w-414"><a href="http://">Drive Link</a></p> */}
      {/* <p className="_w-414">75k donated to the American cancer society &nbsp; <a href="https://drive.google.com/file/d/1J0Xka-uBsqEwCeorB12-CTwTUz-JpPEK/view
"><b>Check Here</b></a></p>
                  <p className="_w-414">To check Successful Transaction &nbsp; <a href="https://etherscan.io/tx/0xc7628e2f075a372a8e924b2b77591a275614f920fa302658292fd86da8387422
"><b>Click Here</b></a></p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="why-kishu" className="why-kishu">
        <div className="container-1800">
          <div data-w-id="87ebf16d-1406-997c-c236-81e39756dba7" className="why-kishu-scrolling-container-new">
            <div className="_2-col-grid bottom-padding is--sticky">
              <div id="w-node-_4d01e470-0316-6366-bff1-e94ed46148b2-52018772" className="left-col">
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea0" className="why-kishu-image">
                  <img src="images/instant-rewards---background-no-kishu.png" loading="lazy" width={772} sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/instant-rewards---background-no-kishu-p-500.png 500w, images/instant-rewards---background-no-kishu-p-800.png 800w, images/instant-rewards---background-no-kishu.png 887w" alt='pics' className="what-is-kishu-img" /><img src="images/shining-stars-.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw" srcSet="images/shining-stars--p-500.png 500w, images/shining-stars-.png 618w" alt='pics' className="shining-stars" />
                <img src="images/02-v1-big.gif" loading="lazy" width={1038} alt='pics' className="image-19" />
                </div>
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea2" className="why-kishu-image _2"><img src="images/1st.png" loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/1-p-800.png 800w, images/1st.png 887w" alt='pics' className="what-is-kishu-img" /></div>
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea4" className="why-kishu-image _3"><img src="images/3.png" loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/3-p-800.png 800w, images/3.png 887w" alt='pics' className="what-is-kishu-img" /></div>
              </div>
              <div id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772" className="right-col">






                <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" className="why-kishu-text-item">
                  <h3>Charity Contribution</h3>
                  <p className="_w-414">For every transaction in the SafeBreast network (buy or sell), 2% of the transaction is automatically converted to ethereum and can be donated without needing to sell any coins

                  <a href="https://etherscan.io/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f">https://etherscan.io/address</a>
                  </p>
                </div>



                <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" className="why-kishu-text-item">
                  <h3>Holder Rewards</h3>
                  <p className="_w-414">Of all buy or sell transactions in the SafeBreast network 2% will be distributed to existing holders. That means you earn $BREAST just by holding it. Remember to go back and checkour wallet once in a while y?
We also burned 35% of total supply, so if as this wallet gets rewards the number of circulating coins will decrease.</p>
                </div>


                <div id="telegram" data-w-id="cd9039a0-2dd2-5175-0451-9e43e496cf63" className="why-kishu-text-item">
                  <h3>Transparent <br /> and Trusted</h3>
                  
                  <p className="_w-414">The crypto space sees a lot of mistrust and lack of transparency. SafeBreast strives to be a beacon for trust and transparency in everything we do, be it everything from launching new features to donating to charity</p>
                  <a href="https://t.me/SafeBreast" target="_blank" className="link">Join our Telegram community</a>
                </div>
                <div data-w-id="050d4163-cfce-5ea7-6bb8-c24dc4660203" className="why-kishu-text-item">
                  <h3>Secure &amp; Safe</h3>
                  <h4>Transparent and trusted</h4>
                  <p className="_w-414">The crypto space sees a lot of mistrust and lack of transparency. SafeBreast strives to be a beacon for trust and transparency in everything we do, be it everything from launching new features to donating to charity
.</p>
                  <a href="audits/KishuInu-Audit-TechRate.pdf" target="_blank" className="link">See our security audit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="how-to-buy"
        data-w-id="79154066-a6be-0e91-28f5-f2df3abf15d2"
        className="how-to-buy"
      >
        <div className="container-1800">
          <div className="section-heading">
            <h1 style={{ color: "#a6745e" }}>Buy</h1>
            <h2>How to buy $BREAST</h2>
            <img
              src="images/uni.png"
              loading="lazy"
              alt="pics"
              className="uni-image"
              style={{ opacity: 0 }}
            />
          </div>
          {/* <div
            data-w-id="8a60e5e9-f138-7430-05c7-8063c205bff1"
            data-animation-type="lottie"
            data-src="documents/frisbee-dog.json"
            data-loop={0}
            data-direction={1}
            data-autoplay={0}
            data-is-ix2-target={1}
            data-renderer="canvas"
            data-default-duration="2.0020019204587935"
            data-duration={0}
            className="lottie-animation-2"
          ></div> */}
          <div className="dog-frisbee-wrapper">
            {/* <div id="w-node-_82d26454-4b9c-a99d-09e5-0cacf9e7004a-52018772" data-w-id="82d26454-4b9c-a99d-09e5-0cacf9e7004a" className="frisbee-wrapper">
              <img src="images/frisbee.png" loading="lazy" width={1338} sizes="100vw" srcSet="images/frisbee-p-500.png 500w, images/frisbee-p-800.png 800w, images/frisbee-p-1080.png 1080w, images/frisbee-p-1600.png 1600w, images/frisbee-p-2000.png 2000w, images/frisbee.png 2776w" alt='pics' className="image-3" />
              <img src="images/Shape-4.png" loading="lazy" alt='pics' className="image-4" />
            </div> */}
            {/* <div id="w-node-_7c27231e-b663-e33d-3c65-9b4ead67e582-52018772" data-w-id="7c27231e-b663-e33d-3c65-9b4ead67e582" className="dog-wrapper">
              <img src="images/ki-facer-1.png" loading="lazy" width={515} sizes="100vw" srcSet="images/ki-facer-1-p-500.png 500w, images/ki-facer-1-p-800.png 800w, images/ki-facer-1.png 1030w" alt='pics' className="image-5" />
              <img src="images/Shape-3.png" loading="lazy" sizes="100vw" srcSet="images/Shape-3-p-500.png 500w, images/Shape-3.png 1024w" alt='pics' className="image-6" />
            </div> */}
          </div>
          <div
            className="htbs-wrapper text-center"
            style={{ fontSize: "20px" }}
          >
            <div
              data-duration-in={300}
              data-duration-out={100}
              className="tabs w-tabs"
            >
              <div
                className="tabs-menu w-tab-menu"
                style={{ display: "inline" }}
              >
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
                    <div className="htb-text">
                      <h4>Create a MetaMask Wallet</h4>
                      <p>
                        $BREAST token is available on the Ethereum blockchain.
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
                    <div className="htb-text">
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
                    <div className="htb-text">
                      <h4 className="heading-3">
                        Visit SafeBreastX Swap
                        <br />
                      </h4>
                      <p>
                        You can currently buy $BREAST on{" "}
                        <a href="https://dex.safebreast.com" target="_blank">
                          <strong>SafeBreastX Swap</strong>
                        </a>
                        , SafeBreast's official decentralized exchange where you
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
                    <div className="htb-text">
                      <h4 className="heading-3">
                        Swap $ETH for $BREAST
                        <br />
                      </h4>
                      <p>
                        Enter the amount of $ETH you would like to swap for
                        $BREAST. Click <strong>Connect Wallet </strong>
                        then <strong>Swap</strong>
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
      <section
        id="stats"
        className="stats"
        style={{ backgroundColor: "#c8f7a3", marginTop: "500px" }}
      >
        <div className="container-1800">
          <div className="section-heading is--stats">
            <div className="accent-large" style={{ color: "#a6745e" }}>
              Stats
            </div>
            <h2 className="h2-what-is-kishu" style={{ marginTop: "50px" }}>
              Tokenomics
            </h2>
          </div>
          <div
            data-w-id="b83854f4-0edc-97bf-60d8-a3002264f569"
            className="stats-scrolling-container"
          >
            <div
              className="bottom-padding d-lg-flex d-md-flex"
              // style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                id="w-node-b83854f4-0edc-97bf-60d8-a3002264f56b-52018772"
                className="left-col"
              >
                <div data-w-id="bbec4ffd-9457-b4fd-d633-2fb6ea1e88f5">
                  <img
                    style={{ display: "flex" }}
                    src={rooster7}
                    loading="lazy"
                    // sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 43vw"
                    alt="pics"
                  />
                  <div className="floating-elements-container" />
                  <img
                    src="images/floating-elements.png"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw"
                    // srcSet="images/floating-elements-p-500.png 500w, images/floating-elements-p-800.png 800w, images/floating-elements.png 895w"
                    alt="pics"
                    className="image-20"
                    style={{ opacity: 0 }}
                  />
                </div>
                <div className="tokenomics-image _2">
                  <img
                    src="images/eyeglasses-kishu.png"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 43vw"
                    srcSet="images/eyeglasses-kishu-p-500.png 500w, images/eyeglasses-kishu-p-800.png 800w, images/eyeglasses-kishu-p-1080.png 1080w, images/eyeglasses-kishu.png 1516w"
                    alt="pics"
                    className="eyeglasses-kishu"
                  />
                  <div className="floating-elements-container">
                    <img
                      src="images/Ellipse-1-copy-7.png"
                      loading="lazy"
                      alt="pics"
                      className="image-9"
                    />
                    <img
                      src="images/Shape-8-copy.png"
                      loading="lazy"
                      alt="pics"
                      className="image-10"
                    />
                  </div>
                </div>
              </div>
              <div
                id="w-node-b83854f4-0edc-97bf-60d8-a3002264f576-52018772"
                className="right-col"
                // style={{ margin: "40px", border: "1px solid black" }}
              >
                <div
                  data-w-id="f260eb35-8ea4-0380-4a92-2422d676718f"
                  // className="tokenomics-text-item"
                >
                  <div className="flex-vertical">
                    <h3 className="red is--tokenomics">$BREAST</h3>
                    <h5 className="gray">TOKEN SYMBOL</h5>
                  </div>
                  <div className="flex-vertical centered">
                    <h3 className="red is--tokenomics">1 TRILLION</h3>
                    <h5 className="gray">TOTAL SUPPLY</h5>
                  </div>
                  <div className="flex-vertical">
                    <h3 className="red is--tokenomics">2% REWARD</h3>
                    <h5 className="gray">PER TRANSACTION</h5>
                  </div>
                </div>
                {/* <div
                  id="price-chart"
                  data-w-id="911dc789-cd8c-3157-6ceb-b918bd87e7db"
                  className="tokenomics-text-item"
                >
                  <div className="flex-vertical">
                    <h3 id="holders" className="red is--tokenomics">
                      2%+ LIQUIDITY
                    </h3>
                    <h5 className="gray">PER TRANSACTION</h5>
                  </div>
                  <div className="flex-vertical centered">
                    <h3 id="marketcap" className="red is--tokenomics">
                      2% CHARITY
                    </h3>
                    <h5 className="gray">PER TRANSACTION</h5>
                  </div>
                  <div className="flex-vertical">
                    <h3 id="price" className="red is--tokenomics">
                      PRICE CHART
                    </h3>
                    <h5>
                      <a
                        href="https://www.dextools.io/app/uniswap/pair-explorer/0x77c1d3cd554b500ee9f2fee41509360f7503257f"
                        target="_blank"
                        className="link"
                      >
                        Price Chart
                      </a>
                    </h5>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="safebreastx-swap"
        data-w-id="aaf63f67-334b-e352-4558-ab85d636bd59"
        className="safebreastx-swap"
      >
        <div className="container-1800">
          <div className="section-heading is--swap">
            <div className="accent-large" style={{ color: "#a6745e" }}>
              Swap
            </div>
          </div>
          <div className="_2-col-grid is--swap">
            <div
              id="w-node-_88bfb55d-1e28-bbc5-88fe-35f39f0986a2-52018772"
              className="safebreastx-swap---text-container"
              // style={{ padding: "0 20px" }}
            >
              <h5 style={{ marginTop: "100px" }}>DECENTRALIZED EXCHANGE</h5>
              <h2>SafeBreastX Swap</h2>
              <p
                className="_w-520"
                style={{ fontSize: "15px", padding: "0 20px" }}
              >
                SafeBreastX Swap is our official decentralized exchange (DEX).
                It gives holders the ability to swap any ERC20 token for another
                one. It is powered by Uniswap, the safest and most trusted DEX
                in the world. Furthermore, it acts as the foundation from which
                we will build additional features and functionality exclusive to
                $BREAST holders.
              </p>
              <a
                href="https://dex.safebreast.com"
                target="_blank"
                className="cta-button red-button w-button"
              >
                OPEN SafeBreastX
              </a>
            </div>
            <div
              data-w-id="144a6b52-a9d9-1231-1db6-5ffa2cee27cf"
              className="purple-paw-wrapper"
            >
              <img
                src="images/purple-paw-2.png"
                loading="lazy"
                width={837}
                sizes="(max-width: 767px) 100vw, (max-width: 1919px) 46vw, 100vw"
                srcSet="images/purple-paw-2-p-500.png 500w, images/purple-paw-2-p-800.png 800w, images/purple-paw-2.png 837w"
                alt="pics"
                className="purple-paw"
                style={{ opacity: 0 }}
              />
              <img
                src="images/screnshot.png"
                loading="lazy"
                alt="pics"
                className="safebreastx-swap-screenshot"
                style={{ opacity: 0 }}
              />
            </div>
          </div>
          {/* <div id="w-node-_88bfb55d-1e28-bbc5-88fe-35f39f0986a2-52018772" className="safebreastx-swap---text-container">
            <h5>DECENTRALIZED EXCHANGE</h5>
            <h2>Kishu Swap</h2>
            <p className="_w-520">SafeX is the official decentralized exchange (DEC) for all SafeBreast Inu holders. It is powered buy Uniswap and allows SafeBreast holders the opportunity to trade any ERC20 token.</p>
            <a href="https://dex.safebreast.com" target="_blank" className="cta-button red-button w-button">OPEN KISHU SWAP</a>
          </div> */}
        </div>
      </section>
      <div id="moonmap" className="moonmap">
        <div className="container-1800">
          <div className="section-heading">
            <div
              className="accent-large"
              style={{ color: "#a6745e", marginBottom: "100px" }}
            >
              Moon
            </div>
            <h2 className="h2-moonmap">Roadmap</h2>
            <p
              className="_w-660 centered "
              style={{ fontSize: "15px", padding: "0 20px" }}
            >
              $BREAST is a coin that wants to engage its community and donate to
              charity through its different features.. All features currently
              planned are laid out in the roadmap
            </p>
          </div>
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
                    src="images/kishu-rocket-stars.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 671.9921875px, 42vw"
                    srcSet="images/kishu-rocket-stars-p-500.png 500w, images/kishu-rocket-stars-p-800.png 800w, images/kishu-rocket-stars.png 915w"
                    alt="pics"
                    className="rocket-stars"
                    style={{ opacity: 0 }}
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
                    width="164.5"
                    alt="tikimask12"
                    className="rocket-smoke"
                  />
                  <img
                    src={titkimask2}
                    loading="lazy"
                    data-w-id="b901c4bf-ff2e-dbae-ab88-d6aa4c2268f2"
                    sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 671.9921875px, 710px"
                    // srcSet="images/kishu-rocket-space-p-500.png 500w, images/kishu-rocket-space.png 710w"
                    alt="tikimask"
                    className="space"
                  />
                </div>
                <div className="moonmap-phase-wrapper">
                  <div className="phase">
                    <div
                      className="accent-small centered"
                      style={{ color: "#a6745e" }}
                    >
                      PHASE 1
                    </div>
                  </div>
                  <div className="phase-details">
                    <h6 className="phase-status in-progress">IN PROGRESS</h6>
                    <h3 className="phase-name">Launch</h3>
                    <div
                      className="phase-activities"
                      style={{ fontSize: "15px" }}
                    >
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">
                          ✅ Whitepaper - roadmap{" "}
                        </p>
                      </div>
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding"> ✅ Website launch</p>
                      </div>
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">✅ SafeBreastX</p>
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
                      {/* <div className="phase-activity-item">
                        <p className="no-bottom-padding">5,000 Holders</p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="moonmap-phase-wrapper">
                  <div className="phase">
                    <div
                      className="accent-small centered"
                      style={{ color: "#a6745e" }}
                    >
                      PHASE 2
                    </div>
                  </div>
                  <div className="phase-details">
                    <h6 className="phase-status"></h6>
                    <h3 className="phase-name">Growth</h3>
                    <div
                      className="phase-activities"
                      style={{ fontSize: "15px" }}
                    >
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">
                          • Pricetracking listings: CoinGecko and CoinMarketCap
                        </p>
                      </div>
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">• Cex listings</p>
                      </div>
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">
                          • Creation of SafeBreast Foundation
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
                          • Passive income dashboard (SafeBreastX Swap)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="moonmap-phase-wrapper">
                  <div className="phase">
                    <div
                      className="accent-small centered"
                      style={{ color: "#a6745e" }}
                    >
                      PHASE 3
                    </div>
                  </div>
                  <div className="phase-details">
                    <h6 className="phase-status"></h6>
                    <h3 className="phase-name">Expansion</h3>
                    <div
                      className="phase-activities"
                      style={{ fontSize: "15px" }}
                    >
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">
                          • DAO governance structure for SafeBreast Foundation{" "}
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
                          • One million dollars donated to breast cancer
                          awareness
                          <br />
                        </p>
                      </div>
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">
                          {" "}
                          • SafeBreast impact wallet
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
                    <div
                      className="accent-small centered"
                      style={{ color: "#a6745e" }}
                    >
                      PHASE 4
                    </div>
                  </div>
                  <div className="phase-details">
                    <h6 className="phase-status"></h6>
                    <h3 className="phase-name">
                      Utility
                      <br />
                    </h3>
                    <div
                      className="phase-activities"
                      style={{ fontSize: "15px" }}
                    >
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">
                          • SafeBreast store (merchandise)
                          <br />
                        </p>
                      </div>
                      <div className="phase-activity-item">
                        {/* <img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark off" /> */}
                        <p className="no-bottom-padding">
                          • Audit of additional smart contracts <br />
                        </p>
                      </div>
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">
                          • Ten million dollars donated to breast cancer
                          awareness
                          <br />
                        </p>
                      </div>
                      {/* <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark off" />
                        <p className="no-bottom-padding">KISHU sWag (Merchandise Store)<br /></p>
                      </div>
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">More CEX Listings<br /></p>
                      </div>
                      <div className="phase-activity-item">
                        <p className="no-bottom-padding">50,000 Telegram Members<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark off" />
                        <p className="no-bottom-padding">Influencer Marketing Partnerships<br /></p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="team"
        className="founding-team"
        style={{ backgroundColor: "#c8f7a3" }}
      >
        <div className="container-1800">
          <div className="section-heading is--team">
            <div
              className="team-section accent-large"
              style={{ color: "#a6745e", zIndex: 3 }}
            >
              Community
            </div>
          </div>
          <div className="_2-col-grid offset-up">
            <div
              id="w-node-_5f653208-8b22-cc29-2ef1-5f821570ca56-52018772"
              className="founding-team-img-wrapper"
            >
              <img
                src={rooster}
                loading="lazy"
                width={884}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 34vw, (max-width: 1919px) 46vw, 100vw"
                // srcSet="images/background-shape-p-500.png 500w, images/background-shape-p-800.png 800w, images/background-shape.png 857w"
                alt="rooster"
                className="founding-team-img"
              />
              {/* <img src="images/08-v2-big.gif" loading="lazy" alt='pics' className="image-21" /> */}
            </div>
            <div
              className="founding-team-text-wrapper"
              style={{ backgroundColor: "#c8f7a3" }}
            >
              <h2 className="h2-founding-team pt-5 ">
                Telegram
                <br />
                Community
              </h2>
              <p className="_w-660" style={{ fontWeight: "bolder" }}>
                Feel free to reach out to anyone in the community! We would love
                to have you. SafeBreast Inu was founded by Chris, he will
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
                    <p>Founder</p>
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
                    <p>Community</p>
                    <a
                      href="https://t.me/SafeBreast"
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
      <section id="donate" className="donate">
        <div className="container-1800">
          <div
            className="section-heading is--donate"
            style={{ paddingTop: "20px" }}
          >
            <div
              className="team-section accent-large"
              style={{ color: "#a6745e" }}
            >
              Donations
            </div>
          </div>
          <div className="_2-col-grid is--donate">
            <div
              id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fd-52018772"
              className="donate-text-wrapper"
            >
              <h2 className="phuddar">OUR Cause..</h2>
              <p
                className="_w-520 is--token-code"
                style={{ fontWeight: "bolder" }}
              >
                One In eight women In their lifetime will experience breast
                cancer. This is something the SafeBreast community cares deeply
                about. The more transactions on the SafeBreast network the more
                we are able to raise. Thus, you can help by donating to
                marketing wallet, or you can donate directly to the charity
                wallet and the SafeBreast community team will make sure to
                donate It well on you behalf
                <br />‍<br />
                <br />
                <strong>Accepted</strong>: We accept any ERC20 token
                <br />
                <strong>Preferred</strong>: $ETH, $USDC, $BREAST
              </p>
              <a
                href="https://etherscan.io/address/0x6ae55e8c0355a61913ff4818afbe06a17eacf005"
                target="_blank"
                className="cta-button red-button w-button"
              >
                Charity Wallet
              </a>
              <a
                href="https://etherscan.io/address/0xbd582f84fc667e3b1ef6743237b766988164a302"
                target="_blank"
                className="chuddar-button cta-button red-button w-button"
              >
                Marketing Wallet
              </a>
            </div>
            <div
              id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fb-52018772"
              className="donate-imgs"
            >
              <img
                src={rooster5}
                loading="lazy"
                width={884}
                sizes="(max-width: 767px) 100vw, (max-width: 1919px) 46vw, 100vw"
                // srcSet="images/donate-qr-code-p-500.png 500w, images/donate-qr-code.png 777w"
                alt="pics"
                className="donate-qr-code"
              />
              {/* <img src="images/09-big.gif" loading="lazy" width="260.5" alt='pics' className="sleeping-kishu" /> */}
            </div>
          </div>
          <div className="press-logos-wrapper">
            {/* <a id="w-node-_8d5d293f-b1a7-74ff-1732-75fc22a0ef52-52018772" href="https://www.newsweek.com/buy-kishu-inu-new-crypto-dogecoin-big-brother-1590404" target="_blank" className="press-logo-item w-inline-block"><img src="images/newsweek-logo-vector2x.png" loading="lazy" width={347} sizes="(max-width: 479px) 100vw, (max-width: 1919px) 22vw, 346.9921875px" alt='pics' className="press-logo" /></a> */}
            {/* <a id="w-node-_5b3309ca-e69c-4f7e-afe2-342d4be4e06e-52018772" href="https://www.thesun.co.uk/money/14953721/how-risky-is-kishu-inu/" target="_blank" className="press-logo-item w-inline-block"><img src="images/sunmasthead2x.png" loading="lazy" width={174} alt='pics' className="press-logo" /></a> */}
            {/* <a id="w-node-_6f2d8d68-fceb-992f-b7a7-37bcffd1a88f-52018772" href="https://gothammag.com/kishu-inu-times-square" target="_blank" className="press-logo-item w-inline-block"><img src="images/GOTH_cover_white2x.png" loading="lazy" width={210} alt='pics' className="press-logo" /></a> */}
            {/* <a id="w-node-_2f860849-106d-97cf-9d22-ef4e2a2335ee-52018772" href="https://mensbook.com/kishu-in-cryptocurrency" target="_blank" className="press-logo-item w-inline-block"><img src="images/MENSBOOK_black2x.png" loading="lazy" width={347} sizes="(max-width: 479px) 100vw, (max-width: 1919px) 22vw, 346.9921875px" alt='pics' className="press-logo" /></a> */}
          </div>
        </div>
      </section>
      <div id="follow" className="footer">
        <div className="footer-relative-wrapper">
          {/* <div className="footer-bg-imgs"><img src="images/Vector-Smart-Object2x.png" loading="lazy" width={380} sizes="(max-width: 479px) 100vw, 380px" alt='pics' className="unicorn-kishu" /></div> */}
          <div className="logo-and-social-wrapper">
            <div className="logo-white" />
            <div className="social-icons">
              <a
                href="https://t.me/SafeBreast"
                target="_blank"
                className="social-icon-item w-inline-block"
              >
                <div className="fa-social-icon"></div>
              </a>
              <a
                href="mailto:admin@safebreast.com"
                target="_blank"
                className="social-icon-item w-inline-block"
              >
                <div className="fa-social-icon">✉️</div>
              </a>
              <a
                href="https://twitter.com/SafeBreastInu"
                target="_blank"
                className="social-icon-item w-inline-block"
              >
                <div className="fa-social-icon"></div>
              </a>
              {/*<a href="https://www.instagram.com/inukishu/?hl=en" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://www.youtube.com/results?search_query=kishu+inu" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://medium.com/coinmonks/kishu-inu-token-everything-about-it-798dc0ae6a43" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://github.com/Kishu-Inu/Kishu-Inu-Contracts" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://discord.gg/kishuinucommunity" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
                    </a> */}
            </div>
            <div className="footer-buttons hero-buttons">
              <a
                href="https://dex.safebreast.com"
                target="_blank"
                className="cta-button red-button w-button"
              >
                BUY $SAFEBREAST
              </a>
              <a
                href="https://drive.google.com/file/d/169iYsSiNTQYnajnBTlyx3OPYzrtlFplK/view"
                target="_blank"
                className="chuddar-button cta-button w-button"
              >
                WHITEPAPER
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="white">
            Copyright © 2021,<strong>Encodix</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
