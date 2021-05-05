import React, { useState } from 'react';
import { ContentKorean } from 'components/ClubPostCard/styles';
import DropdownMenu from 'components/DropdownMenu';
import { TitleKorean } from 'pages/MyClubListPage/styles';
import { ContainerPage, ContainerRow } from 'styles';
import {
	HeaderContainer,
	Container,
	ImageContainer,
	MenuContainer,
	ClubImage,
	Menu,
	DropdownContainer,
	ClubNameInput,
	DuplicateCheckButton,
	ClubInfoTextarea,
	AddHashtagButton,
	SubmitButton
} from 'pages/ClubAddPage/styles';
import { ImageButton } from 'pages/RecruitAddPage/styles';

const ClubModifyPage = () => {
	const menuOptions = ['IT / 개발', '카테고리 2', '카테고리 3', '카테고리 4', '카테고리 5'];
	const [menuIndex, setMenuIndex] = useState(0);

	return (
		//
		<>
			<ContainerPage>
				<Container>
					<ImageContainer>
						<ClubImage></ClubImage>
					</ImageContainer>
					<MenuContainer>
						<Menu>동아리 카테고리</Menu>
						<DropdownContainer>
							{`${menuOptions[menuIndex]}`}
							<DropdownMenu
								options={menuOptions}
								selectedIndex={menuIndex}
								setSelectedIndex={setMenuIndex}
							></DropdownMenu>
						</DropdownContainer>
						<Menu>동아리 이름</Menu>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<ClubNameInput placeholder="동아리 이름을 입력해주세요."></ClubNameInput>
							<DuplicateCheckButton>중복 검사</DuplicateCheckButton>
						</ContainerRow>
						<Menu>동아리 소개</Menu>
						<ClubInfoTextarea placeholder="동아리 소개를 입력해주세요."></ClubInfoTextarea>
						<Menu>관련 태그</Menu>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<AddHashtagButton>+ 태그 추가하기</AddHashtagButton>
							<AddHashtagButton>IT / 개발</AddHashtagButton>
							<AddHashtagButton>IT / 개발</AddHashtagButton>
						</ContainerRow>
						<Menu>이미지 업로드</Menu>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<ImageButton />
							<ImageButton />
							<ImageButton />
						</ContainerRow>
						<SubmitButton>정보 수정하기</SubmitButton>
					</MenuContainer>
				</Container>
			</ContainerPage>
		</>
	);
};

export default ClubModifyPage;
