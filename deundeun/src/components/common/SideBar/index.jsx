import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { Button, Container } from './styles';
const SideBar = ({ location }) => {
	const { category } = useSelector(({ initCategory }) => ({ category: initCategory.category }));
	const [clickCategoryTab, setClickCategoryTab] = useState(false);
	const [clickMyPageTab, setClickMyPageTab] = useState(false);
	const [clickClubManageTab, setClickClubManageTab] = useState(false);

	const [addNewForm, setAddNewForm] = useState(false);

	const openMyPageTab = useCallback(() => {
		setClickCategoryTab(false);
		setClickClubManageTab(false);
		// open my page tab
		setClickMyPageTab(true);
	}, []);

	const openClubManageTab = useCallback(() => {
		setClickCategoryTab(false);
		setClickMyPageTab(false);
		// open club manage tab
		setClickClubManageTab(true);
	}, []);

	const openCategoryTab = useCallback(() => {
		setClickClubManageTab(false);
		setClickMyPageTab(false);
		// open category tab
		setClickCategoryTab(true);
	}, []);

	const closeAllTabs = useCallback(() => {
		// close all tabs
		setClickClubManageTab(false);
		setClickMyPageTab(false);
		setClickCategoryTab(false);
	}, []);

	useEffect(() => {
		switch (true) {
			case location.pathname.includes('/club/category'):
				openCategoryTab();
				break;
			case location.pathname.includes('/mypage'):
				openMyPageTab();
				break;
			case location.pathname.includes('/club/manage'):
				openClubManageTab();
				break;
			default:
				closeAllTabs();
				break;
		}
	}, [location, openCategoryTab, openClubManageTab, openMyPageTab, closeAllTabs]);

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	return (
		//
		<Container>
			<NavLink style={{ width: '9.4vh' }} to="/home">
				<Button className="tab">홈</Button>
			</NavLink>
			<NavLink
				style={{ width: '9.4vh' }}
				to={`/club/category/${category[0]}`}
				isActive={(match, location) => {
					if (location.pathname.includes('/club/category')) return true;
				}}
			>
				<Button className="tab">카테고리</Button>
			</NavLink>
			{clickCategoryTab && (
				<>
					<NavLink to={`/club/category/${category[0]}`}>
						<Button className="category">{category[0]}(개발)</Button>
					</NavLink>
					<NavLink to={`/club/category/${category[1]}`}>
						<Button className="category">{category[1]}(헬스)</Button>
					</NavLink>
					<NavLink to={`/club/category/${category[2]}`}>
						<Button className="category">{category[2]}(창업)</Button>
					</NavLink>
					<NavLink to={`/club/category/${category[3]}`}>
						<Button className="category">{category[3]}(친목)</Button>
					</NavLink>
					<NavLink to={`/club/category/${category[4]}`}>
						<Button className="category">{category[4]}(봉사)</Button>
					</NavLink>
					<NavLink to={`/club/category/${category[5]}`}>
						<Button className="category">{category[5]}(문화)</Button>
					</NavLink>
					<NavLink to={`/club/category/${category[6]}`}>
						<Button className="category">{category[6]}(어학)</Button>
					</NavLink>
					<NavLink to={`/club/category/${category[7]}`}>
						<Button className="category">{category[7]}(기타)</Button>
					</NavLink>
				</>
			)}
			<NavLink
				style={{ width: '9.4vh' }}
				to="/mypage/modify"
				isActive={(match, location) => {
					if (location.pathname.includes('/mypage')) return true;
				}}
			>
				<Button className="tab">마이페이지</Button>
			</NavLink>
			{clickMyPageTab && (
				<>
					<NavLink to="/mypage/modify">
						<Button className="category">내 정보 수정</Button>
					</NavLink>
					<NavLink to="/mypage/clubs">
						<Button className="category">가입 동아리 목록</Button>
					</NavLink>
					<NavLink to="/mypage/application">
						<Button className="category">지원 목록</Button>
					</NavLink>
					<NavLink to="/mypage/likes">
						<Button className="category">관심 목록</Button>
					</NavLink>
				</>
			)}
			<NavLink style={{ width: '9.4vh' }} to="/club/add">
				<Button className="tab">동아리 등록</Button>
			</NavLink>
			<NavLink
				style={{ width: '9.4vh' }}
				to="/club/manage/modify"
				isActive={(match, location) => {
					if (location.pathname.includes('/club/manage/')) return true;
				}}
			>
				<Button className="tab">동아리 관리</Button>
			</NavLink>
			{clickClubManageTab && (
				<>
					<NavLink style={{ width: '15vw' }} to="/club/manage/modify">
						<Button className="category">정보 수정</Button>
					</NavLink>
					<NavLink style={{ width: '15vw' }} to="/club/manage/post">
						<Button className="category">게시글 관리</Button>
					</NavLink>
					<NavLink style={{ width: '15vw' }} to="/club/manage/application">
						<Button className="category">지원서 양식</Button>
					</NavLink>
					<NavLink style={{ width: '15vw' }} to="/club/manage/recruit">
						<Button className="category">모집 공고</Button>
					</NavLink>
					<NavLink style={{ width: '15vw' }} to="/club/manage/applicant">
						<Button className="category">지원자 관리</Button>
					</NavLink>
					<NavLink style={{ width: '15vw' }} to="/club/manage/member">
						<Button className="category">멤버 관리</Button>
					</NavLink>
				</>
			)}
		</Container>
	);
};

export default SideBar;
