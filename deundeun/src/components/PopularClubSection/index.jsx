import { ContentKorean, TitleKorean } from 'pages/ClubPage/styles';
import PopularClubCard from 'components/PopularClubCard';
import React from 'react';
import { Header, Content } from './styles';

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
			<Content>
				<PopularClubCard />
				<PopularClubCard />
				<PopularClubCard />
				<PopularClubCard />
			</Content>
		</>
	);
};

export default PopularClubSection;
