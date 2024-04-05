/** @format */

import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function NavbarComponents(args) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar {...args} expand="md" className="bg-success navbar-dark">
				<NavbarBrand href="/">Jual-in</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink
								className="text-light me-2 text-decoration-none"
								to={"/"}>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className="text-light me-2 text-decoration-none"
								to={"/dashboard"}>
								Dashboard
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="text-light text-decoration-none " to={"/top"}>
								Top Rated
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className="text-light text-decoration-none mx-2"
								to={"/login"}>
								login
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className="text-light text-decoration-none "
								to={"/detail"}>
								Detail
							</NavLink>
						</NavItem>
					</Nav>
					<NavLink />
					<button className="button is-warning">Login</button>
					<NavLink />
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavbarComponents;
