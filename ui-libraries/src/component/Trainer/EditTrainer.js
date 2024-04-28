/** @format */

import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const EditTrainer = () => {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [skill, setSkill] = useState("");
	const [file, setFile] = useState("");
	const [image, setImage] = useState("");
	const navigate = useNavigate();

	const loadImage = (e) => {
		const image = e.target.files[0];
		setFile(image);
		setFile(URL.createObjectURL(image));
	};

	const getTrainer = async () => {
		const response = await axios.get(`https://api.sukmax.my.id/trainer/${id}`);
		setName(response.data.name);
		setAddress(response.data.address);
		setSkill(response.data.skill);
		setFile(response.data.url);
	};

	useEffect(() => {
		getTrainer();
	}, []);

	const updateTrainer = async (e) => {
		e.preventDefault();
		try {
			await axios.put(
				` https://api.sukmax.my.id/trainer/${id}`,
				{
					name: name,
					address: address,
					skill: skill,
					url: file,
					image: image,
				},
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			navigate("/trainer-table");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout>
			<h2 className="title">Trainer</h2>
			<h3 className="subtitle">Update Trainer</h3>
			<form onSubmit={updateTrainer}>
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
						<input
							className="input"
							type="text"
							value={name}
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
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							placeholder="Masukkan Address"
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Skill</label>
					<div className="control">
						<input
							className="input"
							type="text"
							value={skill}
							onChange={(e) => setSkill(e.target.value)}
							placeholder="Masukkan Skill"
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
				{file ? (
					<figure className="image is-128x128 mb-5">
						<img src={file} alt="preview-img" />
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
						<Link to={"/table-trainer"}>
							<button class="button is-link is-light">Cancel</button>
						</Link>
					</div>
				</div>
			</form>
		</Layout>
	);
};

export default EditTrainer;
