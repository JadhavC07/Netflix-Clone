import React from "react";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import NavBar from "./NavBar";
import backImg from "../../assets/Images/Netflix-background.jpg";
import "font-awesome/css/font-awesome.min.css";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main-page">
      <div className="sections">
        <div className="section-1">
          <div className="back-img">
            <img src={backImg} alt="heelo" />
          </div>
          <NavBar />
          <div className="section-2">
            <Section2 />
          </div>
        </div>
        <div className="border-line"></div>
        <div className="section-3">
          <Section3 />
        </div>
        <div className="border-line-2"></div>
        <div className="section-4">
          <Section4 />
        </div>
        <div className="border-line-3"></div>
        <div className="section-5">
          <Section5 />
        </div>
        <div className="border-line-4"></div>
        <div className="section-6">
          <Section6 />
        </div>
        <div className="border-line-5"></div>
        <div className="section-7">
          <Section7 />
        </div>
        <div className="border-line-6"></div>
        <div className="section-8">
          <Section8 />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
