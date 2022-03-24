import React, { useState, useRef } from 'react';
import './UserChange.css';
import '../../basic.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import logo from '../../pics/last.gif';
// import PolarChart from '../../components/PolarChart/PolarChart';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import { register } from '../../actions/auth';

const required = (value) => {
	if (!value) {
		return (
			<div className='tip' role='alert'>
				This field is required!
			</div>
		);
	}
};

const validEmail = (value) => {
	if (!isEmail(value)) {
		return (
			<div className='tip' role='alert'>
				This is not a valid email.
			</div>
		);
	}
};

const vusername = (value) => {
	if (value.length < 3 || value.length > 20) {
		return (
			<div className='tip' role='alert'>
				The username must be between 3 and 20 characters.
			</div>
		);
	}
};

const vpassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className='tip' role='alert'>
				The password must be between 6 and 40 characters.
			</div>
		);
	}
};

const UserChange = () => {
	const location = useLocation();
	var old_data = location.state.user;
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState(old_data.username);
	const [email, setEmail] = useState(old_data.email);
	const [password, setPassword] = useState(old_data.password);
	const [city, setCity] = useState(old_data.city);
	const [photo, setPhoto] = useState(old_data.photo);

	const onChangePhoto = (e) => {
		const photo = e.target.value;
		setPhoto(photo);
	};

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangeCity = (e) => {
		const city = e.target.value;
		setCity(city);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const onLinkClick = (e) => {
		e.preventDefault();
		const tokenData = JSON.parse(localStorage.getItem('user'));
		fetch(`http://127.0.0.1:5000/edit_profile`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenData.token}`,
			},
			body: JSON.stringify({
				data: {
					username: username,
					email: email,
					city: city,
					photo: photo,
					password: password,
				},
			}),
		}).then((response) => {
			if (!response.ok) {
				throw new Error(
					`This is an HTTP error: The status is ${response.status}`
				);
			}
			return <Navigate replace to='/MyPage' />;
		});
	};

	return (
		<div className='background standart '>
			<div className='sticky-top '>
				<Header />
			</div>
			<div className='content'>
				<img
					className='wavy'
					src={require('../../pics/purple_bottom_wave_01.png')}
					alt='wave'
				/>

				<div className='reg_wavy_content'>
					<div className='row '>
						<div className='form-container col-sm-6 '>
							<Form className=' signup-form col-sm-12' ref={form}>
								{
									<div>
										<h3 className='text-center title'>
											<strong>Change account settings</strong>
										</h3>

										<main className='col-sm-10 form-signup text-left'>
											<div className='form-row  '>
												<div className=' form-group ava col-md-6'>
													<img
														src='/Images/ava.jpg'
														className='rounded-circle'
														alt='user_avatar'
														value={photo}
													/>
													<button className='col-sm-1 btn btn-circle add_photo btn-lg '>
														<MdOutlineAddAPhoto />
													</button>
													<h6 className='warning'>
														*not required
													</h6>
												</div>
												<div className='form-group col-sm-12'>
													<label
														htmlFor='floatingInput'
														className='control-label '
													>
														Username
													</label>
													<Input
														type='username'
														className='form-control'
														name='username'
														value={username}
														onChange={onChangeUsername}
														validations={[required, vusername]}
														id='floatingInput'
													/>
												</div>

												<div className='form-group col-sm-12'>
													<label
														htmlFor='floatingInput'
														className='control-label '
													>
														Email address
													</label>
													<Input
														type='email'
														className='form-control'
														name='email'
														value={email}
														onChange={onChangeEmail}
														validations={[required, validEmail]}
														id='floatingInput'
													/>{' '}
												</div>
												<div className='form-group col-sm-12'>
													<label
														htmlFor='floatingInput'
														className='control-label '
													>
														Location
													</label>
													<input
														type='city'
														className='form-control'
														name='city'
														value={city}
														onChange={onChangeCity}
														validations={[required]}
														id='floatingInput'
													/>
												</div>
												<div className='form-group col-sm-12'>
													<label
														htmlFor='floatingPassword'
														className='control-label '
													>
														Password
													</label>
													<Input
														type='password'
														className='form-control'
														name='password'
														value={password}
														onChange={onChangePassword}
														validations={[required, vpassword]}
														id='floatingPassword'
													/>
												</div>
											</div>
											<div className='center'>
												<div className=' col-sm-12 form-group'>
													<button
														className='btn'
														type='submit'
														onClick={onLinkClick}
													>
														Save changes
													</button>
												</div>
											</div>
										</main>
									</div>
								}

								<CheckButton
									style={{ display: 'none' }}
									ref={checkBtn}
								/>
							</Form>
						</div>
						<div className='reg_logo col-sm-1 '></div>
						<div className='reg_logo col-sm-5 '>
							<img src={logo} alt='logo'></img>
						</div>
						<div className='violet_back '></div>
					</div>
				</div>
				<div className='main_wavy_bottom'>
					<img
						className='wavy'
						src={require('../../pics/white_bottom_wave_01.png')}
						alt='wave'
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default UserChange;
