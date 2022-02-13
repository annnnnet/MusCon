import React from 'react';
import Main from './pages/Main/Main';
import PostDemonstrate from './pages/PostDemonstrate/PostDemonstrate';
import SingerChoose from './pages/SingerChoose/SingerChoose';
import Genrechoose from './pages/genrechoose/genrechoose';
import PostCreate from './pages/PostCreate/PostCreate';
import MyPage from './pages/MyPage/MyPage';
import UserPage from './pages/UserPage/UserPage';
import Registration from './pages/Registration/Registration';
import Chart from './pages/chart/chart';
import Friends from './components/friendcard/cards';
import Toptable from './components/toptable/toptable';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/Main' />
				</Route>
				<Route path='/Main'>
					<Main />
				</Route>
				<Route path='/SingerChoose'>
					<SingerChoose />
				</Route>
				<Route path='/PostCreate'>
					<PostCreate />
				</Route>
				<Route path='/PostDemonstrate'>
					<PostDemonstrate />
				</Route>
				<Route path='/MyPage'>
					<MyPage />
				</Route>
				<Route path='/UserPage'>
					<UserPage />
				</Route>
				<Route path='/Registration'>
					<Registration />
				</Route>
				<Route path='/Friends'>
					<Friends />
				</Route>
				<Route path='/Chart'>
					<Chart />
				</Route>
				<Route path='/GenreChoose'>
					<Genrechoose />
				</Route>
			</Switch>
		</Router>
	);
}
