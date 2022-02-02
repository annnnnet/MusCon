import React from 'react';
import './registration.css';
import '../../basic.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Polar_Chart from '../../components/polar_chart/polar_chart';
import { MdOutlineAddAPhoto } from '../../../node_modules/react-icons/md';
import logo from '../../pics/last.gif';

const Registration = () => {
	return (
		<div className='background standart '>
			<div className='top sticky-top '>
				<Header />
			</div>
			<div className='content'>
				<img
					className='wavy'
					src='/images/Violet_top_left_wave_1.png'
					alt='wave'
				/>

				<div className='row reg_wavy_content'>
					{/* <div class="violet_back text-center">
					<h1 class="present">MusCon</h1>
          </div> */}
					<div className='reg_logo col-sm-6 '>
						<img src='/images/logo3.gif' alt='logo' />
					</div>

					<div className='form-container col-sm-6 '>
						<form className=' signup-form col-sm-12'>
							<h3 className='text-center title'>
								<strong>Create</strong> an account
							</h3>
							<main className='col-sm-10 form-signup text-left'>
								<div className='form-row  '>
									<div className=' form-group ava col-md-6'>
										<img
											src='/images/ava.jpg'
											className='rounded-circle'
											alt='user_avatar'
										/>
										<button className='col-sm-1 btn btn-circle add_photo btn-lg '>
											<MdOutlineAddAPhoto />
										</button>
										<h6 className='warning'>*not required</h6>
									</div>
									<div className='form-group col-sm-12'>
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

									<div className='form-group col-sm-12'>
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
										<input
											type='password'
											className='form-control'
											id='floatingPassword'
											placeholder='Input password'
										/>
									</div>
									<div className='text-left form-check col-sm-6'>
										<label className='form-check-label'>
											<input
												type='checkbox'
												className='form-check-input'
											/>
											I agree to the license terms.
										</label>
									</div>
								</div>
								<div className='col-sm-6 form-group'>
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
					<body className='violet_back '></body>
				</div>

				<div className='bottom'>
					<img
						className='wavy'
						src='/images/Wave_Violet_bottom_right_shape_1.png'
						alt='wave'
					/>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Registration;
