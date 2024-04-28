/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const AddTrainer = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [skill, setSkill] = useState("");
	const [file, setFile] = useState("");
	const [preview, setPreview] = useState("");
	const navigate = useNavigate();

	const loadImage = (e) => {
		const image = e.target.files[0];
		setFile(image);
		setPreview(URL.createObjectURL(image));
	};

	const saveTrainer = async (e) => {
		e.preventDefault();
		try {
			await axios.post(
				"https://api.sukmax.my.id/trainer",
				{
					name: name,
					address: address,
					skill: skill,
					file: file,
				},
				// agar bisa upload file
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			// redirect ke /table-course
			navigate("/trainer/add");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Layout>
			<h2 className="title">Trainer</h2>
			<h3 className="subtitle">Add New Trainer</h3>
			<form onSubmit={saveTrainer}>
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
						<input
							className="input"
							type="text"
							placeholder="Masukkan nama trainer"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Address</label>
					<div className="control">
						<input
							className="input"
							type="text"
							onChange={(e) => setAddress(e.target.value)}
							placeholder="Masukkan address"
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Skill</label>
					<div className="control">
						<input
							className="input"
							type="text"
							onChange={(e) => setSkill(e.target.value)}
							placeholder="Masukkan skill"
						/>
					</div>
				</div>
				<div class="file">
					<label class="file-label">
						<input
							class="file-input"
							type="file"
							name="resume"
							onChange={loadImage}
						/>
						<span class="file-cta">
							<span class="file-icon">
								<i class="fas fa-upload"></i>
							</span>
							<span class="file-label"> Choose a file… </span>
						</span>
					</label>
				</div>
				{preview ? (
					<figure className="image is-128x128 mb-5">
						<img src={preview} alt="preview-img" />
					</figure>
				) : (
					""
				)}
				<div class="field is-grouped mt-5">
					<div class="control">
						<button type="submit" class="button is-link">
							Submit
						</button>
					</div>
					<div class="control">
						<button class="button is-link is-light">Cancel</button>
					</div>
				</div>
			</form>
		</Layout>
	);
};

export default AddTrainer;
