import React from "react";
import "./Contact.css";
import { TbPhoneCall } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";


const Contact = () => {
	return (
		<div className="contact-main">
			<h1 className="contact-heading">Get in touch</h1>
			<p className="contact-txt">
				Shoot me a message via any of the links below!
			</p>
			<div className="contact-icon">
				<ImWhatsapp className="icony"/>
				<SiGmail className="icony"/>
				<TbPhoneCall className="icony"/>
			</div>
		</div>
	);
};

export default Contact;