/** @format */
// mangil funsgi css eksternal
import "./User.css";
const User = ({ nama, gambar, member, message }) => {
	// const headerStyle = { textAlign: "center", fontWeight: "bold" };
	// const cellStyle = { textAlign: "center" };
	// const tableStyle = {
	// 	border: "2px solid red",
	// 	width: "300px",
	// 	margin: "20px auto",
	// };
	return (
		<>
			<table className="card">
				<thead className="card-head">
					<tr>
						{/* cara pakai css inline */}
						<td colSpan={2}>{nama}</td>
					</tr>
				</thead>
				<tbody className="card-body">
					<tr>
						<td colSpan={2}>{member}</td>
					</tr>
					<tr>
						<td>
							<button onClick={message}>Message</button>
						</td>
						<td>
							<button>Subscription</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default User;
