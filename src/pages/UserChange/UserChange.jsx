import React, { useState, useRef } from 'react';
import './UserChange.css';
import '../../basic.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import logo from '../../pics/last.gif';
// import PolarChart from '../../components/PolarChart/PolarChart';
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

const vusername = (value) => {
	if (value.length < 3 || value.length > 20) {
		return (
			<div className='tip' role='alert'>
				The username must be between 3 and 20 characters.
			</div>
		);
	}
};

const UserChange = () => {
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState('');
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

	const onChangeCity = (e) => {
		const city = e.target.value;
		setCity(city);
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
														placeholder={username}
													/>
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
														placeholder={city}
													/>
												</div>
											</div>
											<div className='center'>
												<div className=' col-sm-12 form-group'>
													<button className='btn' type='submit'>
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
