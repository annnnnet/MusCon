import React from 'react';
import { ImLocation } from '../../../node_modules/react-icons/im';

import { ImPencil } from '../../../node_modules/react-icons/im';

// import { MDBContainer } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './my_page.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Friends from '../../components/tables/friends';
import Polar_Chart from '../../components/polar_chart/polar_chart';
const friends = [
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle link-dark'
				src='/images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username1',
	},
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle link-dark'
				src='/images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username2',
	},
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle link-dark'
				src='/images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username3',
	},
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle link-dark'
				src='/images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username4',
	},
	{
		image: (
			<img
				className='col-md-2 ava rounded-circle link-dark'
				src='/images/ava.jpg'
				alt='friend_avatar'
			/>
		),
		name: 'Username5',
	},
];
const genres = ['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5'];
const songs = [
	'Song1-Artist1',
	'Song2-Artist2',
	'Song3-Artist3',
	'Song4-Artist4',
	'Song5-Artist5',
];

const My_Page = () => {
	return (
		<div className='standart'>
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
			<body className='col-md-12 left violet_back body w-100 '>
				<div className='col-md-8 column canva '>
					<h4 className=' col-md-8  heading personal_data'>
						Manuella_Tarly
					</h4>
					<div className='row location'>
						<i className=' col-md-1 fa-2x sign'>
							<ImLocation />
						</i>
						<h1 className='col-md-7 location_name'>Los-Angles, USA</h1>
					</div>
					<div className='col-md-8 left '>
						<img
							src='/images/ava.jpg'
							className='img-fluid rounded-circle  link-dark w-50'
							alt='user_avatar'
						/>
						<a
							href='#'
							role='button'
							className=' edit col-md-4 text-capitalize btn '
						>
							<ImPencil /> Edit profile{' '}
						</a>
					</div>
				</div>
				{/* </div>   */}
			</body>
			{/* <div class="col-md-12 right yellow_back body w-100"> */}

			<body className='col-md-12 right yellow_back body w-100'>
				<div className='bottom back switch_1'>
					<img
						className='wavy'
						src='/images/Wave_Violet_bottom_right_shape_1.png'
						alt='wave'
					/>
					<div className='col-md-8 column canva '>
						<h1 className='col-md-8 heading favorites'>Favorites</h1>

						<div className='col-md-8 table_1 '>
							<nav className=' col-md-12  '>
								<div
									className='nav w-100 title nav-tabs'
									id='nav-tab'
									role='tablist'
								>
									<button
										className='col-md-6 nav-link'
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
										className=' col-md-6 nav-link'
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
							<div className='col-md-12 tab-content'>
								<div
									className='col-md-12  tab-pane fade '
									id='nav-friends'
									role='tabpanel'
									aria-labelledby='nav-friends-tab'
								>
									<div className='w-100 list-group-item list'>
										{friends
											.slice(0, friends.length)
											.map((item, index) => {
												return (
													<div
														className='col-md-12 row'
														key={index}
													>
														<a
															href='/user/#'
															className='col-md-12  element '
														>
															{item.image}
															<h4 className='col-md-8 username'>
																{item.name}
															</h4>
														</a>
														<button
															type='button'
															className=' col-md-4 right delete btn-close'
															aria-label='Close'
														></button>
													</div>
												);
											})}
									</div>
								</div>
								<div
									className='col-md-8  tab-pane fade show active'
									id='nav-songs'
									role='tabpanel'
									aria-labelledby='nav-songs-tab'
								>
									<div className='w-100 list-group-item list'>
										{songs.map((item, index) => {
											return (
												<div className='col-md-12 row' key={index}>
													<h4
														className='w-100  element songs'
														href='/{items}'
													>
														{item}
													</h4>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>

			<body className='col-md-12 left violet_back body pt-0 w-100'>
				<div className='switch_2'>
					<img
						className='wavy'
						src='/images/Wave_Violet_top_right_shape_1.png'
						alt='wave'
					/>
					<div className='col-md-8 column violet_back canva '>
						<h1 className='col-md-6 title heading pref'>
							Music preferences
						</h1>
						<div className='col-md-6 table_2 '>
							<nav className=' col-md-12  '>
								<div
									className='nav w-100 nav-tabs'
									id='nav-tab'
									role='tablist'
								>
									<button
										className='col-md-12 nav-link '
										id='nav-geners-tab'
										data-bs-toggle='tab'
										data-bs-target='#nav-genres'
										type='button'
										role='tab'
										aria-controls='nav-genres'
									>
										Genres
									</button>
								</div>
							</nav>
							<div className='col-md-12 tab-content'>
								<div
									className='col-md-8  tab-pane fade show active'
									id='nav-genres'
									role='tabpanel'
									aria-labelledby='nav-genres-tab'
								>
									<div className='w-100 list-group-item list'>
										{genres.map((item, index) => {
											return (
												<div
													className='col-md-12 row w-100'
													key={index}
												>
													<h4
														className='col-md-12 w-100 element genre'
														href='/{items}'
													>
														{item}
													</h4>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
			<div>
				<img
					className='wavy'
					src='/images/Wave_Violet_bottom_right_shape_11.png'
					alt='wave'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default My_Page;
