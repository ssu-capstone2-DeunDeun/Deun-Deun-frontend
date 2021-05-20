// import MyPage from 'pages/MyPage';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation, useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import SideBar from 'components/common/SideBar';
import Header from 'components/common/Header';
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

const LoginPage = loadable(() => import('pages/LoginPage'));
const RegisterPage1 = loadable(() => import('pages/RegisterPage1'));
const RegisterPage2 = loadable(() => import('pages/RegisterPage2'));
const ApplyPage = loadable(() => import('pages/ApplyPage'));
const ApplyPageSuccessPage = loadable(() => import('pages/ApplyPageSuccessPage'));
const RecruitDetailPage = loadable(() => import('pages/RecruitDetailPage'));
const PostDetailPage = loadable(() => import('pages/PostDetailPage'));
const ApplicantManagePage = loadable(() => import('pages/ApplicantManagePage'));
const MemberManagePage = loadable(() => import('pages/MemberManagePage'));

const App = ({ FileInput, SingleFileInput }) => {
	let location = useLocation();

	useEffect(() => {
		// console.log(location.pathname);
	}, [location]);

	return (
		//
		<Switch>
			<Route exact path="/">
				<Redirect to="/home" />
			</Route>
			{/* <Route path="/login" component={LogIn} />
			<Route path="/signup" component={SignUp} /> */}
			<Route exact path="/home">
				<Header />
				<ContainerRow>
					<SideBar location={location} />
					<ClubHomePage />
				</ContainerRow>
			</Route>
			<Route path="/club/category/:id">
				<Header />
				<ContainerRow>
					<SideBar location={location} />
					<ClubCategory />
				</ContainerRow>
			</Route>
			<Route path="/mypage/:name">
				<Header />
				<ContainerRow>
					<SideBar location={location} />
					<MyPage />
				</ContainerRow>
			</Route>
			<Route path="/club/manage/">
				<Header />
				<ContainerRow>
					<SideBar location={location} />
					<ClubManagePage />
				</ContainerRow>
			</Route>
			<Route exact path="/club/add">
				<Header />
				<ContainerRow>
					<SideBar location={location} />
					<ClubAddPage FileInput={FileInput} SingleFileInput={SingleFileInput} />
				</ContainerRow>
			</Route>
			<Route exact path="/club/detail" component={ClubDetailPage} />

			<Route component={LoginPage} path="/login" exact />
			<Route component={RegisterPage1} path="/register/1" exact />
			<Route component={RegisterPage2} path="/register/2" exact />
			<Route component={ApplyPage} path="/apply" exact />
			<Route component={ApplyPageSuccessPage} path="/apply/success" exact />
			<Route component={RecruitDetailPage} path="/recruit/detail/id" exact />
			{/* 임시적으로 id로 표현함. 나중에는 해당 게시글의 id값으로 접근 */}
			<Route component={PostDetailPage} path="/post/detail/id" exact />
			{/* 임시적으로 id로 표현함. 나중에는 해당 게시글의 id값으로 접근 */}
			<Route component={ApplicantManagePage} path="/manager/applicant" exact />
			<Route component={MemberManagePage} path="/manager/member" exact />
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
