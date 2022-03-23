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
	const user_old = new Object();
	user_old = location.state.user_data;
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [city, setCity] = useState('');
	const [photo, setPhoto] = useState('');
	const [successful, setSuccessful] = useState(false);

	const { message } = useSelector((state) => state.message);
	const dispatch = useDispatch();

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

	const handleRegister = (e) => {
		e.preventDefault();

		setSuccessful(false);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			dispatch(register(username, city, photo))
				.then(() => {
					setSuccessful(true);
				})
				.catch(() => {
					setSuccessful(false);
				});
		}
	};

	const user_data = new FormData();
	user_data.append('username', username);
	user_data.append('city', city);

	const onLinkClick = (e) => {
		e.preventDefault();
		const tokenData = JSON.parse(localStorage.getItem('user'));
		fetch(`http://127.0.0.1:5000/edit_profile`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenData.token}`,
			},
			body: user_data,
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
							<Form
								className=' signup-form col-sm-12'
								onSubmit={handleRegister}
								ref={form}
							>
								{!successful && (
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
														onChange={onChangePhoto}
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
														placeholder='Input username'
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
														placeholder='name@example.com'
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
														placeholder='Input city and country'
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
														placeholder='Input password'
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
								)}

								{message && (
									<div className='form-group'>
										<div
											className={
												successful
													? 'alert alert-success'
													: 'alert alert-danger'
											}
											role='alert'
										>
											{message}
										</div>
									</div>
								)}
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
