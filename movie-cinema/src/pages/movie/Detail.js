/** @format */

import React from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
	// gunakan use params untuk mengambil id dari url
	let { id } = useParams();
	return (
		<div>
			<h1>Detail</h1>
			<p>parameter : {id}</p>
		</div>
	);
};


export default Detail;
