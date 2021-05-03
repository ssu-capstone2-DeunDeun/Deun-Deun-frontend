import React, { useCallback } from 'react';
import { Container, TitleEnglish } from './styles';
import GlobalFonts from 'fonts/fonts';
import RecruitingClubSection from 'components/RecruitingClubSection';
import PopularClubSection from 'components/PopularClubSection';
import ClubPostSection from 'components/ClubPostSection';
import SideBar from 'components/SideBar';
import Header from 'components/Header';
const ClubHome = () => {
	const onClickSeeAll = useCallback((e) => {
		console.log('see all');
	}, []);

	return (
		//
		<>
			<Container>
				<>
					<TitleEnglish style={{ marginBottom: '3.68em' }}>HOME</TitleEnglish>
					<GlobalFonts />
					<RecruitingClubSection onClickSeeAll={onClickSeeAll} />
					<PopularClubSection onClickSeeAll={onClickSeeAll} />
					<ClubPostSection onClickSeeAll={onClickSeeAll} />
				</>
			</Container>
		</>
	);
};

export default ClubHome;
