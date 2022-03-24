import React, { useState, useEffect } from 'react';
import './PostOutput.css';
import '../../basic.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var post_args = [
	{
		id: 'Id_1',
		user_avatar: require('../../pics/singer.jpg'),
		username: 'Username',
		title: 'Post Title',
		genre: 'Music Genre',
		news_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		news_pics: [
			require('../../pics/singer.jpg'),
			require('../../pics/back.jpg'),
			require('../../pics/singer.jpg'),
			require('../../pics/back.jpg'),
		],
	},
	{
		id: 'Id_2',
		user_avatar: require('../../pics/singer.jpg'),
		username: 'Username',
		title: 'Post Title',
		genre: 'Music Genre',
		news_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		news_pics: [
			require('../../pics/singer.jpg'),
			require('../../pics/back.jpg'),
			require('../../pics/singer.jpg'),
			require('../../pics/back.jpg'),
		],
	},
];

const PostOutput = () => {
	const [posts, setPostData] = useState([]);

	const tokenData = JSON.parse(localStorage.getItem('user'));
	const getAllPosts = async () => {
		const response = await fetch(`http://127.0.0.1:5000/news`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + tokenData.token,
			},
		});
		return response.json();
	};

	const getUserInfo = async (post) => {
		const tokenData = JSON.parse(localStorage.getItem('user'));
		const response = await fetch(
			`http://127.0.0.1:5000/user/${post.user_id}`,
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + tokenData.token,
				},
			}
		);
		const userdata = await response.text();
		const userName = JSON.parse(userdata).username;
		post.username = userName;
		return post;
	};

	const setInformationForDisplayingPosts = async () => {
		const postsData = await getAllPosts();
		const data = await Promise.all(
			postsData.map((post) => getUserInfo(post))
		);
		setPostData(data);
	};
	useEffect(() => {
		setInformationForDisplayingPosts();
	}, []);
	return (
		<div>
			{posts &&
				posts.map((post_args) => {
					return (
						<div className='post' key={post_args.id}>
							<div className='flexy'>
								<img
									className='post_user_logo'
									src='/Images/ava.jpg'
									alt='post_author_avatar'
								/>
								<p className='post_username'>{post_args.username}</p>
								<p className='post-genre'>{post_args.genre_id}</p>
							</div>
							<p className='post_title'>{post_args.title}</p>

							<p className='post_text'>{post_args.text}</p>

							<div className='out_carousel'>
								<Carousel>
									{post_args.news_pics &&
										post_args.photo_wall.map((pic, index) => {
											return (
												<Carousel.Item key={pic.id}>
													<img
														className='post_carousel_img mx-auto d-block'
														src={pic}
														alt='Carousel slide'
													/>
												</Carousel.Item>
											);
										})}
								</Carousel>
							</div>
						</div>
					);
				})}
		</div>
	);
};
export default PostOutput;
