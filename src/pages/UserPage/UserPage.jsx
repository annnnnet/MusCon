import React from 'react';
import { ImLocation } from 'react-icons/im';
import { RiUserFollowLine } from 'react-icons/ri';
import { RiChat1Line } from 'react-icons/ri';
// import { MDBContainer } from "mdbreact";
import '../../basic.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './UserPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { ImPencil } from 'react-icons/im';

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	render() {
		return (
			<a
				role='button'
				className='on_page  action_button col-sm-8 text-capitalize btn'
				onClick={this.handleClick}
			>
				{this.state.isToggleOn ? 'Follow' : 'Followed!'}
			</a>
		);
	}
}

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
const songs = [
	'Гімн України - Тіна Кароль',
	'Lucy - SEV',
	'Мовчати - Скрябін',
	'Рандеву - Артем Пивоваров',
	'Mala Fama - Danna Paola',
];

const Follow = () => {
	const [title, setTitle] = useState(' Follow');
	return <h1 onClick={() => setTitle('Following')}>{title}</h1>;
};

const artists = ['Artist1', 'Artist2', 'Artist3', 'Artist4', 'Artist5'];
const UserPage = () => {
	const current_user = JSON.parse(localStorage.getItem('user'));
	// eslint-disable-next-line no-restricted-globals
	const location = useLocation();
	var user_id = location.state.id;

	const getUserData = () => {
		fetch(`http://127.0.0.1:5000/user/${user_id}`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + current_user.token,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.text();
			})
			.then((actualData) => {
				console.log(actualData);
				setMyData(JSON.parse(actualData));
			})
			.catch((error) => {
				console.log(error.message);
				setMyData(null);
			});
	};

	const getUserGenres = () => {
		fetch(`http://127.0.0.1:5000/get_user_genres/${user_id}`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + current_user.token,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.text();
			})
			.then((actualData) => {
				console.log(actualData);
				setMyGenres(JSON.parse(actualData));
			})
			.catch((error) => {
				console.log(error.message);
				setMyGenres(null);
			});
	};

	const getUserArtists = () => {
		fetch(`http://127.0.0.1:5000/get_user_artists/${user_id}`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + current_user.token,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.text();
			})
			.then((actualData) => {
				console.log(actualData);
				setMyArtists(JSON.parse(actualData));
			})
			.catch((error) => {
				console.log(error.message);
				setMyArtists(null);
			});
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [loading, setLoading] = useState(true);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [error, setError] = useState(null);
	const onLinkClick = (e, name) => {
		e.preventDefault();
	};

	const getUserFriends = () => {
		fetch(`http://127.0.0.1:5000//${user_id}/friends`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + current_user.token,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.text();
			})
			.then((actualData) => {
				console.log(actualData);
				setMyFriends(JSON.parse(actualData));
			})
			.catch((error) => {
				console.log(error.message);
				setMyFriends(null);
			});
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		getUserData();
		getUserGenres();
		getUserArtists();
		getUserFriends();
	}, []);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [user_genres, setMyGenres] = useState([]);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [user_data, setMyData] = useState({});
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [user_artists, setMyArtists] = useState([]);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [user_friends, setMyFriends] = useState([]);
	return (
		<div className='background standart'>
			<div className='sticky-top '>
				<Header />
			</div>
			<div className='content'>
				<img
					className='wavy'
					src='/Images/Violet_top_left_wave_1.png'
					alt='wave'
				/>
				<div>
					<div className='left violet_back body'>
						{user_data ? (
							<div className='col-sm-8 canva'>
								<h4 className='col-sm-8  heading personal_data'>
									{user_data.username}
								</h4>
								<div className='row location'>
									<i className='col-sm-1 fa-2x sign_loc'>
										<ImLocation />
									</i>
									<h1 className='col-sm-7 location_name'>
										{user_data.city}
									</h1>{' '}
								</div>
								<div className=' col-sm-10 ava_reg canva'>
									<img
										src='/Images/ava.jpg'
										className='col-sm-12 rounded-circle'
										alt='user_avatar'
									/>
									{/* <a
										href='#'
										role='button'
										className='on_page  action_button col-sm-8 text-capitalize btn'
									>
										<RiUserFollowLine /> Follow{' '}
									</a> */}
									<Toggle />
									<a
										href='#'
										role='button'
										className='on_page action_button  col-sm-8 text-capitalize btn '
									>
										<RiChat1Line /> Send a message{' '}
									</a>
								</div>
							</div>
						) : (
							<div className='col-sm-8 canva'>
								<h4 className='col-sm-8  heading personal_data'>
									Manuella_Tarly
								</h4>
								<div className='row location'>
									<i className='col-sm-1 fa-2x sign_loc'>
										<ImLocation />
									</i>
									<h1 className='col-sm-7 location_name'>
										Los-Angles, USA
									</h1>{' '}
								</div>
								<div className=' col-sm-10 ava_reg canva'>
									<img
										src='/Images/ava.jpg'
										className='col-sm-12 rounded-circle'
										alt='user_avatar'
									/>
									<a
										href='#'
										role='button'
										className='on_page  action_button col-sm-8 text-capitalize btn'
									>
										<RiUserFollowLine /> Follow{' '}
									</a>
									<a
										href='#'
										role='button'
										className='on_page action_button  col-sm-8 text-capitalize btn '
									>
										<RiChat1Line /> Send a message{' '}
									</a>
								</div>
							</div>
						)}
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
											{user_friends ? (
												<div className='list-group-item list'>
													{user_friends
														.slice(0, user_friends.length)
														.map((friend, index) => {
															return (
																<div
																	className='col-sm-12 row'
																	key={index}
																>
																	<Link
																		to='/UserPage'
																		state={{
																			id: friend.id,
																		}}
																		className='col-sm-12  element '
																	>
																		{/* {friend.image} */}
																		<img
																			className='col-md-2 ava rounded-circle'
																			src='/Images/ava.jpg'
																			alt='friend_avatar'
																		/>
																		<h4 className='col-sm-10 username'>
																			{friend.username}
																		</h4>
																	</Link>
																	<button
																		type='button'
																		className=' col-sm-2 right add_1 btn'
																	>
																		<i className='col-sm-2 left fas fa-plus'></i>
																	</button>
																</div>
															);
														})}
												</div>
											) : (
												<div className='list-group-item list'>
													{friends
														.slice(0, friends.length)
														.map((friend, index) => {
															return (
																<div
																	className='col-sm-12 row'
																	key={index}
																>
																	<a
																		href='/user/#'
																		className='col-sm-12  element '
																	>
																		{friend.image}
																		<h4 className='col-sm-10 username'>
																			{friend.name}
																		</h4>
																	</a>
																	<button
																		type='button'
																		className=' col-sm-2 right add_1 btn'
																	>
																		<i className='col-sm-2 left fas fa-plus'></i>
																	</button>
																</div>
															);
														})}
												</div>
											)}
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
																className=' col-sm-2 right add_2 btn'
															>
																<i className='col-sm-2 left fas fa-plus'></i>
															</button>
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
								className='wavy'
								src='/Images/Wave_Violet_top_right_shape_1.png'
								alt='wave'
							/>
							<div className='col-sm-12  violet_back canva '>
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
											{user_genres ? (
												<div className='list-group-item list'>
													{user_genres.map((genre, index) => {
														return (
															<div
																className='left col-sm-12 row'
																key={index}
															>
																<h4
																	className='col-sm-10 element genre'
																	href='/{items}'
																>
																	{genre}
																</h4>
																<button
																	type='button'
																	className=' col-sm-2 right add_2 btn'
																>
																	<i className='col-sm-2 left fas fa-plus'></i>
																</button>
															</div>
														);
													})}
												</div>
											) : (
												<div className='list-group-item list'>
													{genres.map((genre, index) => {
														return (
															<div
																className='left col-sm-12 row'
																key={index}
															>
																<h4
																	className='col-sm-10 element genre'
																	href='/{items}'
																>
																	{genre}
																</h4>
																<button
																	type='button'
																	className=' col-sm-2 right add_2 btn'
																>
																	<i className='col-sm-2 left fas fa-plus'></i>
																</button>
															</div>
														);
													})}
												</div>
											)}
										</div>
										<div
											className='col-sm-8  tab-pane fade'
											id='nav-artists'
											role='tabpanel'
											aria-labelledby='nav-artists-tab'
										>
											{user_artists ? (
												<div className='list-group-item list'>
													{user_artists.map((artist, index) => {
														return (
															<div
																className='col-sm-12 row'
																key={index}
															>
																<h4
																	className='col-sm-10 element song'
																	href='/{items}'
																>
																	{artist}
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
											) : (
												<div className='list-group-item list'>
													{artists.map((artist, index) => {
														return (
															<div
																className='col-sm-12 row'
																key={index}
															>
																<h4
																	className='col-sm-10 element song'
																	href='/{items}'
																>
																	{artist}
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
											)}
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
				<Footer />
			</div>
		</div>
	);
};

export default UserPage;
