import React from "react";
import { useState } from "react";
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
				<MDBNavbarBrand href='#' style={{fontWeight:"500"}}>Portfoliosite</MDBNavbarBrand>
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
								<MDBNavbarLink active aria-current="page" href="#">
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem  className="ms-2">
								<MDBNavbarLink href="#">About</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem  className="ms-2">
								<MDBNavbarLink href="#">Projects</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem  className="ms-2">
								<MDBNavbarLink href="#">Contact</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
	);
};

export default Navbar;
