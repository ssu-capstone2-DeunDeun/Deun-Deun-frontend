// import MyPage from 'pages/MyPage';
import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import SideBar from 'components/SideBar';
import Header from 'components/Header';
import { ContainerRow } from 'styles';

const ClubHomePage = loadable(() => import('pages/ClubHomePage'));
const CategoryITPage = loadable(() => import('pages/CategoryITPage'));
const ClubDetailPage = loadable(() => import('pages/ClubDetailPage'));
const ClubManagePage = loadable(() => import('pages/ClubManagePage'));
const ClubAddPage = loadable(() => import('pages/ClubAddPage'));
const MyProfileModifyPage = loadable(() => import('pages/MyProfileModifyPage'));
const MyClubListPage = loadable(() => import('pages/MyClubListPage'));
const MyApplicationPage = loadable(() => import('pages/MyApplicationPage'));
const MyLikeListPage = loadable(() => import('pages/MyLikeListPage'));

const App = () => {
	return (
		//
		<Switch>
			<Route exact path="/">
				<Redirect to="/club/home" />
			</Route>
			{/* <Route path="/login" component={LogIn} />
			<Route path="/signup" component={SignUp} /> */}
			<Route exact path="/club/home">
				<Header />
				<ContainerRow>
					<SideBar />
					<ClubHomePage />
				</ContainerRow>
			</Route>
			<Route path="/club/category/:id">
				<Header />
				<ContainerRow>
					<SideBar />
					<ClubCategory />
				</ContainerRow>
			</Route>
			<Route path="/mypage/:name">
				<Header />
				<ContainerRow>
					<SideBar />
					<MyPage />
				</ContainerRow>
			</Route>
			<Route path="/club/manage/">
				<Header />
				<ContainerRow>
					<SideBar />
					<ClubManagePage />
				</ContainerRow>
			</Route>
			<Route exact path="/club/add">
				<Header />
				<ContainerRow>
					<SideBar />
					<ClubAddPage />
				</ContainerRow>
			</Route>

			<Route exact path="/club/detail" component={ClubDetailPage} />
		</Switch>
	);
};

const MyPage = () => {
	const { name } = useParams();
	return (
		//
		<>
			{name === 'modify' && <MyProfileModifyPage />}
			{name === 'clubs' && <MyClubListPage />}
			{name === 'application' && <MyApplicationPage />}
			{name === 'likes' && <MyLikeListPage />}
			{/* {name === 'notify' && <MyNotificationPage />} */}
		</>
	);
};

const ClubCategory = () => {
	const { id } = useParams();
	return (
		//
		<>{id === '1' && <CategoryITPage />}</>
	);
};

export default App;
