import React from 'react';
import './GenreChoose.css';
import '../../basic.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';

var genres = [
	'Pop',
	'Rock',
	'Rap',
	'Hip-hop',
	'Punk',
	'Classical',
	'Jazz',
	'K-pop',
	'Metal',
	'Techno',
	'Country',
	'Indi',
];

const Genrechoose = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`https://muscon.herokuapp.com/genres`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((actualData) => {
				setData(actualData);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
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
						alt='wave'
					/>
					<div className='sc_top_content'>
						<h1 id='sc_text'>Choose favourite genres:</h1>
						<div className='sc_search_box'>
							<input
								className='sc_search'
								type='search'
								placeholder='Search through singers'
							></input>
							<button className='sc_button'>Search</button>
						</div>
					</div>
				</div>
				<div className='sc_wavy_content'>
					<div className='block'>
						{/*
						<div className='row products-container'>
							{data &&
								data.map((number) => {
									return (
										<div
											key={number.toString()}
											className='col-xxl-1 col-xl-3 col-lg-4 col-md-6 col-sm-12'
										>
											<div className='sc_musician card'>
												<div className='flexy'>
													<p className='sc_singer'>{number}</p>
													<button className='sc_plus'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															className='bi bi-plus-lg'
															viewBox='0 0 16 16'
														>
															<path
																fillRule='evenodd'
																d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
															/>
														</svg>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															className='bi bi-check'
															viewBox='0 0 16 16'
														>
															<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
														</svg>
													</button>
												</div>
											</div>
										</div>
									);
								})}
						</div>
							*/}
						<div className='row products-container'>
							{genres.map((number) => {
								return (
									<div
										key={number.toString()}
										className='col-xxl-1 col-xl-3 col-lg-4 col-md-6 col-sm-12'
									>
										<div className='sc_musician card'>
											<div className='flexy'>
												<p className='sc_singer'>{number}</p>
												<button className='sc_plus'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='bi bi-plus-lg'
														viewBox='0 0 16 16'
													>
														<path
															fillRule='evenodd'
															d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
														/>
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='bi bi-check'
														viewBox='0 0 16 16'
													>
														<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
													</svg>
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

export default Genrechoose;
