import React, { useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./data";

import {
	MDBBtn,
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCol,
	MDBCardFooter,
} from "mdb-react-ui-kit";
import "./Project.css";

const Project = () => {

	const projectData = Data;

	const [defaultImage, setDefaultImage] = useState({});
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const handleErrorImage = (data) => {
		setDefaultImage((prev) => ({
			...prev,
			[data.target.alt]: data.target.alt,
		}));
	};

	return (
		<>
			<div className="Project-main " id="projects">
				<h2 className="project-heading">Recent Projects</h2>
				<p className="project-txt">
					Check out some projects I recently worked on..
				</p>

				<div className="eventCard">
					<Slider {...settings}>
						{projectData.map((ele) => {
							return (
							<MDBCol>
								<MDBCard style={{ height: "60vh" }}>
									<MDBCardImage src={ele.img} alt="..." position="top" />
									<MDBCardBody>
										<MDBCardTitle>{ele.title}</MDBCardTitle>
										<MDBCardText>
											{ele.description}
										</MDBCardText>
									</MDBCardBody>
									<MDBCardFooter>
										<MDBBtn
											style={{ backgroundColor: "#007bff" }}
											className="project-card-btn"
											href={ele.liveLink}
										>
											Live
										</MDBBtn>
										<MDBBtn
											style={{ backgroundColor: "#007bff" }}
											className="project-card-btn ms-2"
											href={ele.codeLink}
										>
											Code
										</MDBBtn>
									</MDBCardFooter>
								</MDBCard>
							</MDBCol>)
						})}
					</Slider>
				</div>
			</div>
		</>
	);
};

export default Project;
