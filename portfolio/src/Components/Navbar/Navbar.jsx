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
		<div className="Navbar-main">
			<MDBNavbar sticky expand="lg" light bgColor="light">
				<MDBContainer>
					<MDBNavbarBrand href="#">
						<img src={logo} height="30" alt="" loading="lazy" />
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
							<MDBNavbarItem > 
								<MDBNavbarLink active aria-current="page" href="#">
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">About</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Projects</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Contact</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</div>
	);
};

export default Navbar;
