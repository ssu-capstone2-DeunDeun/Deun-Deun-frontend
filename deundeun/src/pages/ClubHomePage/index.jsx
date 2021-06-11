import React, { useCallback } from 'react';
import { TitleEnglish } from './styles';
import GlobalFonts from 'fonts/fonts';
import RecruitingClubSection from 'components/RecruitingClubSection';
import PopularClubSection from 'components/PopularClubSection';
import ClubPostSection from 'components/ClubPostSection';
import { ContainerColumn, ContainerPage } from 'styles';
import { useSelector } from 'react-redux';
const ClubHome = () => {
	const onClickSeeAll = useCallback((e) => {
		console.log('see all');
	}, []);

	const { getHome } = useSelector(({ initHomePage }) => ({
		getHome: initHomePage.getHome,
	}))


	let popularClubDtos = null;
	let popularPostDtos = null;
	let recruitingClubDtos = null;

	if (getHome) {
		recruitingClubDtos = getHome.recruitingClubDtos;
		popularClubDtos = getHome.popularClubDtos;
		popularPostDtos = getHome.popularPostDtos;
	}

	return (
		<>
			<ContainerPage style={{ width: '1460px' }}>
				<>
					{/* <TitleEnglish style={{ marginBottom: '3.68em' }}>HOME</TitleEnglish>
					<GlobalFonts /> */}
					<RecruitingClubSection recruitingClubDtos={recruitingClubDtos} onClickSeeAll={onClickSeeAll} />
					<PopularClubSection popularClubDtos={popularClubDtos} onClickSeeAll={onClickSeeAll} />
					<ClubPostSection popularPostDtos={popularPostDtos} onClickSeeAll={onClickSeeAll} />
				</>
			</ContainerPage>
		</>
	);
};

export default ClubHome;

