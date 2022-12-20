import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer-main text-center p-3 text-black">
			&copy; {new Date().getFullYear() + " "}
			<a className="text-white ms-1" href="" target="_blank">
				{" ChethanReddyAkkati"}
			</a>
		</div>
	);
};

export default Footer;
