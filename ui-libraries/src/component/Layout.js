/** @format */

import React from "react";
import NavbarComponents from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
	return (
		<div>
			<React.Fragment>
				<NavbarComponents />
				<div class="columns ">
					<div class="collumn is-2">
						<Sidebar />
					</div>
					<div class="column has-background-light">
                        {/* CHILDREN MIRIP DI LARAVEL YANG YIEL SECTION */}
						<main className="mt-5">{children}</main>
					</div>
				</div>
			</React.Fragment>
		</div>
	);
};

export default Layout;
