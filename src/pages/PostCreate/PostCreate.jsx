import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import './PostCreate.css';
import '../../basic.css';
import Dropzone from 'react-dropzone-uploader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const args = {
	user_avatar: require('../../pics/singer.jpg'),
	username: 'username',
};

const PostCreate = () => {
	const [genresopt, setGenresopt] = useState([]);
	const [title, setTitle] = useState();
	const [genre_id, setGenre] = useState('');
	const [text, setText] = useState('');
	const [successful, setSuccessful] = useState(false);

	const { message } = useSelector((state) => state.message);

	const dispatch = useDispatch();

	const getUploadParams = () => {
		return { url: 'http://127.0.0.1:5000/post' };
	};

	const handleChangeStatus = ({ meta }, status) => {
		console.log(status, meta);
	};

	const handleSubmit = (files, allFiles) => {
		console.log(files.map((f) => f.meta));
		allFiles.forEach((f) => f.remove());
	};

	const setGenresData = async () => {
		const response = await fetch(`http://127.0.0.1:5000/genres`);
		const genres = response.json();

		const genresopt = genres.map((genre, index) => {
			return <option key={index}>{genre}</option>;
		});
		setGenresopt(genresopt);
	};

	const onChangeTitle = (e) => {
		const title = e.target.value;
		setTitle(title);
	};

	const onChangeGenre = (e) => {
		const genre_id = e.target.value;
		setGenre(genre_id);
	};

	const onChangeText = (e) => {
		const text = e.target.value;
		setText(text);
	};

	const createPost = async (title, text, genre_id) => {
		const photo = null;
		const body = JSON.stringify({ title, text, genre_id, photo });
		const token = localStorage.getItem('token');
		fetch(`http://127.0.0.1:5000/wall`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			body,
		});
	};

	const savePost = async (e) => {
		e.preventDefault();

		dispatch(
			createPost(title, text, genre_id)
				.then(() => {
					setSuccessful(true);
				})
				.catch(() => {
					setSuccessful(false);
				})
		);
	};

	useEffect(() => {
		setGenresData();
	}, []);

	return (
		<div>
			<div className='sticky-top '>
				<Header />
			</div>
			<div className='yellow_top_wave'>
				<form className='post_create_form' onSubmit={savePost}>
					<div className='flexy'>
						<img
							className='post_user_logo'
							src={args.user_avatar}
							alt='post_author_avatar'
						/>
						<p className='post_username'>{args.username}</p>
						<button className='post_it'>Post it!</button>
					</div>
					<div className='post_create'>
						<label htmlFor='title'>Post title:</label>
						<br />
						<input
							type='text'
							name='title'
							value={title}
							onChange={onChangeTitle}
							required
						/>
						<br />
						<label htmlFor='text'>Post text:</label>
						<br />
						<textarea
							className='post_create_text'
							type='text'
							name='text'
							value={text}
							onChange={onChangeText}
							required
						/>
						<br />
						<label htmlFor='genre'>Choose genre:</label>
						<br />
						<select
							className='genre-select'
							name='genre'
							value={genre_id}
							onChange={onChangeGenre}
							required
						>
							{genresopt}
						</select>
						<div className='select-arrow'></div>
						<br />
						<Dropzone
							className='dropzone'
							getUploadParams={getUploadParams}
							onChangeStatus={handleChangeStatus}
							onSubmit={handleSubmit}
							accept='image/*'
							inputContent={'Choose images'}
						/>
					</div>
					{successful && <Navigate replace to='/PostDemonstrate' />}
					{message && (
						<div className='form-group'>
							<div className={!successful && 'tip'} role='alert'>
								{message}
							</div>
						</div>
					)}
				</form>
			</div>
			<div className='yellow_bottom_wave'>
				<img
					className='wavy'
					src={require('../../pics/white_bottom_wave_01.png')}
					alt='wave'
				/>
			</div>

			<Footer />
		</div>
	);
};

export default PostCreate;
