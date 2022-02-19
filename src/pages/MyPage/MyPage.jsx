import React from 'react';
// import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { ImLocation } from 'react-icons/im';
import { ImPencil } from 'react-icons/im';
import '../../basic.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './MyPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import UserService from '../../services/user.service';
// import EventBus from '../../common/EventBus';

const friends = [
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle'
				src='/Images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username1',
	},
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle'
				src='/Images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username2',
	},
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle'
				src='/Images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username3',
	},
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle'
				src='/Images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username4',
	},
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle'
				src='/Images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username5',
	},
];
const genres = ['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5'];
const songs = ['Song1', 'Song2', 'Song3', 'Song4', 'Song5'];
const artists = ['Artist1', 'Artist2', 'Artist3', 'Artist4', 'Artist5'];

const MyPage = () => {
	// const { user: currentUser } = useSelector((state) => state.auth);
	var isLoggedIn = true;
	// if (!currentUser) {
	// 	return <Navigate replace to='/login' />;
	// }
	if (!isLoggedIn) {
		return <Navigate replace to='/login' />;
	}
	// eslint-disable-next-line react-hooks/rules-of-hooks
	// const [content, setContent] = useState(false);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	// useEffect(() => {
	// 	UserService.getUserBoard().then(
	// 		(response) => {
	// 			setContent(response.data);
	// 		},
	// 		(error) => {
	// 			setContent(
	// 				(error.response &&
	// 					error.response.data &&
	// 					error.response.data.message) ||
	// 					error.message ||
	// 					error.toString()
	// 			);

	// 			if (error.response && error.response.status === 401) {
	// 				EventBus.dispatch('logout');
	// 			}
	// 		}
	// 	);
	// }, []);

	return (
		<div className='background standart'>
			{/* {content} */}
			<div className='sticky-top '>
				<Header />
			</div>
			<div className='content'>
				<img
					className='wavy'
					src={require('../../pics/purple_bottom_wave_01.png')}
					alt='wave'
				/>
				<div>
					<div className='left violet_back body'>
						<div className='col-sm-8 canva'>
							<h4 className='col-sm-8  heading personal_data'>
								Manuella_Tarly
								{/* {currentUser.username} */}
							</h4>
							<div className='row location'>
								<i className='col-sm-1 fa-2x sign_loc'>
									<ImLocation />
								</i>
								<h1 className='col-sm-7 location_name'>
									Los-Angles, USA
									{/* {currentUser.city} */}
								</h1>
							</div>
							<div className=' col-sm-10 ava_reg canva'>
								<img
									src='/Images/ava.jpg'
									className='col-sm-12 rounded-circle'
									alt='user_avatar'
								/>
								<a
									href='/'
									role='button'
									className='on_page action_button col-sm-8 text-capitalize btn'
								>
									<ImPencil /> Edit profile{' '}
								</a>
							</div>
						</div>
					</div>

					<div className=' right yellow_back body'>
						<div className='bottom switch_1'>
							<img
								className='wavy'
								src='/Images/Wave_Violet_bottom_right_shape_1.png'
								alt='wave'
							/>
							<div className='col-sm-12 canva '>
								<h1 className='col-sm-8 heading  favorites'>
									Favorites
								</h1>

								<div className='col-sm-8 table_1'>
									<nav className=' col-sm-12  '>
										<div
											className='nav title nav-tabs'
											id='nav-tab'
											role='tablist'
										>
											<button
												className='col-sm-6 nav-link'
												id='nav-songs-tab'
												data-bs-toggle='tab'
												data-bs-target='#nav-songs'
												type='button'
												role='tab'
												aria-controls='nav-songs'
											>
												Favorited songs
											</button>
											<button
												className='col-sm-6 nav-link'
												id='nav-friends-tab'
												data-bs-toggle='tab'
												data-bs-target='#nav-friends'
												type='button'
												role='tab'
												aria-controls='nav-friends'
											>
												Friends
											</button>
										</div>
									</nav>
									<div className='col-sm-12 tab-content'>
										<div
											className='col-sm-8  tab-pane fade '
											id='nav-friends'
											role='tabpanel'
											aria-labelledby='nav-friends-tab'
										>
											<div className=' list-group-item list'>
												{friends
													.slice(0, friends.length)
													.map((item, index) => {
														return (
															<div
																className='col-sm-12 row'
																key={index}
															>
																<a
																	href='/user/#'
																	className='col-sm-12  element '
																>
																	{item.image}
																	<h4 className='col-sm-10 username'>
																		{item.name}
																	</h4>
																</a>
																<button
																	type='button'
																	className=' col-sm-2 right delete_1 btn-close'
																	aria-label='Close'
																></button>
															</div>
														);
													})}
											</div>
										</div>
										<div
											className='col-sm-8  tab-pane fade show active'
											id='nav-songs'
											role='tabpanel'
											aria-labelledby='nav-songs-tab'
										>
											<div className='list-group-item list'>
												{songs.map((item, index) => {
													return (
														<div
															className='col-sm-12 row'
															key={index}
														>
															<h4
																className='col-sm-10 element song'
																href='/{items}'
															>
																{item}
															</h4>
															<button
																type='button'
																className=' col-sm-2 right delete_2 btn-close'
																aria-label='Close'
															></button>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='left violet_back body'>
						<div className='bottom switch_2'>
							<img
								className=''
								src='/Images/Wave_Violet_top_right_shape_1.png'
								alt='wave'
							/>
							<div className='col-sm-12 violet_back canva '>
								<h1 className='col-sm-8 heading pref'>
									Music preferences
								</h1>
								<div className='col-sm-8 table_2 '>
									<nav className='col-sm-12 '>
										<div
											className='nav title nav-tabs'
											id='nav-tab'
											role='tablist'
										>
											<button
												className='col-sm-6 nav-link '
												id='nav-geners-tab'
												data-bs-toggle='tab'
												data-bs-target='#nav-genres'
												type='button'
												role='tab'
												aria-controls='nav-genres'
											>
												Genres
											</button>
											<button
												className='col-sm-6 nav-link'
												id='nav-artists-tab'
												data-bs-toggle='tab'
												data-bs-target='#nav-artists'
												type='button'
												role='tab'
												aria-controls='nav-artists'
											>
												Artists
											</button>
										</div>
									</nav>
									<div className='col-sm-12 tab-content'>
										<div
											className='col-sm-8 tab-pane fade show active'
											id='nav-genres'
											role='tabpanel'
											aria-labelledby='nav-genres-tab'
										>
											<div className='list-group-item list'>
												{genres.map((item, index) => {
													return (
														<div
															className='left col-sm-12 row'
															key={index}
														>
															<h4
																className='col-sm-10 element genre'
																href='/{items}'
															>
																{item}
															</h4>
															<button
																type='button'
																className=' col-sm-2 right delete_2 btn-close'
																aria-label='Close'
															></button>
														</div>
													);
												})}
											</div>
										</div>
										<div
											className='col-sm-8  tab-pane fade'
											id='nav-artists'
											role='tabpanel'
											aria-labelledby='nav-artists-tab'
										>
											<div className='list-group-item list'>
												{artists.map((item, index) => {
													return (
														<div
															className='col-sm-12 row'
															key={index}
														>
															<h4
																className='col-sm-10 element song'
																href='/{items}'
															>
																{item}
															</h4>
															<button
																type='button'
																className=' col-sm-2 right delete_2 btn-close'
																aria-label='Close'
															></button>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</div>
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
		</div>
	);
};

export default MyPage;
