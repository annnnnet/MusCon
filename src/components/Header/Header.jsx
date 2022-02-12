import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css';
import EventBus from '../../common/EventBus';
import { logout } from '../../actions/auth';
import { clearMessage } from '../../actions/message';

import { history } from '../../helpers/history';

const Header = (active) => {
	const { user: currentUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	// const { isLoggedIn } = true;
	// active = isLoggedIn;
	useEffect(() => {
		history.listen((location) => {
			dispatch(clearMessage()); // clear message when changing location
		});
	}, [dispatch]);

	const logOut = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	useEffect(() => {
		EventBus.on('logout', () => {
			logOut();
		});

		return () => {
			EventBus.remove('logout');
		};
	}, [currentUser, logOut]);
	return (
		<header className='header standart'>
			<div className='media small_logo col-md-1 text-right'>
				<img
					src='/images/logo3.png'
					className='img-fluid  '
					width='60'
					height='60'
					alt='logo'
				/>
			</div>
			{active ? (
				<>
					<ul className='header_left_nav col-md-7'>
						<li>
							<a href='/MyPage'>My page</a>
						</li>
						<li>
							<a href='/PostCreate'>Create a post</a>
						</li>
						<li>
							<a href='/PostDemostrate'>News</a>
						</li>
						<li>
							<a href='/GenreChoose'>GenreChoose</a>
						</li>
						<li>
							<a href='/SingerChoose'>SingerChoose</a>
						</li>
					</ul>
					<div className='group standart col-md-4'>
						<a
							href='/Main'
							role='button'
							className='action_button text-capitalize btn col-md-4  justify-content-right'
							onClick={logOut}
						>
							Logout
						</a>
					</div>
				</>
			) : (
				<>
					<ul className='header_left_nav col-md-7'>
						<li>
							<a href='/Main'>Main</a>
						</li>
						<li>
							<a href='/PostDemonstrate'>News</a>
						</li>
					</ul>

					<div className='group standart col-md-4'>
						<a
							href='/Login'
							role='button'
							className='action_button text-capitalize btn col-md-4  justify-content-right'
						>
							Login
						</a>
						<a
							href='/Signup'
							role='button'
							className='action_button text-capitalize btn active col-md-4  justify-content-left'
						>
							Sign-Up
						</a>
					</div>
				</>
			)}
		</header>
	);
};
export default Header;
