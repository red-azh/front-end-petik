/** @format */

import React, { useState } from "react";
import "./AddMovieForm.css";

const AddMovieForm = ({onAddMovie}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = useState({
        title : "",
        year : "",
        image : "",
        genre: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie(formData)
    }

	return (
		<div className="container">
			<section className="form">
				<div className="form-left">
					<img
						src="https://picsum.photos/200/300"
						alt="gambar-form"
						className="from-image"
					/>
				</div>
				<div className="form-right">
					<h1 className="from-title">Add movie</h1>
					<form onSubmit={handleSubmit}>
						<div className="form-inputgroup">
							<label htmlFor="title" className="from-label">
								Title
							</label>
							<input
								type="text"
								name="title"
								id="title"
								className="form-input"
								onChange={handleChange}
							/>
						</div>
						<div className="form-inputgroup">
							<label htmlFor="year" className="from-label">
								Year
							</label>
							<input
								type="number"
								name="year"
								id="year"
								className="form-input"
								onChange={handleChange}
							/>
						</div>
						<div className="form-inputgroup">
							<label htmlFor="title" className="from-label">
								Genre
							</label>
							<select name="genre" id="genre" onChange={handleChange}>
								<option value="action">Action</option>
								<option value="horor">Horor</option>
								<option value="drama">Drama</option>
								<option value="romance">Romance</option>
								<option value="comedy">Comedy</option>
							</select>
						</div>
						<div className="form-inputgroup">
							<label htmlFor="poster" className="from-label">
								Image
							</label>
							<input
								type="text"
								name="poster"
								id="poster"
								className="form-input"
								onChange={handleChange}
							/>
						</div>
						<button className="form-button">Submit</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default AddMovieForm;
