import React from 'react';
import Main from './pages/Main/Main';
import PostDemonstrate from './pages/PostDemonstrate/PostDemonstrate';
import SingerChoose from './pages/SingerChoose/SingerChoose';
import GenreChoose from './pages/GenreChoose/GenreChoose';
import PostCreate from './pages/PostCreate/PostCreate';
import MyPage from './pages/MyPage/MyPage';
import UserPage from './pages/UserPage/UserPage';
import Registration from './pages/Registration/Registration';
import Chart from './pages/Chart/Chart';
import Friends from './components/FriendCard/Cards';
// import Toptable from './components/toptable/toptable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route path='/Main' element={<Main />} />

				<Route path='/SingerChoose' element={<SingerChoose />} />
				<Route path='/PostCreate' element={<PostCreate />} />
				<Route path='/PostDemonstrate' element={<PostDemonstrate />} />

				<Route path='/MyPage' element={<MyPage />} />

				<Route path='/UserPage' element={<UserPage />} />

				<Route path='/Registration' element={<Registration />} />

				<Route path='/Friends' element={<Friends />} />

				<Route path='/Chart' element={<Chart />} />

				<Route path='/GenreChoose' element={<GenreChoose />} />
			</Routes>
		</Router>
	);
}
