import React from "react";
import "./About.css";
import { useState } from "react";
import img from "../../assets/img.png";
import Chethan_CV from "../../assets/Chethan_CV.pdf";
import { HiDownload } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { SiKnowledgebase } from "react-icons/si";
import aboutData from "./aboutData";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";

const About = () => {
  const [scrollableModal, setScrollableModal] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const skillData = aboutData.skillData;
  const eduData = aboutData.eduData;

  return (
    <>
      <div className="About-main" id="about">
      <h2 className="about-heading">About Me</h2>
        <MDBContainer>
          <MDBRow className="about-split">
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
              As a MERN stack developer, I have a passion for creating innovative and user-friendly web applications. With one and half year of experience in full-stack web development and a strong background in the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS), I have the technical expertise and creativity to deliver high-quality web solutions that meet the unique needs of my clients.
              </p>
              <p className="right-box-txt">
              I have a proven track record of designing and  creating RESTful APIs, and building user interfaces using React. I also have experience with modern front-end technologies such as HTML, CSS, and JavaScript. I am a team player, a quick learner and always looking for opportunities to improve my skills and stay up-to-date with the latest technologies.
              </p>
              
              <div className="about-btn-grp">
              <a href={Chethan_CV} download="Chethan_CV" target="_blank">
                <MDBBtn className="about-btn">
                  {"Download CV "}
                  <HiDownload className="mb-1" />
                </MDBBtn>
              </a>
              <MDBBtn onClick={toggleShow} className="about-btn ">
                {"Education "}
                <FaGraduationCap className="mb-1" />
              </MDBBtn>
              <MDBBtn
                onClick={() => setScrollableModal(!scrollableModal)}
                className="about-btn about-btn-last"
              >
                {"Skills "}
                <SiKnowledgebase className="mb-1" />
              </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Education</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBTable responsive>
                <MDBTableHead></MDBTableHead>
                <MDBTableBody>
                  {eduData.map((ele, key) => {
                    return (
                      <tr className={ele.color}>
                        <th scope="row">{ele.standard}</th>
                        <td>{ele.year}</td>
                        <td>{ele.name}</td>
                        <td>{ele.score}</td>
                      </tr>
                    );
                  })}
                </MDBTableBody>
              </MDBTable>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <MDBModal
        show={scrollableModal}
        setShow={setScrollableModal}
        tabIndex="-1"
      >
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Skills</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBTable responsive>
                <MDBTableBody>
                  {skillData.map((ele, key) => {
                    return (
                      <tr>
                        <th scope="row">
                          <span className="skill-icon me-2"> {ele.icon} </span>
                          <span className="skill-icon-name"> {ele.name} </span>
                          <br></br>
                          <MDBBadge color="info mt-2 mb-1" pill>
                            {ele.badge}
                          </MDBBadge>
                          <MDBProgress className="skill-bar">
                            <MDBProgressBar
                              striped
                              bgColor={ele.color}
                              animated
                              width={ele.barWidth}
                              valuemin={0}
                              valuemax={100}
                            />
                          </MDBProgress>
                        </th>
                      </tr>
                    );
                  })}
                </MDBTableBody>
              </MDBTable>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default About;
