import { TitleEnglish } from 'pages/ClubHomePage/styles';
import React from 'react';
import { ContentContainer, Content } from 'pages/MyClubListPage/styles';
import { ContentKorean } from 'components/ClubPostCard/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClubListCard from 'components/ClubListCard';
import { CardContainer } from './styles';
import { ContainerPage } from 'styles';
const CategoryITPage = () => {
	return (
		//
		<>
			<ContainerPage>
				<TitleEnglish>IT / 개발</TitleEnglish>
				<ContentContainer>
					<ContentKorean>123개의 동아리가 있습니다.</ContentKorean>
					<Content style={{ marginLeft: 'auto', marginRight: '4em' }}>
						<CheckCircleOutlineIcon style={{ marginRight: '0.5em' }} />
						<ContentKorean>모집중인 동아리</ContentKorean>
					</Content>
				</ContentContainer>
				<CardContainer>
					<ClubListCard />
					<ClubListCard />
					<ClubListCard />
				</CardContainer>
			</ContainerPage>
		</>
	);
};

export default CategoryITPage;
