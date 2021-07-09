import React, { useCallback } from 'react';
import { TitleEnglish } from './styles';
import GlobalFonts from 'fonts/fonts';
import RecruitingClubSection from 'components/RecruitingClubSection';
import PopularClubSection from 'components/PopularClubSection';
import ClubPostSection from 'components/ClubPostSection';
import { ContainerColumn, ContainerPage } from 'styles';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getClubInfo, getUserInfo } from 'modules/currentUserInfo';
const ClubHome = () => {
	const { getHome } = useSelector(({ initHomePage }) => ({
		getHome: initHomePage.getHome
	}));
	const dispatch = useDispatch();

	let popularClubDtos = null;
	let popularPostDtos = null;
	let recruitingClubDtos = null;

	if (getHome) {
		recruitingClubDtos = getHome.recruitingClubDtos;
		popularClubDtos = getHome.popularClubDtos;
		popularPostDtos = getHome.popularPostDtos;
	}
	useEffect(() => {
		dispatch(getUserInfo());
		dispatch(getClubInfo());
	}, [dispatch]);

	return (
		<>
			<ContainerPage style={{ width: '1460px' }}>
				<>
					{/* <TitleEnglish style={{ marginBottom: '3.68em' }}>HOME</TitleEnglish>
					<GlobalFonts /> */}
					<RecruitingClubSection recruitingClubDtos={recruitingClubDtos} />
					<PopularClubSection popularClubDtos={popularClubDtos} />
					<ClubPostSection popularPostDtos={popularPostDtos} />
				</>
			</ContainerPage>
		</>
	);
};

export default ClubHome;
