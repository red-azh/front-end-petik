/** @format */

import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout";

function TableTrainer() {
	const [trainer, setTrainer] = useState([]);

	useEffect(() => {
		getTrainer();
	}, []);

	const getTrainer = async () => {
		const response = await axios.get("https://api.sukmax.my.id/trainer");
		setTrainer(response.data);
	};
	const deleteTrainer = async (id) => {
		try {
			await axios.delete(`https://api.sukmax.my.id/trainer/${id}`);
			getTrainer(); 
		} catch (error) {
			console.error("Error deleting trainer:", error);
			
		}
	};

	return (
		<Layout>
			<h2 className="title">Trainer</h2>
			<h3 className="subtitle">List of Trainer</h3>
			<Link to={"/trainer/add"} className="button is-primary my-2">
				Add New
			</Link>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>No</th>
						<th>Name</th>
						<th>Address</th>
						<th>Skill</th>
						<th>Image</th>
						<th></th>
					</tr>
				</thead>
				{trainer.map((data, index) => {
					return (
						<tbody key={data.id}>
							<tr>
								<td>{index + 1}</td>
								<td>{data.name}</td>
								<td>{data.address}</td>
								<td>{data.skill}</td>
								<td>
									<img src={data.url} alt="foto" width={100} />
								</td>
								<td>
									<Link
										to={`/trainer/edit/${data.id}`}
										className="button is-primary me-2">
										Edit
									</Link>
									<button
										onClick={() => {
											if (window.confirm("apakah pengen hapus?")) {
												deleteTrainer();
											} else {
												console.log('gagal hapus');
											}
										}}
										className="button is-warning ">
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					);
				})}
			</Table>
		</Layout>
	);
}

export default TableTrainer;
