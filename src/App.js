import React from 'react';
import Main from './pages/Main/Main';
import PostDemonstrate from './pages/PostDemonstrate/PostDemonstrate';
import SingerChoose from './pages/SingerChoose/SingerChoose';
import PostCreate from './pages/PostCreate/PostCreate';
import MyPage from './pages/MyPage/MyPage';
import UserPage from './pages/UserPage/UserPage';
import Registration from './pages/Registration/Registration';
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
			</Switch>
		</Router>
	);
}
