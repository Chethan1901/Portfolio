import React from "react";
import "./About.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import img from "../../assets/img.png";
import CV from "../../assets/CV.pdf";
import { HiDownload } from "react-icons/hi";

const About = () => {
	return (
		<div className="About-main" id="about">
			<MDBContainer >
				<MDBRow>
					<MDBCol className="About-left" size="5">
						<div className="left-img-div">
							<img
								src={img}
								alt=""
								style={{ height: "100%", width: "100%", objectFit: "cover" }}
							/>
						</div>
					</MDBCol>
					<MDBCol className="About-right" size="7">
						<h2>About Me</h2>
						<div className="right-box-main">
							<div className="right-box">
								<HiDownload className="icone" />
								<p className="txt-1">Experience</p>
								<p className="txt">1+ Year Working</p>
							</div>
							<div className="right-box">
								<HiDownload className="icone" />
								<p className="txt-1">Projects</p>
								<p className="txt">10+ Completed</p>
							</div>
							<div className="right-box">
								<HiDownload className="icone" />
								<p className="txt-1">Certification</p>
								<p className="txt">3+ Achieved</p>
							</div>
						</div>
						<p className="right-box-txt">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
							reprehenderit molestiae atque voluptatum natus ex explicabo nemo
							expedita, possimus corporis doloremque laudantium voluptatem?
							Saepe, nostrum magni! Voluptatibus quam doloribus vero.
						</p>
						<p className="right-box-txt">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
							reprehenderit molestiae atque voluptatum natus ex explicabo nemo
							expedita, possimus corporis doloremque laudantium voluptatem?
							Saepe, nostrum magni! Voluptatibus quam doloribus vero.
						</p>
						<a  href={CV} download="Chethan_CV" target='_blank'>
							<MDBBtn className="download">
								{"Download CV "}
								<HiDownload />
							</MDBBtn>
						</a>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};

export default About;
