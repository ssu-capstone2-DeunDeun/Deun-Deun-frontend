import React from 'react';
import { Content } from 'pages/MyClubListPage/styles';
import { ContentKorean } from 'components/ClubPostCard/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClubListCard from 'components/ClubListCard';
import { TitleEnglish, ContentContainer, CardContainer } from './styles';
import { ContainerPage } from 'styles';
const CategoryITPage = () => {
	return (
		<>
			<ContainerPage>
				<ContentContainer>
					<TitleEnglish>IT / 개발</TitleEnglish>
					<Content style={{ marginLeft: 'auto', marginRight: '4em', marginTop: 'auto' }}>
						<CheckCircleOutlineIcon style={{ marginRight: '0.5em' }} />
						<ContentKorean>모집중인 동아리만 보기</ContentKorean>
					</Content>
				</ContentContainer>
				<CardContainer>
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
				</CardContainer>
			</ContainerPage>
		</>
	);
};

export default CategoryITPage;
