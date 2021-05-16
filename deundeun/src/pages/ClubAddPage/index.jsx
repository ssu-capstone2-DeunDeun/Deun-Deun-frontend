import DropdownMenu from 'components/common/DropdownMenu';
import LoadingSpinner from 'components/common/LoadingSpinner';
import { Background, CoverImage, CoverImageContainer } from 'pages/ClubModifyPage/styles';
import { TitleKorean } from 'pages/MyClubListPage/styles';
import { ImageButton } from 'pages/RecruitAddPage/styles';
import React, { useCallback, useState } from 'react';
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
	SubmitButton,
	InputButtonContainer,
	Footer
} from './styles';

const ClubManagePage = ({ FileInput }) => {
	const menuOptions = ['IT / 개발', '카테고리 2', '카테고리 3', '카테고리 4', '카테고리 5'];
	const [menuIndex, setMenuIndex] = useState(-1);
	const [imageLoading, setImageLoading] = useState(false);

	const onChangeFile = useCallback((file) => {
		console.log(file.url);
	}, []);

	return (
		//
		<>
			<ContainerPage>
				<HeaderContainer>
					<TitleKorean style={{ marginBottom: '2.6em' }}>동아리 등록</TitleKorean>
				</HeaderContainer>
				<Container>
					<ImageContainer>
						<ClubImage></ClubImage>
					</ImageContainer>
					<MenuContainer>
						<Menu>동아리 카테고리</Menu>
						<DropdownContainer>
							{menuIndex === -1 ? '카테고리를 선택해주세요.' : `${menuOptions[menuIndex]}`}
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
						</ContainerRow>
						<Menu>커버 이미지 업로드</Menu>
						<CoverImageContainer>{/* <Background /> */}</CoverImageContainer>
						<Menu>소개 이미지 업로드</Menu>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<InputButtonContainer>
								<FileInput onChangeFile={onChangeFile} setImageLoading={setImageLoading} />
							</InputButtonContainer>
							<ImageButton>{true && <LoadingSpinner />}</ImageButton>
							<ImageButton />
							<ImageButton />
						</ContainerRow>
						<SubmitButton>동아리 등록 신청</SubmitButton>
					</MenuContainer>
				</Container>
				<Footer />
			</ContainerPage>
		</>
	);
};

export default ClubManagePage;
