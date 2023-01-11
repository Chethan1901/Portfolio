import React from "react";
import "./Hero.css";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { SiWakatime, SiLeetcode } from "react-icons/si";

const Hero = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="Hero-main" id="/">
      <div class=" container pt-5">
        <div class="banner-image ">
          <div class="container py-5">
            <div class="row py-5">
              <div class="col-lg-6 col-md-12 mr-auto pt-5 cont">
                <h1 class="display-4 pb-4 hi">Hi, Hi, I'm Chethan.</h1>
                <p class="text-muted lead">
                  A full-stack developer. I built fullstack Web applicatin using
                  MERN.
                </p>
                <p class="text-muted lead pb-5">
                  I make Web designs and write Blog.
                </p>
                <a
                  href="mailto:chethanreddy.akkati123@gmail.com"
                  class="btn hero-btn"
                >
                  I'M AVAILABLE
                </a>
                <div class="social-icons mt-5">
                  {/* <a href="#"><i class="lni lni-facebook-filled"></i></a>
        <a href="#"><i class="lni lni-twitter-filled"></i></a>
        <a href="#"><i class="lni lni-instagram-filled"></i></a>
        <a href="#"><i class="lni lni-github-original"></i></a> */}
                  <a href="https://www.linkedin.com/in/chethanreddyakkati/">
                    <FaLinkedin className="icones" />
                  </a>
                  <a href="https://github.com/Chethan1901">
                    <BsGithub className="icones" href="" />
                  </a>
                  <a href="https://www.instagram.com/akkatichethanreddy/">
                    <FiInstagram className="icones" href="" />
                  </a>
                  <a href="https://wakatime.com/@Chethan1901">
                    <SiWakatime className="icones" href="" />
                  </a>
                  <a href="https://leetcode.com/Chethan_/">
                    <SiLeetcode className="icones" href="" />
                  </a>
                  {/* <BsTwitter className="icones" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
};

export default Hero;
