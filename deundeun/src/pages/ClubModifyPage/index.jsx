import React, { useEffect, useState } from 'react';
import DropdownMenu from 'components/common/DropdownMenu';
import { ContainerPage, ContainerRow } from 'styles';

import {
	Container,
	MenuContainer,
	MenuTitle,
	DropdownContainer,
	DuplicateCheckButton,
	ClubInfoTextarea,
	AddHashtagButton,
	SubmitButton,
	Footer,
	Generation,
	GenerationInput,
	Placeholder,
	InputButtonContainer,
	IntroImageContainer,
	ImageDeleteButton
} from 'pages/ClubAddPage/styles';
import { ImageButton } from 'pages/RecruitAddPage/styles';
import styled from 'styled-components';
import ImageUpload from 'components/common/ImageUpload/index';
import { useSelector } from 'react-redux';
import DropdownMenuSelect from 'components/common/DropdownMenuSelect/index';
import { Error } from 'pages/ApplicationAddPage/styles';
import { ClubName } from './styles';
const CoverImage = styled.div`
	max-width: 100%;
	height: 138px;
	margin-bottom: 1.3em;
	background-color: #f7f7f7;

	color: white;
	font-family: 'NotoSansKR';
	font-size: 1.1rem;

	background-image: url(${(props) => props.imageURL || ''});
	background-size: cover;

	display: flex;
	align-items: center;
	justify-content: center;

	flex: none;
`;

const IntroImage = styled.div`
	border: none;
	cursor: pointer;
	background-color: #f7f7f7;
	width: 100%;
	height: 100%;

	background-image: url(${(props) => props.imageURL || ''});
	background-size: cover;
`;

const ClubImage = styled.div`
	width: 345px;
	height: 345px;
	margin-right: 10em;
	background-color: #f0f0f0;

	background-image: url(${(props) => props.imageURL || ''});
	background-size: cover;

	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const ClubModifyPage = ({
	clubInfo,
	generationError,
	categoryError,
	onChangeGeneration,
	imageFileList,
	setImageFileList,
	onChangeItem,
	onChangeClubImage,
	onChangeImage,
	onDeleteImage,
	onClickImage
}) => {
	const { menuOptions } = useSelector(({ initCategory }) => ({
		menuOptions: initCategory.category
	}));
	const [menuIndex, setMenuIndex] = useState(0);

	useEffect(() => {
		switch (clubInfo.categoryType) {
			case 'IT':
				setMenuIndex(0);
				break;
			case 'HEALTH':
				setMenuIndex(1);
				break;
			case 'STARTUP':
				setMenuIndex(2);
				break;
			case 'FRIENDSHIP':
				setMenuIndex(3);
				break;
			case 'VOLUNTEER':
				setMenuIndex(4);
				break;
			case 'CULTURE':
				setMenuIndex(5);
				break;
			case 'LANGUAGE':
				setMenuIndex(6);
				break;
			case 'OTHERS':
				setMenuIndex(7);
				break;
			default:
				break;
		}
	}, [clubInfo.categoryType]);

	return (
		//
		<>
			<ContainerPage>
				<Container>
					<ClubImage imageURL={clubInfo.representImageUrl}></ClubImage>
					<MenuContainer>
						<MenuTitle>동아리 기수 / 카테고리</MenuTitle>
						<ContainerRow>
							<Generation>
								<GenerationInput
									name="generation"
									onChange={onChangeGeneration}
									min="1"
									defaultValue={clubInfo.generation || ''}
								/>
								<Placeholder>기</Placeholder>
							</Generation>
							<DropdownContainer>
								{`${menuOptions[menuIndex]}`}
								<DropdownMenuSelect
									options={menuOptions}
									selectedIndex={menuIndex}
									setSelectedIndex={setMenuIndex}
									onChangeItem={onChangeItem}
								></DropdownMenuSelect>
							</DropdownContainer>
						</ContainerRow>
						{(generationError || categoryError) && (
							<Error style={{ marginTop: '-3em', marginLeft: '1em', marginBottom: '1.58em' }}>
								* 동아리 기수 / 카테고리는 필수 입력사항 입니다.
							</Error>
						)}
						<MenuTitle>동아리 이름</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<ClubName>{clubInfo.clubName}</ClubName>
							{/* <DuplicateCheckButton>중복 검사</DuplicateCheckButton> */}
						</ContainerRow>
						<MenuTitle>동아리 소개</MenuTitle>
						<ClubInfoTextarea
							placeholder="동아리 소개를 입력해주세요."
							defaultValue={clubInfo.introduction || ''}
						></ClubInfoTextarea>
						<MenuTitle>관련 태그</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<AddHashtagButton>+ 태그 추가하기</AddHashtagButton>
							<AddHashtagButton>IT / 개발</AddHashtagButton>
							<AddHashtagButton>IT / 개발</AddHashtagButton>
						</ContainerRow>
						<MenuTitle>커버 이미지 업로드</MenuTitle>
						{/* <CoverImageContainer> */}
						{/* <Background>1920 * 348 사이즈의 커버 이미지를 등록해 주세요.</Background> */}
						<CoverImage imageURL={clubInfo.backgroundImageUrl}></CoverImage>
						{/* </CoverImageContainer> */}
						<MenuTitle>소개 이미지 업로드</MenuTitle>
						<ContainerRow style={{ maxWidth: '100%', marginBottom: '2em', flexWrap: 'wrap', flex: 'none' }}>
							<InputButtonContainer>
								<ImageUpload onChangeFile={onChangeClubImage} multiple={true} />
							</InputButtonContainer>
							{imageFileList.map((image) => (
								<div key={image}>
									<IntroImageContainer>
										<ImageDeleteButton id={image} onClick={onDeleteImage}>
											&times;
										</ImageDeleteButton>
										<IntroImage onClick={onClickImage} id={image} imageURL={image}></IntroImage>
									</IntroImageContainer>
								</div>
							))}
						</ContainerRow>
						<SubmitButton>정보 수정하기</SubmitButton>
					</MenuContainer>
				</Container>
				<Footer />
			</ContainerPage>
		</>
	);
};

export default ClubModifyPage;
