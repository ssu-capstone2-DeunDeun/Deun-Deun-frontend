import { ContentKorean } from 'components/ClubPostCard/styles';
import { HeaderContainer, TitleKorean } from 'pages/MyClubListPage/styles';
import { ClubListCardContainer, ClubPostCardContainer, SeeAll } from './styles';
import React from 'react';
import ClubListCard from 'components/ClubListCard';
import ClubPostCard from 'components/ClubPostCard';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ContainerColumn, ContainerPage, ContainerRow } from 'styles';

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
				<ContainerColumn style={{ marginTop: '1.75em', width: '1242px' }}>
					<TitleKorean>관심 동아리 목록</TitleKorean>
					<ContainerRow style={{ marginTop: '0.25em', width: '100%' }}>
						<ContentKorean>관심있는 동아리가 6개 있습니다.</ContentKorean>
						<SeeAll>전체보기</SeeAll>
					</ContainerRow>
				</ContainerColumn>
				<ClubListCardContainer>
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
				</ClubListCardContainer>

				<ContainerRow style={{ marginTop: '7em', width: '1242px' }}>
					<TitleKorean>관심 글 목록</TitleKorean>
					<SeeAll>전체보기</SeeAll>
				</ContainerRow>
				<ClubPostCardContainer>
					<ClubPostCard />
					<ClubPostCard />
					<ClubPostCard />
					<ClubPostCard />
				</ClubPostCardContainer>
			</ContainerPage>
		</>
	);
};

export default MyLikeListPage;
