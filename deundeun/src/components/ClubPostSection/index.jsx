import React from 'react';
import { Content, Header } from 'components/RecruitingClubSection/styles';
import { ContentKorean, TitleKorean } from 'pages/ClubPage/styles';

const ClubPostSection = ({ onClickSeeAll }) => {
	return (
		//
		<>
			<Header>
				<TitleKorean>동아리 게시글</TitleKorean>
				<ContentKorean
					id="posts"
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

export default ClubPostSection;
