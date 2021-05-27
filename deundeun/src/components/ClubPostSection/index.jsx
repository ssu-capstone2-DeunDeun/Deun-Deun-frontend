import React from 'react';
import { Content, Header, CardContainer } from './styles';
import { TitleKorean } from 'components/RecruitingClubSection/styles';
import ClubPostCard from 'components/ClubPostCard';
import { ContentKorean } from 'components/PopularClubSection/styles';

const ClubPostSection = ({ onClickSeeAll }) => {
	return (
		//
		<>
			<Header>
				<TitleKorean>인기 게시글</TitleKorean>
				<ContentKorean id="posts" onClick={onClickSeeAll}>
					전체보기
				</ContentKorean>
			</Header>
			<CardContainer>
				<Content>
					<ClubPostCard />
					<ClubPostCard />
					<ClubPostCard />
					<ClubPostCard />
				</Content>
			</CardContainer>
		</>
	);
};

export default ClubPostSection;
