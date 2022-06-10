import React, { useState, useRef } from 'react';
import './Login.css';
import '../../basic.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import logo from '../../pics/last.gif';
// import PolarChart from '../../components/PolarChart/PolarChart';
// import { MdOutlineAddAPhoto } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { login } from '../../actions/auth';
import { Link } from 'react-router-dom';

const required = (value) => {
	if (!value) {
		return (
			<div className='tip' role='alert'>
				This field is required!
			</div>
		);
	}
};

const Login = (props) => {
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	// const [successful, setSuccessful] = useState(false);

	const { isLoggedIn } = useSelector((state) => state.auth);
	const { message } = useSelector((state) => state.message);

	const dispatch = useDispatch();

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			dispatch(login(username, password))
				.then(() => {
					// eslint-disable-next-line react/prop-types
					props.history.push('/GenreChoose');
					window.location.reload();
					return <Navigate replace to='/GenreChoose' />;
				})
				.catch(() => {
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	};

	// if (isLoggedIn) {
	// 	v
	// }

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
						<div className='reg_logo col-sm-6 '>
							<img src={logo} alt='logo'></img>
						</div>

						<div className='form-container col-sm-6 '>
							<Form
								className=' signup-form col-sm-12'
								// onSubmit={handleLogin}
								ref={form}
							>
								<h3 className='text-center title'>
									<strong>Enter</strong> into an account
								</h3>
								<main className='col-sm-10 form-signup text-left'>
									<div className='form-row  '>
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
												validations={[required]}
												id='floatingInput'
												placeholder='Input username'
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
												validations={[required]}
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
												onClick={handleLogin}
												disabled={loading}
											>
												<Link to='/Genrechoose'>Log In</Link>
											</button>
										</div>
										<p className='already'>
											Don&#39;t have an account?{' '}
											<a href='/Signup'> Sign up</a>
										</p>
									</div>
								</main>
								{message && (
									<div className='form-group'>
										<div className='tip' role='alert'>
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

export default Login;
