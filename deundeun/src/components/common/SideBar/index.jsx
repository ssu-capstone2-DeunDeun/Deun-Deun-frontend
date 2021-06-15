import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button, Container } from './styles';
const SideBar = ({ location }) => {
	const { category } = useSelector(({ initCategory }) => ({ category: initCategory.category }));
	const { clubName, id } = useParams();
	const [clickHomeTab, setClickHomeTab] = useState(true);
	const [clickCategoryTab, setClickCategoryTab] = useState(false);
	const [clickMyPageTab, setClickMyPageTab] = useState(false);
	const [clickModify, setClickModify] = useState(false);
	const [clickClubs, setClickClubs] = useState(false);
	const [clickApplication, setClickApplication] = useState(false);
	const [clickLikes, setClickLikes] = useState(false);

	const [clickCategoryOne, setClickCategoryOne] = useState(false);
	const [clickCategoryTwo, setClickCategoryTwo] = useState(false);
	const [clickCategoryThree, setClickCategoryThree] = useState(false);
	const [clickCategoryFour, setClickCategoryFour] = useState(false);
	const [clickCategoryFive, setClickCategoryFive] = useState(false);
	const [clickCategorySix, setClickCategorySix] = useState(false);
	const [clickCategorySeven, setClickCategorySeven] = useState(false);
	const [clickCategoryEight, setClickCategoryEight] = useState(false);

	const [clickClubManageTab, setClickClubManageTab] = useState(false);
	const [clickClubAddTab, setClickClubAddTab] = useState(false);
	const [clickMyClubTab, setClickMyClubTab] = useState(false);
	const [clickManageApplicationTab, setClickManageApplicationtab] = useState(false);
	const [clickRecruitTab, setClickRecruitTab] = useState(false);
	const [clickApplicantTab, setClickApplicantTab] = useState(false);
	const [clickMemberTab, setClickMemberTab] = useState(false);
	const [clickClubPostTab, setClickClubPostTab] = useState(false);

	const [addNewForm, setAddNewForm] = useState(false);

	const onClickHomeTab = useCallback((e) => {
		setHomeTab();
	}, []);

	const onClickCategoryTab = useCallback((e) => {
		setCategoryTab();
	}, []);

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

	const onClickClubPostTab = useCallback(() => {
		setClubPostTab();
	}, []);

	const onClickCategoryOne = useCallback((e) => {
		setClubCategoryOne();
	}, []);
	const onClickCategoryTwo = useCallback((e) => {
		setClubCategoryTwo();
	}, []);
	const onClickCategoryThree = useCallback((e) => {
		setClubCategoryThree();
	}, []);
	const onClickCategoryFour = useCallback((e) => {
		setClubCategoryFour();
	}, []);

	const onClickCategoryFive = useCallback((e) => {
		setClubCategoryFive();
	}, []);
	const onClickCategorySix = useCallback((e) => {
		setClubCategorySix();
	}, []);
	const onClickCategorySeven = useCallback((e) => {
		setClubCategorySeven();
	}, []);
	const onClickCategoryEight = useCallback((e) => {
		setClubCategoryEight();
	}, []);

	const setClubCategoryOne = () => {
		setClickCategoryOne(true);
		setClickCategoryTwo(false);
		setClickCategoryThree(false);
		setClickCategoryFour(false);
		setClickCategoryFive(false);
		setClickCategorySix(false);
		setClickCategorySeven(false);
		setClickCategoryEight(false);
	};
	const setClubCategoryTwo = () => {
		setClickCategoryOne(false);
		setClickCategoryTwo(true);
		setClickCategoryThree(false);
		setClickCategoryFour(false);
		setClickCategoryFive(false);
		setClickCategorySix(false);
		setClickCategorySeven(false);
		setClickCategoryEight(false);
	};
	const setClubCategoryThree = () => {
		setClickCategoryOne(false);
		setClickCategoryTwo(false);
		setClickCategoryThree(true);
		setClickCategoryFour(false);
		setClickCategoryFive(false);
		setClickCategorySix(false);
		setClickCategorySeven(false);
		setClickCategoryEight(false);
	};
	const setClubCategoryFour = () => {
		setClickCategoryOne(false);
		setClickCategoryTwo(false);
		setClickCategoryThree(false);
		setClickCategoryFour(true);
		setClickCategoryFive(false);
		setClickCategorySix(false);
		setClickCategorySeven(false);
		setClickCategoryEight(false);
	};
	const setClubCategoryFive = () => {
		setClickCategoryOne(false);
		setClickCategoryTwo(false);
		setClickCategoryThree(false);
		setClickCategoryFour(false);
		setClickCategoryFive(true);
		setClickCategorySix(false);
		setClickCategorySeven(false);
		setClickCategoryEight(false);
	};
	const setClubCategorySix = () => {
		setClickCategoryOne(false);
		setClickCategoryTwo(false);
		setClickCategoryThree(false);
		setClickCategoryFour(false);
		setClickCategoryFive(false);
		setClickCategorySix(true);
		setClickCategorySeven(false);
		setClickCategoryEight(false);
	};
	const setClubCategorySeven = () => {
		setClickCategoryOne(false);
		setClickCategoryTwo(false);
		setClickCategoryThree(false);
		setClickCategoryFour(false);
		setClickCategoryFive(false);
		setClickCategorySix(false);
		setClickCategorySeven(true);
		setClickCategoryEight(false);
	};
	const setClubCategoryEight = () => {
		setClickCategoryOne(false);
		setClickCategoryTwo(false);
		setClickCategoryThree(false);
		setClickCategoryFour(false);
		setClickCategoryFive(false);
		setClickCategorySix(false);
		setClickCategorySeven(false);
		setClickCategoryEight(true);
	};

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
		setClickCategoryTwo(false);
		setClickCategoryThree(false);
		setClickCategoryFour(false);
		setClickCategoryFive(false);
		setClickCategorySix(false);
		setClickCategorySeven(false);
		setClickCategoryEight(false);
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
		setClickClubPostTab(false);
		setClickManageApplicationtab(false);
		setClickRecruitTab(false);
		setClickApplicantTab(false);
		setClickMemberTab(false);
	};

	const setClubPostTab = () => {
		setClickClubManageTab(false);
		setClickClubPostTab(true);
		setClickManageApplicationtab(false);
		setClickRecruitTab(false);
		setClickApplicantTab(false);
		setClickMemberTab(false);
	};

	const setManageApplicationTab = () => {
		setClickClubManageTab(false);
		setClickClubPostTab(false);
		setClickManageApplicationtab(true);

		setClickRecruitTab(false);
		setClickApplicantTab(false);
		setClickMemberTab(false);
	};

	const setRecruitTab = () => {
		setClickClubManageTab(false);
		setClickClubPostTab(false);
		setClickManageApplicationtab(false);

		setClickRecruitTab(true);

		setClickApplicantTab(false);
		setClickMemberTab(false);
	};

	const setApplicantTab = () => {
		setClickClubManageTab(false);
		setClickClubPostTab(false);
		setClickManageApplicationtab(false);
		setClickRecruitTab(false);

		setClickApplicantTab(true);

		setClickMemberTab(false);
	};

	const setMemberTab = () => {
		setClickClubManageTab(false);
		setClickClubPostTab(false);
		setClickManageApplicationtab(false);
		setClickRecruitTab(false);
		setClickApplicantTab(false);

		setClickMemberTab(true);
	};

	useEffect(() => {
		switch (location.pathname) {
			case '/home':
				setHomeTab();
				break;
			case '/club/category/IT':
				setCategoryTab();
				break;
			case '/club/category/HEALTH':
				setCategoryTab();
				setClubCategoryTwo();
				break;
			case '/club/category/STARTUP':
				setCategoryTab();
				setClubCategoryThree();
				break;
			case '/club/category/FRIENDSHIP':
				setCategoryTab();
				setClubCategoryFour();
				break;
			case '/club/category/VOLUNTEER':
				setCategoryTab();
				setClubCategoryFive();
				break;
			case '/club/category/CULTURE':
				setCategoryTab();
				setClubCategorySix();
				break;
			case '/club/category/LANGUAGE':
				setCategoryTab();
				setClubCategorySeven();
				break;
			case '/club/category/OTHERS':
				setCategoryTab();
				setClubCategoryEight();
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
			case '/club/manage/post':
				setMyClubTab();
				setClubPostTab();
				break;
			case '/club/manage/application':
				setMyClubTab();
				setManageApplicationTab();
				break;
			case `/application/${clubName}/${id}`:
				setMyClubTab();
				setManageApplicationTab();
				break;
			case '/application':
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
			<Link style={{ width: '9.4vh' }} to={`/club/category/${category[0]}`}>
				<Button className={`${clickCategoryTab ? 'clicked' : 'not-clicked'}`} onClick={onClickCategoryTab}>
					카테고리
				</Button>
			</Link>
			{clickCategoryTab && (
				<>
					<Link to={`/club/category/${category[0]}`}>
						<Button className={`${clickCategoryOne ? 'clicked-category' : 'category'}`} onClick={onClickCategoryOne}>
							{category[0]}(개발)
						</Button>
					</Link>
					<Link to={`/club/category/${category[1]}`}>
						<Button className={`${clickCategoryTwo ? 'clicked-category' : 'category'}`} onClick={onClickCategoryTwo}>
							{category[1]}(헬스)
						</Button>
					</Link>
					<Link to={`/club/category/${category[2]}`}>
						<Button
							className={`${clickCategoryThree ? 'clicked-category' : 'category'}`}
							onClick={onClickCategoryThree}
						>
							{category[2]}(창업)
						</Button>
					</Link>
					<Link to={`/club/category/${category[3]}`}>
						<Button className={`${clickCategoryFour ? 'clicked-category' : 'category'}`} onClick={onClickCategoryFour}>
							{category[3]}(친목)
						</Button>
					</Link>
					<Link to={`/club/category/${category[4]}`}>
						<Button className={`${clickCategoryFive ? 'clicked-category' : 'category'}`} onClick={onClickCategoryFive}>
							{category[4]}(봉사)
						</Button>
					</Link>
					<Link to={`/club/category/${category[5]}`}>
						<Button className={`${clickCategorySix ? 'clicked-category' : 'category'}`} onClick={onClickCategorySix}>
							{category[5]}(문화)
						</Button>
					</Link>
					<Link to={`/club/category/${category[6]}`}>
						<Button
							className={`${clickCategorySeven ? 'clicked-category' : 'category'}`}
							onClick={onClickCategorySeven}
						>
							{category[6]}(어학)
						</Button>
					</Link>
					<Link to={`/club/category/${category[7]}`}>
						<Button
							className={`${clickCategoryEight ? 'clicked-category' : 'category'}`}
							onClick={onClickCategoryEight}
						>
							{category[7]}(기타)
						</Button>
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
						<Button className={`${clickClubPostTab ? 'clicked-category' : 'category'}`} onClick={onClickClubPostTab}>
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
