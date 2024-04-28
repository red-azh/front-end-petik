/** @format */
// ini pakai react bootsrap

import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function TableCourse() {
	const [courses, setCourses] = useState([]);
	const [currentPage, setCurrentPage] = useState();
	const [coursesPerPage] = useState(5);

	useEffect(() => {
		getCourses();
	}, []);

	const getCourses = async () => {
		const response = await axios.get("https://api.sukmax.my.id/course");
		setCourses(response.data);
	};

	// const LastPage = currentPage * coursesPerPage;
	// const FirstPage = LastPage - coursesPerPage;
	// const currentCourse = courses.slice(FirstCourse, LastCourse);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const deleteCourse = async (id) => {
		await axios.delete(`https://api.sukmax.my.id/course/${id}`);
		getCourses();
	};

	return (
		<Layout>
			<h2 className="title">Course</h2>
			<h3 className="subtitle">List of Course</h3>
			<Link to={"/Course/add"} className="button is-primary my-2">
				Add New
			</Link>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>No</th>
						<th>Name</th>
						<th>Descrition</th>
						<th>Image</th>
						<th></th>
					</tr>
				</thead>
				{courses.map((data) => {
					return (
						<tbody>
							<tr>
								<td></td>
								<td>{data.name}</td>
								<td>{data.desc}</td>
								<td>
									<img src={data.url} alt="foto" width={100} height={100} />
								</td>
								<td>
									<Link
										to={`/course/edit/${data.id}`}
										className="button is-primary me-2">
										Edit
									</Link>
									<button
										onClick={() => {
											if (window.confirm("apakah pengen hapus?")) {
												deleteCourse();
											} else {
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

			<Pagination>
				<PaginationItem>
					<PaginationLink first onClick={() => paginate(1)} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous onClick={() => paginate(currentPage - 1)} />
				</PaginationItem>
				{[...Array(Math.ceil(courses.length / coursesPerPage)).keys()].map(
					(number) => (
						<PaginationItem
							key={number + 1}
							active={number + 1 === currentPage}>
							<PaginationLink onClick={() => paginate(number + 1)}>
								{number + 1}
							</PaginationLink>
						</PaginationItem>
					)
				)}
				<PaginationItem>
					<PaginationLink next onClick={() => paginate(currentPage + 1)} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						last
						onClick={() => paginate(Math.ceil(courses.length / coursesPerPage))}
					/>
				</PaginationItem>
			</Pagination>
		</Layout>
	);
}

export default TableCourse;
