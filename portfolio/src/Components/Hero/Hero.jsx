import React from "react";
import "./Hero.css";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { SiWakatime } from "react-icons/si";

const Hero = () => {
	return (
		<div className="Hero-main">
			<div class=" container pt-5">
				<div class="banner-image ">
					<div class="container py-5">
						<div class="row py-5">
							<div class="col-lg-6 col-md-12 mr-auto pt-5">
								<h1 class="display-4 pb-4 hi">Hi, Hi, I'm Chethan.</h1>
								<p class="text-muted lead">
									A freelance Web developer from London. I convert custom web
									designs to bootstrap templates.
								</p>
								<p class="text-muted lead pb-5">
									I make YouTube videos and write Blog.
								</p>
								<a href="#" class="btn hero-btn">
									I'M AVAILABLE
								</a>
								<div class="social-icons mt-5">
									{/* <a href="#"><i class="lni lni-facebook-filled"></i></a>
        <a href="#"><i class="lni lni-twitter-filled"></i></a>
        <a href="#"><i class="lni lni-instagram-filled"></i></a>
        <a href="#"><i class="lni lni-github-original"></i></a> */}
									<FaLinkedin className="icones" />
                                    <BsGithub className="icones" />
									<FiInstagram className="icones" />
									<SiWakatime className="icones" />
                                    <BsTwitter className="icones" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
