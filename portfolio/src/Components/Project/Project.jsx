import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mav from "../../assets/p.png"
import FC from "../../assets/p2.png"
import TH from "../../assets/p4.png"
import Base64 from "../../assets/p3.png"


import {
	MDBContainer,
	MDBBtn,
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBCardFooter,
} from "mdb-react-ui-kit";
import "./Project.css";

const Project = () => {
	// let EventsData = EventData.upcomingEvents;

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
			<div className="Project-main">
				<h2 className="project-heading">Recent Projects</h2>
				<p className="project-txt">
					Check out some projects I recently worked on..
				</p>

				<div className="eventCard">
					<Slider {...settings}>
						<MDBCol>
							<MDBCard style={{ height: "60vh" }}>
								<MDBCardImage
									src={mav}
									alt="..."
									position="top"
								/>
								<MDBCardBody>
									<MDBCardTitle>Project MAV</MDBCardTitle>
									<MDBCardText>
										A custom CMS and Admin Dashboard where 100k patients,
										volunteers data is maintained for different camps all over
										India.
									</MDBCardText>
								</MDBCardBody>
								<MDBCardFooter>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn"
										href="http://mahilaarogyavikas.org/"
									>
										Live
									</MDBBtn>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn ms-2"
										href="https://github.com/Chethan1901/MAV_DEPLOY"
									>
										Code
									</MDBBtn>
								</MDBCardFooter>
							</MDBCard>
						</MDBCol>

						<MDBCol>
							<MDBCard style={{ height: "60vh" }}>
								<MDBCardImage
									src="https:mdbootstrap.com/img/new/standard/city/042.webp"
									alt="..."
									position="top"
								/>
								<MDBCardBody>
									<MDBCardTitle>Tasky</MDBCardTitle>
									<MDBCardText>
										Tasky is a full-fledged Web App that reminds you about your
										task via emails and mobile messaging build on MERN Stack.
									</MDBCardText>
								</MDBCardBody>
								<MDBCardFooter>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn"
									>
										Live
									</MDBBtn>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn ms-2"
									>
										Code
									</MDBBtn>
								</MDBCardFooter>
							</MDBCard>
						</MDBCol>
						<MDBCol>
							<MDBCard style={{ height: "60vh" }}>
								<MDBCardImage
									src="https:mdbootstrap.com/img/new/standard/city/043.webp"
									alt="..."
									position="top"
								/>
								<MDBCardBody>
									<MDBCardTitle>CFI Leaderboard</MDBCardTitle>
									<MDBCardText>
										A Dynamic Leaderboard which fetches data from the google
										sheets using Sheets API and display the Rankings.
									</MDBCardText>
								</MDBCardBody>
								<MDBCardFooter>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn"
									>
										Live
									</MDBBtn>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn ms-2"
									>
										Code
									</MDBBtn>
								</MDBCardFooter>
							</MDBCard>
						</MDBCol>
						<MDBCol>
							<MDBCard style={{ height: "60vh" }}>
								<MDBCardImage
									src={TH}
									alt="..."
									position="top"
								/>
								<MDBCardBody>
									<MDBCardTitle>Treasure Hunt Game</MDBCardTitle>
									<MDBCardText>
										A game where the user tries to find the treasure. built
										using JS DOM..
									</MDBCardText>
								</MDBCardBody>
								<MDBCardFooter>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn"
										href="https://projects-qtl3.vercel.app/"
									>
										Live
									</MDBBtn>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn ms-2"
										href="https://github.com/Chethan1901/Projects/tree/main/GAME"
									>
										Code
									</MDBBtn>
								</MDBCardFooter>
							</MDBCard>
						</MDBCol>
						<MDBCol>
							<MDBCard style={{ height: "60vh" }}>
								<MDBCardImage
									src={Base64}
									alt="..."
									position="top"
								/>
								<MDBCardBody>
									<MDBCardTitle>Base64 Converter</MDBCardTitle>
									<MDBCardText>
										Do you have to deal with Base64 format? Then this site is
										perfect for you! Use our super handy online tool to encode
										or decode your data.
									</MDBCardText>
								</MDBCardBody>
								<MDBCardFooter>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn"
										href="https://projects-eight-brown.vercel.app/"
									>
										Live
									</MDBBtn>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn ms-2"
										href="https://github.com/Chethan1901/Projects/tree/main/BASE64"
									>

										Code
									</MDBBtn>
								</MDBCardFooter>
							</MDBCard>
						</MDBCol>
						<MDBCol>
							<MDBCard style={{ height: "60vh" }}>
								<MDBCardImage
									src={FC}
									alt="..."
									position="top"
								/>
								<MDBCardBody>
									<MDBCardTitle>Font Convertor</MDBCardTitle>
									<MDBCardText>
										A Font Convertor built using HTML, CSS, JS DOM. It converts
										the style of given input string.
									</MDBCardText>
								</MDBCardBody>
								<MDBCardFooter>
									<MDBBtn
										href="https://projects-scdx.vercel.app/"
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn"
									>
										Live
									</MDBBtn>
									<MDBBtn
										style={{ backgroundColor: "#007bff" }}
										className="project-card-btn ms-2"
										href="https://github.com/Chethan1901/Projects/tree/main/FC"
									>
										Code
									</MDBBtn>
								</MDBCardFooter>
							</MDBCard>
						</MDBCol>
						{/* {EventsData.map((item) => (
							<div className="card flee">
								<div className="card-top">
									<img className="event-img"
										src={`/${item.image.data}`}
										alt={item.Headline}
										onError={handleErrorImage}
									/>
								</div>
								<div className="card-bottom event-txt">
									<p className="event-title">{item.Headline}</p>
									<p className="event-date">{item.date}</p>
									<p className="event-content">{item.Content}</p>
								</div>
							</div>
						))} */}
					</Slider>
				</div>
			</div>
		</>
	);
};

