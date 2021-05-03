import { ContentKorean } from 'components/ClubPostCard/styles';
import { TitleKorean } from 'pages/MyClubListPage/styles';
import React from 'react';
import { HeaderContainer, Container, ImageContainer, MenuContainer, ClubImage, Menu } from './styles';

const ClubManagePage = () => {
	return (
		//
		<>
			<HeaderContainer>
				<TitleKorean style={{ marginBottom: '1.12vh' }}>동아리 관리</TitleKorean>
				<ContentKorean style={{ marginBottom: '3.31vh' }}>동아리 추가하기</ContentKorean>
			</HeaderContainer>
			<Container>
				<ImageContainer>
					<ClubImage></ClubImage>
				</ImageContainer>
				<MenuContainer>
					<Menu>동아리 카테고리</Menu>
					<Menu>동아리 이름</Menu>
					<Menu>동아리 소개</Menu>
					<Menu>관련 태그</Menu>
					<Menu>이미지 업로드</Menu>
				</MenuContainer>
			</Container>
		</>
	);
};

export default ClubManagePage;
