import React from 'react';
import './news_output.css';
import '../../basic.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var post_args = {
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
};

function News_output() {
	return (
		<div className='post'>
			<div className='flexy'>
				<img
					className='post_user_logo'
					src={post_args.user_avatar}
					alt='post_author_avatar'
				/>
				<p className='post_username'>{post_args.username}</p>
				<p className='post-genre'>{post_args.genre}</p>
			</div>
			<p className='post_title'>{post_args.title}</p>

			<p className='post_text'>{post_args.news_text}</p>

			<div className='out_carousel'>
				<Carousel>
					{post_args.news_pics.map((pic, index) => {
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
}
export default News_output;
