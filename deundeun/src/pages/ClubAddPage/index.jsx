import DropdownMenu from 'components/common/DropdownMenu';
import LoadingSpinner from 'components/common/LoadingSpinner';
import { Background, CoverImage, CoverImageContainer } from 'pages/ClubModifyPage/styles';
import { TitleKorean } from 'pages/MyClubListPage/styles';
import React, { useCallback, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { ContainerPage, ContainerRow } from 'styles';
import {
	HeaderContainer,
	Container,
	ClubImageContainer,
	MenuContainer,
	Menu,
	DropdownContainer,
	ClubNameInput,
	DuplicateCheckButton,
	ClubInfoTextarea,
	AddHashtagButton,
	SubmitButton,
	InputButtonContainer,
	Footer,
	ImageDeleteButton,
	ClubImageUploadButton
} from './styles';
import styled from 'styled-components';

const ClubImage = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;

	display: flex;

	/* background-image: url(${(props) => props.imageURL || ''});
	background-size: cover; */
`;

const UploadedImage = styled.div`
	border: none;
	cursor: pointer;
	background-color: #f7f7f7;
	width: 122px;
	height: 122px;

	margin-right: 0.5em;
	margin-top: 1em;
	margin-bottom: 4em;

	background-image: url(${(props) => props.imageURL || ''});
	background-size: cover;
`;

const ClubManagePage = ({ FileInput }) => {
	const menuOptions = ['IT / 개발', '카테고리 2', '카테고리 3', '카테고리 4', '카테고리 5'];
	const [menuIndex, setMenuIndex] = useState(-1);
	const [imageIndex, setImageIndex] = useState(1);
	const [imageLoading, setImageLoading] = useState(false);

	const [imageFileList, setImageFileList] = useState({});

	const onChangeFile = (image) => {
		if (image.url) {
			updateImage(image);
		} else return;
	};

	const onUploadClubImage = useCallback(() => {
		console.log('club image upload');
	}, []);

	const onClickImageDeleteButton = useCallback((e) => {
		e.preventDefault();
		const image = e.currentTarget;
		deleteImage(image);
	}, []);

	const updateImage = (image) => {
		setImageFileList((images) => {
			const updated = { ...images };
			updated[image.id] = image;
			return updated;
		});
	};

	const deleteImage = (image) => {
		setImageFileList((images) => {
			const updated = { ...images };
			delete updated[image.id];
			return updated;
		});
	};

	return (
		//
		<>
			<ContainerPage>
				<HeaderContainer>
					<TitleKorean style={{ marginBottom: '2.6em' }}>동아리 등록</TitleKorean>
				</HeaderContainer>
				<Container>
					<ClubImageContainer>
						<ClubImage>
							<ClubImageUploadButton onClick={onUploadClubImage}>+</ClubImageUploadButton>
						</ClubImage>
					</ClubImageContainer>
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
								<FileInput
									onChangeFile={onChangeFile}
									setImageLoading={setImageLoading}
									imageIndex={imageIndex}
									setImageIndex={setImageIndex}
								/>
							</InputButtonContainer>
							{Object.keys(imageFileList).map((key) => (
								<>
									<UploadedImage key={key} id={imageFileList[key].id} imageURL={imageFileList[key].url}>
										<ImageDeleteButton key={key} id={imageFileList[key].id} onClick={onClickImageDeleteButton}>
											<CloseIcon style={{ width: '.9em', height: '.9em', color: '#8f8f8f' }} />
										</ImageDeleteButton>
									</UploadedImage>
								</>
							))}
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
