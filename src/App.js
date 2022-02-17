import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Login from './pages/Login/Login';
import Recommendation from './components/FriendCard/Rec';
import Example from './components/TopTable/tb';

import 'bootstrap/dist/css/bootstrap.min.css';
import { history } from './helpers/history';

export default function App() {
	return (
		<Router history={history}>
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route exact path='/Main' element={<Main />} />

				<Route exact path='/SingerChoose' element={<SingerChoose />} />
				<Route exact path='/PostCreate' element={<PostCreate />} />
				<Route
					exact
					path='/PostDemonstrate'
					element={<PostDemonstrate />}
				/>

				<Route exact path='/MyPage' element={<MyPage />} />

				<Route exact path='/UserPage' element={<UserPage />} />

				<Route exact path='/Signup' element={<Registration />} />

				<Route exact path='/Login' element={<Login />} />

				<Route exact path='/Friends' element={<Friends />} />

				<Route exact path='/Chart' element={<Chart />} />

				<Route exact path='/GenreChoose' element={<GenreChoose />} />

				<Route exact path='/Rec' element={<Recommendation />} />

				<Route exact path='/Ex' element={<Example />} />
			</Routes>
		</Router>
	);
}
