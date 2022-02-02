import React from 'react';
import './registration.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Polar_Chart from '../../components/polar_chart/polar_chart';
import { MdOutlineAddAPhoto } from '../../../node_modules/react-icons/md';
import logo from '../../pics/last.gif';

const Registration = () => {
	return (
		<div>
			<div className='sticky-top '>
				<Header />
			</div>
			<div>
				<img
					className='wavy'
					src='/images/Violet_top_left_wave_1.png'
					alt='wave'
				/>
			</div>
			<div className='col-md-12 violet_back text-center'>
				<h1 className='present'>MusCon</h1>
			</div>
			<body className='col-md-12 pt-10 violet_back body h-100 w-100'>
				<div className='media logo mr-1 col-md-5 '>
					<img src={logo} className='img-fluid  link-dark' alt='logo' />
				</div>
				<div className='form-container ml-1 col-md-7 '>
					<form className=' signup-form col-md-11'>
						<h3 className='text-center title'>
							<strong>Create</strong> an account
						</h3>
						<main className='col-md-10 form-signup text-left'>
							<div className='form-row  '>
								<div className='form-group col-md-12'>
									<img
										src='/images/ava.jpg'
										className='col-md-6 img-fluid rounded-circle  link-dark w-50'
										alt='user_avatar'
									/>
									<button
										type='submit'
										className='btn add_photo row col-md-5 text-capitalize btn w-100 '
									>
										<MdOutlineAddAPhoto /> Add best photo{' '}
									</button>
								</div>
								<div className='form-group col-md-12'>
									<label
										htmlFor='floatingInput'
										className='control-label '
									>
										Username
									</label>
									<input
										type='username'
										className='form-control'
										id='floatingInput'
										placeholder='Input username'
									/>
								</div>

								<div className='form-group col-md-12'>
									<label
										htmlFor='floatingInput'
										className='control-label '
									>
										Email address
									</label>
									<input
										type='email'
										className='form-control'
										id='floatingInput'
										placeholder='name@example.com'
									/>
								</div>

								<div className='form-group col-md-12'>
									<label
										htmlFor='floatingInput'
										className='control-label '
									>
										Location
									</label>
									<input
										type='city'
										className='form-control'
										id='floatingInput'
										placeholder='Input city and country'
									/>
								</div>

								<div className='form-group col-md-12'>
									<label
										htmlFor='floatingPassword'
										className='control-label '
									>
										Password
									</label>
									<input
										type='password'
										className='form-control'
										id='floatingPassword'
										placeholder='Input password'
									/>
								</div>

								<div className='text-left form-check col-md-6'>
									<label className='form-check-label'>
										<input
											type='checkbox'
											className='form-check-input'
										/>
										I agree to the license terms.
									</label>
								</div>
							</div>

							<div className='col-md-6 form-group'>
								<button className='btn' type='submit'>
									Sign Up
								</button>
							</div>

							<p className='already'>
								You already have an account?{' '}
								<a href='/login'> Login here.</a>
							</p>
						</main>
					</form>
				</div>
			</body>
			<img
				className='wavy'
				src='/images/Wave_Violet_bottom_right_shape_1.png'
				alt='wave'
			/>
			<Footer />
		</div>
	);
};

export default Registration;
