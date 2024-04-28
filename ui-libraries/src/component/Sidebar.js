/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const sidebar = () => {
	return (
		<div>
			<React.Fragment>
				<aside class="menu mx-5 mt-5">
					<p class="menu-label">Administration</p>
					<ul class="menu-list">
						<li>
							<NavLink to={"/dashboard"}>Dashboard</NavLink>
						</li>
						<li>
							<NavLink to={"/table-course"}>Course</NavLink>
						</li>
						<li>
							<NavLink to={"/trainer-table"}>Trainer</NavLink>
						</li>
					</ul>
				</aside>
			</React.Fragment>
		</div>
	);
};

export default sidebar;
