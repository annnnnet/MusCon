import React from 'react';
import './Header.css';

const Header = () => {
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
			<ul className='header_left_nav col-md-7'>
				<li>
					<a href='/SingerChoose'>SingerChoose</a>
				</li>
				<li>
					<a href='/MyPage'>My page</a>
				</li>
				<li>
					<a href='/GenreChoose'>GenreChoose</a>
				</li>
			</ul>

			<div className='group standart col-md-4'>
				<a
					href='/login'
					role='button'
					className='text-capitalize btn col-md-4  justify-content-right'
				>
					Login
				</a>
				<a
					href='/registration'
					role='button'
					className='text-capitalize btn active col-md-4  justify-content-left'
				>
					Sign-Up
				</a>
			</div>
		</header>
	);
};
export default Header;
