import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container } from './styles';
const SideBar = () => {
	const [clickHomeTab, setClickHomeTab] = useState(true);
	const [clickCategoryTab, setClickCategoryTab] = useState(false);
	const [clickMyPageTab, setClickMyPageTab] = useState(false);
	const [clickModify, setClickModify] = useState(false);
	const [clickClubs, setClickClubs] = useState(false);
	const [clickApplication, setClickApplication] = useState(false);
	const [clickLikes, setClickLikes] = useState(false);
	const [clickNotify, setClickNotify] = useState(false);
	const [clickCategory, setClickCategory] = useState(false);
	const [clickCategoryOne, setClickCategoryOne] = useState(false);
	const [clickClubManageTab, setClickClubManageTab] = useState(false);

	// let location = useLocation();

	const onClickHomeTab = useCallback((e) => {
		setClickHomeTab(true);
		setClickCategoryTab(false);
		setClickMyPageTab(false);
		setClickClubManageTab(false);
	}, []);

	const onClickCategoryTab = useCallback((e) => {
		setClickCategoryTab(true);
		setClickHomeTab(false);
		setClickMyPageTab(false);
		setClickClubManageTab(false);

		setClickCategoryOne(true);
	}, []);

	const onClickCategory = useCallback((e) => {
		setClickCategory(true);
	}, []);

	const onClickCategoryOne = useCallback((e) => {}, []);

	const onClickMyPageTab = useCallback((e) => {
		setClickCategoryTab(false);
		setClickHomeTab(false);
		setClickMyPageTab(true);
		setClickClubManageTab(false);

		setClickModify(true);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(false);
		setClickNotify(false);
	}, []);

	const onClickModify = useCallback((e) => {
		setClickModify(true);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(false);
		setClickNotify(false);
	}, []);

	const onClickClubs = useCallback((e) => {
		setClickModify(false);
		setClickClubs(true);
		setClickApplication(false);
		setClickLikes(false);
		setClickNotify(false);
	}, []);

	const onClickApplication = useCallback((e) => {
		setClickModify(false);
		setClickClubs(false);
		setClickApplication(true);
		setClickLikes(false);
		setClickNotify(false);
	}, []);

	const onClickLikes = useCallback((e) => {
		setClickModify(false);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(true);
		setClickNotify(false);
	}, []);

	const onClickNotify = useCallback((e) => {
		setClickModify(false);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(false);
		setClickNotify(true);
		console.log('notify');
	}, []);

	const onClickClubManageTab = useCallback((e) => {
		setClickHomeTab(false);
		setClickCategoryTab(false);
		setClickMyPageTab(false);
		setClickClubManageTab(true);
	}, []);

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
						<Button className="category" onClick={onClickCategory}>
							카테고리 2
						</Button>
					</Link>
					<Link to="/club/category/3">
						<Button className="category" onClick={onClickCategory}>
							카테고리 3
						</Button>
					</Link>
					<Link to="/club/category/4">
						<Button className="category" onClick={onClickCategory}>
							카테고리 4
						</Button>
					</Link>
					<Link to="/club/category/5">
						<Button className="category" onClick={onClickCategory}>
							카테고리 5
						</Button>
					</Link>
					<Link to="/club/category/6">
						<Button className="category" onClick={onClickCategory}>
							카테고리 6
						</Button>
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
			<Link style={{ width: '15vw' }} to="/club/manage">
				<Button className={`${clickClubManageTab ? 'clicked' : 'not-clicked'}`} onClick={onClickClubManageTab}>
					Club Management
				</Button>
			</Link>
		</Container>
	);
};

export default SideBar;
