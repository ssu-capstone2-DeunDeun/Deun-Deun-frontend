import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container } from './styles';
const SideBar = ({ location }) => {
	const { category } = useSelector(({ initCategory }) => ({ category: initCategory.category }));
	// 영어를 한국어로 바꾸는 것이 좋다고 판단하여, 해당 상태는 수정합니다.
	const [clickHomeTab, setClickHomeTab] = useState(true);
	const [clickCategoryTab, setClickCategoryTab] = useState(false);
	const [clickMyPageTab, setClickMyPageTab] = useState(false);
	const [clickModify, setClickModify] = useState(false);
	const [clickClubs, setClickClubs] = useState(false);
	const [clickApplication, setClickApplication] = useState(false);
	const [clickLikes, setClickLikes] = useState(false);
	const [clickCategoryOne, setClickCategoryOne] = useState(false);
	const [clickClubManageTab, setClickClubManageTab] = useState(false);
	const [clickClubAddTab, setClickClubAddTab] = useState(false);
	const [clickMyClubTab, setClickMyClubTab] = useState(false);
	const [clickManageApplicationTab, setClickManageApplicationtab] = useState(false);
	const [clickRecruitTab, setClickRecruitTab] = useState(false);
	const [clickApplicantTab, setClickApplicantTab] = useState(false);
	const [clickMemberTab, setClickMemberTab] = useState(false);

	const [addNewForm, setAddNewForm] = useState(false);

	const onClickHomeTab = useCallback((e) => {
		setHomeTab();
	}, []);

	const onClickCategoryTab = useCallback((e) => {
		setCategoryTab();
	}, []);

	const onClickCategoryOne = useCallback((e) => { }, []);

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

	const onClickMyClubTab = useCallback((e) => {
		setMyClubTab();
	}, []);

	const onClickClubManageTab = useCallback((e) => {
		setClubManageTab();
	}, []);

	const onClickClubAddTab = useCallback((e) => {
		setClubAddTab();
	}, []);

	const onClickManageApplicationTab = useCallback(() => {
		setManageApplicationTab();
	}, []);

	const onClickRecruitTab = useCallback(() => {
		setRecruitTab();
	}, []);

	const onClickApplicantTab = useCallback(() => {
		setApplicantTab();
	}, []);

	const onClickMemberTab = useCallback(() => {
		setMemberTab();
	}, []);

	const setHomeTab = () => {
		setClickHomeTab(true);
		setClickCategoryTab(false);
		setClickMyPageTab(false);
		setClickMyClubTab(false);
		setClickClubAddTab(false);
	};

	const setCategoryTab = () => {
		setClickCategoryTab(true);
		setClickHomeTab(false);
		setClickMyPageTab(false);
		setClickMyClubTab(false);
		setClickClubAddTab(false);

		setClickCategoryOne(true);
	};

	const setMypageTab = () => {
		setClickCategoryTab(false);
		setClickHomeTab(false);
		setClickMyPageTab(true);
		setClickMyClubTab(false);
		setClickClubAddTab(false);

		setClickModify(true);
		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(false);
	};

	const setModifyTab = () => {
		setClickModify(true);

		setClickClubs(false);
		setClickApplication(false);
		setClickLikes(false);
	};

	const setClubsTab = () => {
		setClickModify(false);

		setClickClubs(true);

		setClickApplication(false);
		setClickLikes(false);
	};

	const setApplicationTab = () => {
		setClickModify(false);
		setClickClubs(false);
		setClickApplication(true);
		setClickLikes(false);
	};

	const setLikesTab = () => {
		setClickModify(false);
		setClickClubs(false);
		setClickApplication(false);

		setClickLikes(true);
	};

	const setClubAddTab = () => {
		setClickHomeTab(false);
		setClickCategoryTab(false);
		setClickMyPageTab(false);
		setClickMyClubTab(false);
		setClickClubManageTab(false);

		setClickClubAddTab(true);
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
		setClickManageApplicationtab(false);
		setClickRecruitTab(false);
		setClickApplicantTab(false);
		setClickMemberTab(false);
	};

	const setManageApplicationTab = () => {
		setClickClubManageTab(false);

		setClickManageApplicationtab(true);

		setClickRecruitTab(false);
		setClickApplicantTab(false);
		setClickMemberTab(false);
	};

	const setRecruitTab = () => {
		setClickClubManageTab(false);
		setClickManageApplicationtab(false);

		setClickRecruitTab(true);

		setClickApplicantTab(false);
		setClickMemberTab(false);
	};

	const setApplicantTab = () => {
		setClickClubManageTab(false);
		setClickManageApplicationtab(false);
		setClickRecruitTab(false);

		setClickApplicantTab(true);

		setClickMemberTab(false);
	};

	const setMemberTab = () => {
		setClickClubManageTab(false);
		setClickManageApplicationtab(false);
		setClickRecruitTab(false);
		setClickApplicantTab(false);
		setClickMemberTab(true);
	};

	useEffect(() => {
		// console.log(location.pathname);
		switch (location.pathname) {
			case '/home':
				setHomeTab();
				break;
			case '/club/category/1':
				setCategoryTab();
				break;
			case '/mypage/modify':
				setMypageTab();
				break;
			case '/mypage/clubs':
				setMypageTab();
				setClubsTab();
				break;
			case '/mypage/application':
				setMypageTab();
				setApplicationTab();
				break;
			case '/mypage/likes':
				setMypageTab();
				setLikesTab();
				break;
			case '/club/add':
				setClubAddTab();
				break;
			case '/club/manage/modify':
				setMyClubTab();
				setClubManageTab();
				break;
			case '/club/manage/application':
				setMyClubTab();
				setManageApplicationTab();
				break;
			case '/club/manage/application/new':
				setMyClubTab();
				setManageApplicationTab();
				break;
			case '/club/manage/recruit':
				setMyClubTab();
				setRecruitTab();
				break;
			case '/club/manage/recruit/new':
				setMyClubTab();
				setRecruitTab();
				break;
			case '/club/manage/applicant':
				setMyClubTab();
				setApplicantTab();
				break;
			case '/club/manage/member':
				setMyClubTab();
				setMemberTab();
				break;
			default:
				break;
		}
	}, [location]);

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	return (
		//
		<Container>
			<Link style={{ width: '9.4vh' }} to="/home">
				<Button className={`${clickHomeTab ? 'clicked' : 'not-clicked'}`} onClick={onClickHomeTab}>
					홈
				</Button>
			</Link>
			<Link style={{ width: '9.4vh' }} to="/club/category/1">
				<Button className={`${clickCategoryTab ? 'clicked' : 'not-clicked'}`} onClick={onClickCategoryTab}>
					카테고리
				</Button>
			</Link>
			{clickCategoryTab && (
				<>
					<Link to="/club/category/1">
						<Button className={`${clickCategoryOne ? 'clicked-category' : 'category'}`} onClick={onClickCategoryOne}>
							{category[0]}(개발)
						</Button>
					</Link>
					<Link to="/club/category/2">
						<Button className="category">{category[1]}(헬스)</Button>
					</Link>
					<Link to="/club/category/3">
						<Button className="category">{category[2]}(창업)</Button>
					</Link>
					<Link to="/club/category/4">
						<Button className="category">{category[3]}(친목)</Button>
					</Link>
					<Link to="/club/category/5">
						<Button className="category">{category[4]}(봉사)</Button>
					</Link>
					<Link to="/club/category/6">
						<Button className="category">{category[5]}(문화)</Button>
					</Link>
					<Link to="/club/category/7">
						<Button className="category">{category[6]}(어학)</Button>
					</Link>
					<Link to="/club/category/8">
						<Button className="category">{category[7]}(기타)</Button>
					</Link>
				</>
			)}
			<Link style={{ width: '9.4vh' }} to="/mypage/modify">
				<Button className={`${clickMyPageTab ? 'clicked' : 'not-clicked'}`} onClick={onClickMyPageTab}>
					마이페이지
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
							가입 동아리 목록
						</Button>
					</Link>
					<Link to="/mypage/application">
						<Button className={`${clickApplication ? 'clicked-category' : 'category'}`} onClick={onClickApplication}>
							지원 목록
						</Button>
					</Link>
					<Link to="/mypage/likes">
						<Button className={`${clickLikes ? 'clicked-category' : 'category'}`} onClick={onClickLikes}>
							관심 목록
						</Button>
					</Link>
				</>
			)}
			<Link style={{ width: '9.4vh' }} to="/club/add">
				<Button className={`${clickClubAddTab ? 'clicked' : 'not-clicked'}`} onClick={onClickClubAddTab}>
					동아리 등록
				</Button>
			</Link>
			<Link style={{ width: '9.4vh' }} to="/club/manage/modify">
				<Button className={`${clickMyClubTab ? 'clicked' : 'not-clicked'}`} onClick={onClickMyClubTab}>
					동아리 관리
				</Button>
			</Link>
			{clickMyClubTab && (
				<>
					<Link style={{ width: '15vw' }} to="/club/manage/modify">
						<Button
							className={`${clickClubManageTab ? 'clicked-category' : 'category'}`}
							onClick={onClickClubManageTab}
						>
							정보 수정
						</Button>
					</Link>
					<Link style={{ width: '15vw' }} to="/club/manage/post">
						<Button
							className={`${clickClubManageTab ? 'clicked-category' : 'category'}`}
							onClick={onClickClubManageTab}
						>
							게시글 관리
						</Button>
					</Link>
					<Link style={{ width: '15vw' }} to="/club/manage/application">
						<Button
							className={`${clickManageApplicationTab ? 'clicked-category' : 'category'}`}
							onClick={onClickManageApplicationTab}
						>
							지원서 양식
						</Button>
					</Link>
					<Link style={{ width: '15vw' }} to="/club/manage/recruit">
						<Button className={`${clickRecruitTab ? 'clicked-category' : 'category'}`} onClick={onClickRecruitTab}>
							모집 공고
						</Button>
					</Link>
					<Link style={{ width: '15vw' }} to="/club/manage/applicant">
						<Button className={`${clickApplicantTab ? 'clicked-category' : 'category'}`} onClick={onClickApplicantTab}>
							지원자 관리
						</Button>
					</Link>
					<Link style={{ width: '15vw' }} to="/club/manage/member">
						<Button className={`${clickMemberTab ? 'clicked-category' : 'category'}`} onClick={onClickMemberTab}>
							멤버 관리
						</Button>
					</Link>
				</>
			)}
		</Container>
	);
};

export default SideBar;
