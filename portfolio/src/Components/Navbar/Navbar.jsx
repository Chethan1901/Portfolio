import React from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css"
import {
	MDBNavbar,
	MDBContainer,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem,
	MDBNavbarBrand,
} from "mdb-react-ui-kit";
import logo from "../../assets/logo.png";


const Navbar = () => {
	const [showNavRight, setShowNavRight] = useState(false);
	return (
		<MDBNavbar sticky expand="lg" light bgColor="light">
			<MDBContainer>
				<MDBNavbarBrand to="/" style={{ fontWeight: "500" }}>
					Portfoliosite
				</MDBNavbarBrand>
				<MDBNavbarToggler
					type="button"
					data-target="#navbarRightAlignExample"
					aria-controls="navbarRightAlignExample"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowNavRight(!showNavRight)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>

				<MDBCollapse navbar show={showNavRight}>
					<MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
						<MDBNavbarItem className="ms-2">
							{/* <Link active aria-current="page" to="#/" smooth>
								Home
							</Link> */}
						</MDBNavbarItem>
						<MDBNavbarItem className="ms-2">
							{/* <Link to="#about" smooth>About</Link> */}
						</MDBNavbarItem>
						<MDBNavbarItem className="ms-2">
							{/* <Link to="#projects smooth">Projects</Link> */}
						</MDBNavbarItem>
						<MDBNavbarItem className="ms-2">
							{/* <Link className="MDBNavbarLink" to="#contact" smooth>Contact</Link> */}
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
};

export default Navbar;