export default Project;

// import React from "react";
// import "./Project.css";
// import {
// 	MDBContainer,
// 	MDBBtn,
// 	MDBCard,
// 	MDBCardImage,
// 	MDBCardBody,
// 	MDBCardTitle,
// 	MDBCardText,
// 	MDBRow,
// 	MDBCol,
// 	MDBCardFooter,
// } from "mdb-react-ui-kit";

// const Project = () => {
// 	return (
// 		<div className="Project-main">
// 			<h2 className="project-heading">Recent Projects</h2>
// 			<p className="project-txt">
// 				Check out some projects I recently worked on..
// 			</p>
// 			<MDBContainer>
// 				<div className="project-btn-grp">
// 					<MDBBtn color="light" rippleColor='dark'>
// 						All
// 					</MDBBtn>
// 					<MDBBtn color="light" rippleColor='dark'>
// 						Frontend
// 					</MDBBtn>
// 					<MDBBtn color="light" rippleColor='dark'>
// 						Backend
// 					</MDBBtn>
// 					<MDBBtn color="light" rippleColor='dark'>
// 						UI/ux
// 					</MDBBtn>
// 				</div>

// 				<MDBRow className="row-cols-1 row-cols-md-4 g-4">
// 					<MDBCol>
// 						<MDBCard className="h-100">
// 							<MDBCardImage
// 								src="https://mdbootstrap.com/img/new/standard/city/041.webp"
// 								alt="..."
// 								position="top"
// 							/>
// 							<MDBCardBody>
// 								<MDBCardTitle>Card title</MDBCardTitle>
// 								<MDBCardText>
// 									This is a longer card with supporting text below as a natural
// 									lead-in to additional content. This content is a little bit
// 									longer.
// 								</MDBCardText>
// 							</MDBCardBody>
// 							<MDBCardFooter>
// 								<MDBBtn className="project-card-btn">Live</MDBBtn>
//                                 <MDBBtn className="project-card-btn ms-2">Code</MDBBtn>
// 							</MDBCardFooter>
// 						</MDBCard>

// 					</MDBCol>

// 					<MDBCol>
// 						<MDBCard className="h-100 ">
// 							<MDBCardImage
// 								src="https://mdbootstrap.com/img/new/standard/city/042.webp"
// 								alt="..."
// 								position="top"
// 							/>
// 							<MDBCardBody>
// 								<MDBCardTitle>Card title</MDBCardTitle>
// 								<MDBCardText>This is a short card.</MDBCardText>
// 							</MDBCardBody>
// 							<MDBCardFooter>
// 								<MDBBtn className="project-card-btn">Live</MDBBtn>
//                                 <MDBBtn className="project-card-btn ms-2">Code</MDBBtn>
// 							</MDBCardFooter>
// 						</MDBCard>
// 					</MDBCol>
// 					<MDBCol>
// 						<MDBCard className="h-100 ">
// 							<MDBCardImage
// 								src="https://mdbootstrap.com/img/new/standard/city/043.webp"
// 								alt="..."
// 								position="top"
// 							/>
// 							<MDBCardBody>
// 								<MDBCardTitle>Card title</MDBCardTitle>
// 								<MDBCardText>
// 									This is a longer card with supporting text below as a natural
// 									lead-in to additional content.
// 								</MDBCardText>
// 							</MDBCardBody>
// 							<MDBCardFooter>
// 								<MDBBtn className="project-card-btn">Live</MDBBtn>
//                                 <MDBBtn className="project-card-btn ms-2">Code</MDBBtn>
// 							</MDBCardFooter>
// 						</MDBCard>
// 					</MDBCol>
// 					<MDBCol>
// 						<MDBCard className="h-100 ">
// 							<MDBCardImage
// 								src="https://mdbootstrap.com/img/new/standard/city/044.webp"
// 								alt="..."
// 								position="top"
// 							/>
// 							<MDBCardBody>
// 								<MDBCardTitle>Card title</MDBCardTitle>
// 								<MDBCardText>
// 									This is a longer card with supporting text below as a natural
// 									lead-in to additional content. This content is a little bit
// 									longer.
// 								</MDBCardText>
// 							</MDBCardBody>
// 							<MDBCardFooter>
// 								<MDBBtn className="project-card-btn">Live</MDBBtn>
//                                 <MDBBtn className="project-card-btn ms-2">Code</MDBBtn>
// 							</MDBCardFooter>
// 						</MDBCard>
// 					</MDBCol>
// 				</MDBRow>
// 			</MDBContainer>
// 		</div>
// 	);
// };

// export default Project;
