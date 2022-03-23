import React from 'react';
import { useState, useEffect } from 'react';
import './SingerChoose.css';
import '../../basic.css';
import singer from '../../pics/singer.jpg';
import { useLocation, Link, Navigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const SingerChoose = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const genres = new FormData();
	const location = useLocation();
	genres.append('genres', location.state.genres);

	const [checked, setChecked] = useState([]);

	const handleCheck = (event) => {
		var updatedList = [...checked];
		if (event.target.checked) {
			updatedList = [...checked, event.target.value];
		} else {
			updatedList.splice(checked.indexOf(event.target.value), 1);
		}
		setChecked(updatedList);
	};

	const checkedItems = checked.length
		? checked.reduce((total, item) => {
				return total + ', ' + item;
		  })
		: '';

	useEffect(() => {
		fetch(`http://127.0.0.1:5000/get_artists`, {
			method: 'POST',
			body: genres,
		})
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

	const onLinkClick = (e) => {
		e.preventDefault();
		const tokenData = JSON.parse(localStorage.getItem('user'));
		fetch(`http://127.0.0.1:5000/edit_artist`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenData.token}`,
			},
			body: JSON.stringify({ artist_id: checked }),
		})
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
				if (data) {
					return <Navigate replace to='/Singerchoose' />;
				}
			})
			.catch((err) => {
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className='background'>
			<div className='sticky-top '>
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
						<h1 id='sc_text'>Choose favourite singers / groups:</h1>
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
						<div className='row products-container'>
							{data &&
								data.map((artist) => {
									return (
										<div
											key={artist.id}
											className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'
										>
											<div className='sc_musician card'>
												<img
													src={artist.image.url}
													alt='singer_photo'
												/>
												<div className='flexy'>
													<p className='sc_singer'>
														{artist.name}
													</p>
													<input
														value={artist.id}
														type='checkbox'
														onChange={handleCheck}
														className='checkboxstyle red'
													/>
												</div>
											</div>
										</div>
									);
								})}
						</div>
					</div>
					<button className='submit_button center' onClick={onLinkClick}>
						<Link to='/Friends' className='submit_button_text'>
							Move to friends
						</Link>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SingerChoose;
