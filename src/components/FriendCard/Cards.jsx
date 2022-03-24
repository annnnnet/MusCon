/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Cards.css';
import image from '../../pics/sample.jpg';

const Friends = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const tokenData = JSON.parse(localStorage.getItem('user'));
		fetch(`http://127.0.0.1:5000/friends`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenData.token}`,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				console.log('response', response);
				return response.json();
			})
			.then((friends) => {
				console.log('friends', friends);
				setData(friends);
			});
	}, []);

	return (
		<div className='back'>
			<div className='top sticky-top '>
				<Header />
			</div>

			<div className='content'>
				<div className='sc_top'>
					<img
						className='wavy'
						src={require('../../pics/purple_bottom_wave_01.png')}
					/>
					<div className='sc_top_content'>
						<h1 id='sc_text'>Your possible friends:</h1>
					</div>
				</div>

				<div className='sc_wavy_content'>
					<div className='block'>
						<div className='row products-container'>
							{data &&
								data.map((friends) => {
									return (
										<div
											key={friends}
											className='col-xxl-1 col-xl-3 col-lg-4 col-md-6 col-sm-12'
										>
											<p></p>
											<div className='card text-center shadow'>
												<div className='overflow'>
													{/* <img
														src={image}
														alt='user_avatar'
														className='card-img-top'
													/> */}
													<img
														className='card-img-top'
														src='/Images/ava.jpg'
														alt='friend_avatar'
													/>
												</div>
												<div className='card-body text-dark'>
													<h4 className='card-title'>
														{friends.username}
													</h4>
													<button className='submit_button center'>
														<Link
															to='/UserPage'
															state={{
																id: friends.id,
															}}
															className='submit_button_text '
														>
															View profile
														</Link>
													</button>
												</div>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Friends;
