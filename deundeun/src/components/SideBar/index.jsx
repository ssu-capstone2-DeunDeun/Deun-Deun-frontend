import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container } from './styles';
const SideBar = ({ location }) => {
	const [clickHomeTab, setClickHomeTab] = useState(true);
	const [clickCategoryTab, setClickCategoryTab] = useState(false);
	const [clickMyPageTab, setClickMyPageTab] = useState(false);
	const [clickModify, setClickModify] = useState(false);
	const [clickClubs, setClickClubs] = useState(false);
	const [clickApplication, setClickApplication] = useState(false);
	const [clickLikes, setClickLikes] = useState(false);
	const [clickNotify, setClickNotify] = useState(false);
	const [clickCategoryOne, setClickCategoryOne] = useState(false);
	const [clickClubManageTab, setClickClubManageTab] = useState(false);
	const [clickClubAddTab, setClickClubAddTab] = useState(false);
	const [clickMyClubTab, setClickMyClubTab] = useState(false);

	const onClickHomeTab = useCallback((e) => {
		setHomeTab();
	});

	const onClickCategoryTab = useCallback((e) => {
		setCategoryTab();
	}, []);

	const onClickCategoryOne = useCallback((e) => {}, []);

	const onClickMyPageTab = useCallback((e) => {
		setMypageTab();
	}, []);

	const onClickModify = useCallback((e) => {
		setModifyTab();
	}, []);

	const onClickClubs = useCallback((e) => {
		setClubsTab();
	}, []);

	const onClickApplication = useCallback((e) => {
		setApplicationTab();
	}, []);

	const onClickLikes = useCallback((e) => {
		setLikesTab();
	}, []);

	const onClickNotify = useCallback((e) => {
		setNotifyTab();
	}, []);

	const onClickMyClubTab = useCallback((e) => {
		setMyClubTab();
	});

	const onClickClubManageTab = useCallback((e) => {
		setClubManageTab();
	}, []);

	const onClickClubAddTab = useCallback((e) => {
		setClubAddTab();
	}, []);

	const setHomeTab = () => {
		setClickHomeTab(true);
		setClickCategoryTab(false);
		setClickMyPageTab(false);
		setClickMyClubTab(false);
	};

	const setCategoryTab = () => {
		setClickCategoryTab(true);
		setClickHomeTab(false);
		setClickMyPageTab(false);
		setClickMyClubTab(false);

		setClickCategoryOne(true);
	};

	const setMypageTab = () => {
		setClickCategoryTab(false);
		setClickHomeTab(false);
		setClickMyPageTab(true);
		setClickMyClubTab(false);

		setClickModify(true);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(false);
		setClickNotify(false);
	};

	const setModifyTab = () => {
		setClickModify(true);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(false);
		setClickNotify(false);
	};

	const setClubsTab = () => {
		setClickModify(false);
		setClickClubs(true);
		setClickApplication(false);
		setClickLikes(false);
		setClickNotify(false);
	};

	const setApplicationTab = () => {
		setClickModify(false);
		setClickClubs(false);
		setClickApplication(true);
		setClickLikes(false);
		setClickNotify(false);
	};

	const setLikesTab = () => {
		setClickModify(false);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(true);
		setClickNotify(false);
	};

	const setNotifyTab = () => {
		setClickModify(false);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(false);
		setClickNotify(true);
	};

	const setMyClubTab = () => {
		setClickHomeTab(false);
		setClickCategoryTab(false);
		setClickMyPageTab(false);
		setClickMyClubTab(true);

		setClickClubManageTab(true);
		setClickClubAddTab(false);
	};

	const setClubManageTab = () => {
		setClickClubManageTab(true);
		setClickClubAddTab(false);
	};

	const setClubAddTab = () => {
		setClickClubManageTab(false);
		setClickClubAddTab(true);
	};

	useEffect(() => {
		// console.log(location.pathname);
		switch (location.pathname) {
			case '/club/home':
				setHomeTab();
				break;
			case '/club/category/1':
				setCategoryTab();
				break;
			case '/mypage/modify':
				setMypageTab();
				break;
			case '/mypage/clubs':
				setClubsTab();
				break;
			case '/mypage/application':
				setApplicationTab();
				break;
			case '/mypage/likes':
				setLikesTab();
				break;
			case '/mypage/notify':
				setNotifyTab();
				break;
			case '/club/manage/modify':
				setClubManageTab();
				break;
			case '/club/add':
				setClubAddTab();
				break;
			default:
				break;
		}
	}, [location]);

	return (
		//
		<Container>
			<Link style={{ width: '9.4vh' }} to="/club/home">
				<Button className={`${clickHomeTab ? 'clicked' : 'not-clicked'}`} onClick={onClickHomeTab}>
					Home
				</Button>
			</Link>
			<Link style={{ width: '9.4vh' }} to="/club/category/1">
				<Button className={`${clickCategoryTab ? 'clicked' : 'not-clicked'}`} onClick={onClickCategoryTab}>
					Category
				</Button>
			</Link>
			{clickCategoryTab && (
				<>
					<Link to="/club/category/1">
						<Button className={`${clickCategoryOne ? 'clicked-category' : 'category'}`} onClick={onClickCategoryOne}>
							IT / 개발
						</Button>
					</Link>
					<Link to="/club/category/2">
						<Button className="category">카테고리 2</Button>
					</Link>
					<Link to="/club/category/3">
						<Button className="category">카테고리 3</Button>
					</Link>
					<Link to="/club/category/4">
						<Button className="category">카테고리 4</Button>
					</Link>
					<Link to="/club/category/5">
						<Button className="category">카테고리 5</Button>
					</Link>
					<Link to="/club/category/6">
						<Button className="category">카테고리 6</Button>
					</Link>
				</>
			)}
			<Link style={{ width: '9.4vh' }} to="/mypage/modify">
				<Button className={`${clickMyPageTab ? 'clicked' : 'not-clicked'}`} onClick={onClickMyPageTab}>
					My Page
				</Button>
			</Link>
			{clickMyPageTab && (
				<>
					<Link to="/mypage/modify">
						<Button className={`${clickModify ? 'clicked-category' : 'category'}`} onClick={onClickModify}>
							내 정보 수정
						</Button>
					</Link>
					<Link to="/mypage/clubs">
						<Button className={`${clickClubs ? 'clicked-category' : 'category'}`} onClick={onClickClubs}>
							나의 동아리 목록
						</Button>
					</Link>
					<Link to="/mypage/application">
						<Button className={`${clickApplication ? 'clicked-category' : 'category'}`} onClick={onClickApplication}>
							나의 지원 목록
						</Button>
					</Link>
					<Link to="/mypage/likes">
						<Button className={`${clickLikes ? 'clicked-category' : 'category'}`} onClick={onClickLikes}>
							나의 좋아요 목록
						</Button>
					</Link>
					<Link to="/mypage/notify">
						<Button className={`${clickNotify ? 'clicked-category' : 'category'}`} onClick={onClickNotify}>
							나의 알림 신청
						</Button>
					</Link>
				</>
			)}
			<Link style={{ width: '9.4vh' }} to="/club/manage/modify">
				<Button className={`${clickMyClubTab ? 'clicked' : 'not-clicked'}`} onClick={onClickMyClubTab}>
					My Club
				</Button>
			</Link>
			{clickMyClubTab && (
				<>
					<Link style={{ width: '15vw' }} to="/club/manage/modify">
						<Button
							className={`${clickClubManageTab ? 'clicked-category' : 'category'}`}
							onClick={onClickClubManageTab}
						>
							내 동아리 관리
						</Button>
					</Link>
					<Link style={{ width: '15vw' }} to="/club/add">
						<Button className={`${clickClubAddTab ? 'clicked-category' : 'category'}`} onClick={onClickClubAddTab}>
							새 동아리 등록
						</Button>
					</Link>
				</>
			)}
		</Container>
	);
};

export default SideBar;
