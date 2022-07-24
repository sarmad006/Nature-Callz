import React from "react";
import "./HomeContent.css";
const HomeContent = () => {
  return (
    <div id="homeContainer">
      <section className="section1">
        <div className="header">
          <h5 className="header1">
            SEARCH TODAY AND CONTRIBUTE TO MOTHER EARTH.
          </h5>
          <h1 className="header2">
            Searching &amp; Contributing <br />
            with just one click
          </h1>
          <h5 className="header3">Keep track of your impact.</h5>
        </div>
      </section>
      <section
        className="section2 video-section"
        style={{ position: "relative" }}
      >
        <div className="row relative">
          <div
            className="col-lg-6 relative"
            style={{ textAlign: "center", position: "relative" }}
          >
            <div
              style={{
                width: 240,
                height: 240,
                backgroundColor: "transparent",
                border: "1px solid green",
                borderRadius: 900,
                position: "absolute",
                left: -240,
                bottom: -100,
              }}
            ></div>
            <img className="leftimg" src="./img/Layer 1 copy.png" />
            <h1 className="header2">
              Your search convert <br />
              to nature
            </h1>
            <h5 className="header4">
              Search today and contribute to mother earth.
            </h5>
            <button className="btn-green">
              Add NautureCallz To Chrome - It’s Free
            </button>
          </div>
          <div className="col-lg-6 right-col">
            <div className="video">
              <video loop controls muted width={"100%"} height={"100%"}>
                <source src="/sampleVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <h5 className="header1">WHY CHOOSE US?</h5>
        <h1 className="header2 mb-5">
          Why you should choose
          <br />
          NatureCallz
        </h1>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section3-points">
                <h5 className="header1 text1">01</h5>
                <h5 className="header3 choose-heading">
                  Search for good cause
                </h5>
                <p className="text">
                  NatureCallz was created in order to make your
                  <br />
                  serach <span>valuable</span> not only for your own needs but
                  <br />
                  also for <span>planet earth</span>.
                </p>
              </div>
          </div>
          <div className="col-lg-6">
            <div className="right-column">
              <img className="right1img" src="/img/1.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section3-points">
                <h5 className="header1 text1">02</h5>
                <h5 className="header3 choose-heading">
                  Benefit for planet earth
                </h5>
                <p className="text">
                  {" "}
                  By searching with NatureCallz your serach will be <br />
                  translated to do <span>good for our planet.</span>
                </p>
              </div>
          </div>
          <div className="col-lg-6">
            <div className="right-column">
              <img className="right1img" src="/img/2.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section3-points">
              <h5 className="header1 text1">03</h5>
                <h5 className="header3 choose-heading">Search revenues</h5>
                <p className="text">
                  {" "}
                  Some of the revenues will be shared wit <br />
                  oragnizatios related to the cause of preserving our
                  <br />
                  <span>green</span> and <span>clean.</span>
                </p>
              </div>
          </div>
          <div className="col-lg-6">
            <div className="right-column">
              <img className="right1img" src="/img/3.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="section4 ">
        <div className="text3">
          <h5 className="header1 text4">
            WE DONT'T COLLECT ANY DATA ON OUR USERS.
          </h5>
          <h1 className="header2 text4">
            Your privacy is in our <br />
            first priority
          </h1>
          <h5 className="header3 text4">
            Curabitur libero lacus,sodales vel molestie ac,laoreet ut augue.
          </h5>
        </div>
        <div className="half-circle">
          {/* <img className="imglock" src="./img/lock.png" /> */}
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
