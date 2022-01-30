import React from 'react';
import './reg.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const Registration = () => {
	return (
		<div className='col-md-12 standart '>
			<div className='top sticky-top '>
				<Header />
			</div>
			<div className='top back'>
				<img src={require('../../pics/purple_bottom_wave_01.png')} />
			</div>
			<div className='col-md-12 violet_back text-center'>
				<h1 className='present'>MusCon</h1>
			</div>
			<body className='col-md-12 violet_back body pt-5  w-100'>
				<div className='media logo mr-1 col-md-5 '>
					<img
						src='../../pics/logo.jpg'
						className='img-fluid rounded-circle  link-dark'
					/>
				</div>
				<div className='form-container ml-1 col-md-7 '>
					<form
						className='signup-form'
						className='rounded col-md-10 border border-warning'
					>
						<h3 className='m-3 text-center standcol'>
							<strong>Create</strong> an account
						</h3>
						<main className='col-md-10 form-signup text-left'>
							<div className='form-row '>
								<div className='form-group rounded-top col-md-12'>
									<label
										htmlFor='floatingInput'
										className='control-label standcol'
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
										className='control-label standcol'
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
										className='control-label standcol'
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
										className='control-label standcol'
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
			{/* </div> */}

			<div className='bottom back'>
				<img src={require('../../pics/purple_top_wave_01.png')} />
			</div>

			<div className='bottom'>
				<Footer />
			</div>
		</div>
	);
};

export default Registration;
