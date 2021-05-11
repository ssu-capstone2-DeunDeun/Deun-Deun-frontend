import { ContentKorean } from 'components/ClubPostCard/styles';
import { ContentContainer, HeaderContainer, TitleKorean } from 'pages/MyClubListPage/styles';
import { ClubListCardContainer, ClubPostCardContainer } from './styles';
import React from 'react';
import ClubListCard from 'components/ClubListCard';
import ClubPostCard from 'components/ClubPostCard';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ContainerPage } from 'styles';

const MyLikeListPage = () => {
	return (
		//
		<>
			<ContainerPage>
				<HeaderContainer>
					<ContentKorean>마이페이지</ContentKorean>
					<ChevronRightIcon />
					<ContentKorean>관심 목록</ContentKorean>
				</HeaderContainer>
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
