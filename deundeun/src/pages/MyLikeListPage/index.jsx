import { ContentKorean } from 'components/ClubPostCard/styles';
import { ContentContainer, TitleKorean } from 'pages/MyClubListPage/styles';
import { ClubListCardContainer, ClubPostCardContainer } from './styles';
import React from 'react';
import ClubListCard from 'components/ClubListCard';
import ClubPostCard from 'components/ClubPostCard';
import { ContainerPage } from 'styles';

const MyLikeListPage = () => {
	return (
		//
		<>
			<ContainerPage>
				<TitleKorean>관심있는 동아리</TitleKorean>
				<ContentContainer>
					<ContentKorean>관심있는 동아리가 2개 있습니다.</ContentKorean>
				</ContentContainer>
				<ClubListCardContainer>
					<ClubListCard />
					<ClubListCard />
				</ClubListCardContainer>

				<TitleKorean style={{ marginTop: '3.69em' }}>관심있는 게시글</TitleKorean>
				<ContentContainer>
					<ContentKorean>관심있는 게시글이 2개 있습니다.</ContentKorean>
				</ContentContainer>
				<ClubPostCardContainer>
					<ClubPostCard />
					<ClubPostCard />
					<ClubPostCard />
				</ClubPostCardContainer>
			</ContainerPage>
		</>
	);
};

export default MyLikeListPage;
