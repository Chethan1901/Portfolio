import React from "react";
import "./Contact.css";
import { useEffect } from "react";
import { TbPhoneCall } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
	useEffect(()=>{
		window.scroll(0,0)
	},[])
	return (
		<div className="contact-main" id="contact">
			<h1 className="contact-heading">Get in touch</h1>
			<p className="contact-txt">
				Shoot me a message via any of the links below!
			</p>
			<div className="contact-icon">
				<a href="whatsapp://send?text=Hello Chethan!&phone=+917995489094">
					<ImWhatsapp className="icony" />
				</a>
				<a href="mailto:chethanreddy.akkati123@gmail.com">
					<SiGmail className="icony" />
				</a>
				<a href="tel:+91 9392120418">
					<TbPhoneCall className="icony" />
				</a>
			</div>
		</div>
	);
};

export default Contact;
