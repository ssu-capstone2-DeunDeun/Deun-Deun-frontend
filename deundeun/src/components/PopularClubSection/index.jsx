import { Content, Header } from 'components/RecruitingClubSection/styles';
import { ContentKorean, TitleKorean } from 'pages/ClubPage/styles';
import React from 'react';

const PopularClubSection = ({ onClickSeeAll }) => {
	return (
		//
		<>
			<Header>
				<TitleKorean>인기 동아리</TitleKorean>
				<ContentKorean
					id="popular"
					onClick={onClickSeeAll}
					style={{ marginLeft: 'auto', marginRight: '3em', cursor: 'pointer' }}
				>
					전체보기
				</ContentKorean>
			</Header>
			<Content></Content>
		</>
	);
};

export default PopularClubSection;
