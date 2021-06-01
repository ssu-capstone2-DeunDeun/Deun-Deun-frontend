import DropdownMenuSelect from 'components/common/DropdownMenuSelect';
import LoadingSpinner from 'components/common/LoadingSpinner';
import { Background } from 'pages/ClubModifyPage/styles';
import { TitleKorean } from 'pages/MyClubListPage/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { ContainerRow } from 'styles';
import {
	ContainerPage,
	HeaderContainer,
	Container,
	ClubImageContainer,
	MenuContainer,
	MenuTitle,
	DropdownContainer,
	ClubNameInput,
	DuplicateCheckButton,
	ClubInfoTextarea,
	AddHashtagButton,
	SubmitButton,
	InputButtonContainer,
	Footer,
	ImageDeleteButton,
	HashtagContainer,
	Generation,
	GenerationInput,
	Placeholder
} from './styles';
import styled from 'styled-components';
import ImageModal from 'components/modal/ImageModal/index';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClubHashtag from 'components/common/ClubHashtag/index';
import ImageUpload from 'components/common/ImageUpload/index';
import ClubImageUpload from 'components/common/ClubImageUpload/index';
import { Error } from 'pages/ApplicationAddPage/styles';

const ClubImage = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;

	background-image: url(${(props) => props.imageURL || ''});
	background-size: cover;

	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
`;

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

const ClubManagePage = ({
	onChangeInput,
	generation,
	clubNameError,
	categoryError,
	duplicateError,
	onChangeGeneration,
	onChangeItem,
	onChangeBackgroundImage,
	onChangeRepresentImage,
	onChangeClubImage,
	onChangeHashtag,
	handleDuplicate,
	backgroundImageUrl,
	representImageUrl,
	clubImages,
	onSubmit
}) => {
	const [menuIndex, setMenuIndex] = useState(-1);
	const [showImageModal, setShowImageModal] = useState(false);

	const [imageFileList, setImageFileList] = useState([]);
	const [hashtagList, setHashtagList] = useState([]);

	const [modalImageURL, setModalImageURL] = useState('');

	const [anchorEl, setAnchorEl] = useState(null);
	const ITEM_HEIGHT = 48;

	const menuOptions = ['IT / 개발', '카테고리 2', '카테고리 3', '카테고리 4', '카테고리 5'];
	const hashtagOptions = ['개발', '문화', '예술', '경제', '스포츠', '친목', '디자인', '봉사'];

	const onClickImage = useCallback(
		(e) => {
			setShowImageModal(true);
			const id = e.currentTarget.id;
			const imageURL = imageFileList[id].imageURL;
			setModalImageURL(imageURL);
		},
		[imageFileList]
	);

	const onCloseModal = useCallback(() => {
		setShowImageModal(false);
	}, []);

	const onClickAddHashtag = useCallback((e) => {
		setAnchorEl(e.currentTarget);
	}, []);

	const onSelectHashtag = (event, index) => {
		const newHashtag = {
			id: index + 1,
			name: hashtagOptions[index]
		};
		const found = hashtagList.find((hashtag) => hashtag.name === hashtagOptions[index]);
		if (!found) {
			setHashtagList(hashtagList.concat(newHashtag));
		}
		setAnchorEl(null);
	};

	const onDeleteHashtag = useCallback(
		(e) => {
			setHashtagList(hashtagList.filter((hashtag) => hashtag.id !== Number(e.target.id)));
		},
		[hashtagList]
	);

	const onCloseMenu = useCallback(() => {
		setAnchorEl(null);
	}, []);

	const onClickImageDeleteButton = useCallback((e) => {
		e.preventDefault();
		const image = e.currentTarget;
		// deleteImage(image);
	}, []);

	useEffect(() => {
		onChangeHashtag(hashtagList);
	}, [onChangeHashtag, hashtagList]);

	return (
		//
		<>
			<ContainerPage>
				<HeaderContainer>
					<TitleKorean style={{ marginBottom: '2.6em' }}>동아리 등록</TitleKorean>
				</HeaderContainer>
				<Container>
					<ClubImageContainer>
						<ClubImage imageURL={representImageUrl}>
							{/* {clubImageLoading && <LoadingSpinner size="large" />} */}
							<ClubImageUpload onChangeFile={onChangeRepresentImage} />
						</ClubImage>
					</ClubImageContainer>
					<MenuContainer>
						<MenuTitle>동아리 기수 / 카테고리</MenuTitle>
						<ContainerRow>
							<Generation>
								<GenerationInput name="generation" min="1" onChange={onChangeGeneration} value={generation} />
								<Placeholder>기</Placeholder>
							</Generation>
							<DropdownContainer>
								{menuIndex === -1 ? '카테고리를 선택해 주세요.' : `${menuOptions[menuIndex]}`}
								<DropdownMenuSelect
									options={menuOptions}
									selectedIndex={menuIndex}
									setSelectedIndex={setMenuIndex}
									onChangeItem={onChangeItem}
								></DropdownMenuSelect>
							</DropdownContainer>
						</ContainerRow>
						{categoryError && (
							<Error style={{ marginTop: '-3em', marginLeft: '1em', marginBottom: '1.58em' }}>
								* 동아리 기수 / 카테고리는 필수 입력사항 입니다.
							</Error>
						)}
						<MenuTitle>동아리 이름</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em', flex: 'none', maxWidth: '100%' }}>
							<ClubNameInput
								placeholder="동아리 이름을 입력해주세요."
								name="clubName"
								onChange={onChangeInput}
							></ClubNameInput>
							<DuplicateCheckButton onClick={handleDuplicate}>중복 검사</DuplicateCheckButton>
						</ContainerRow>
						{clubNameError && (
							<Error style={{ marginTop: '-2.4em', marginLeft: '1em', marginBottom: '.96em' }}>
								* 동아리 이름은 필수 입력사항 입니다.
							</Error>
						)}
						{duplicateError && (
							<Error style={{ marginTop: '-2.4em', marginLeft: '1.1em', marginBottom: '.96em' }}>
								이미 등록된 동아리명입니다.
							</Error>
						)}
						<MenuTitle>동아리 소개</MenuTitle>
						<ClubInfoTextarea
							name="introduction"
							onChange={onChangeInput}
							placeholder="동아리 소개를 입력해주세요."
						></ClubInfoTextarea>
						<MenuTitle>관련 태그</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<ContainerRow style={{ width: '100%', flex: 'none' }}>
								<AddHashtagButton onClick={onClickAddHashtag}>+ 태그 추가하기</AddHashtagButton>
								<Menu
									id="hashtag-menu"
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={onCloseMenu}
									PaperProps={{
										style: {
											maxHeight: ITEM_HEIGHT * 4.5,
											width: '18ch'
										}
									}}
								>
									{hashtagOptions.map((option, index) => (
										<MenuItem key={option} onClick={(event) => onSelectHashtag(event, index)}>
											{option}
										</MenuItem>
									))}
								</Menu>
								<HashtagContainer>
									{hashtagList.map((hashtag) => (
										<ClubHashtag
											key={hashtag.id}
											id={hashtag.id}
											value={hashtag.name}
											onDeleteHashtag={onDeleteHashtag}
										/>
									))}
								</HashtagContainer>
							</ContainerRow>
						</ContainerRow>
						<MenuTitle>커버 이미지 업로드</MenuTitle>
						<CoverImage imageURL={backgroundImageUrl}>
							<ImageUpload type="background" onChangeFile={onChangeBackgroundImage} multiple={false} />
						</CoverImage>
						<MenuTitle>소개 이미지 업로드</MenuTitle>
						<ContainerRow style={{ maxWidth: '100%', marginBottom: '2em', flexWrap: 'wrap', flex: 'none' }}>
							<InputButtonContainer>
								<ImageUpload onChangeFile={onChangeClubImage} multiple={true} />
							</InputButtonContainer>
							{/* 이미지 리스트 출력 */}
							{/* {Object.keys(imageFileList).map((key) => (
								<>
									<IntroImageContainer key={key}>
										<ImageDeleteButton id={imageFileList[key].id} onClick={onClickImageDeleteButton}>
											<CloseIcon style={{ width: '.9em', height: '.9em', color: '#8f8f8f' }} />
										</ImageDeleteButton>
										<IntroImage
											onClick={onClickImage}
											id={imageFileList[key].id}
											imageURL={imageFileList[key].imageURL}
										></IntroImage>
									</IntroImageContainer>
								</>
							))} */}
						</ContainerRow>
						<SubmitButton onClick={onSubmit}>동아리 등록 신청</SubmitButton>
					</MenuContainer>
				</Container>
				<ImageModal show={showImageModal} onCloseModal={onCloseModal} modalImageURL={modalImageURL} />
				<Footer />
			</ContainerPage>
		</>
	);
};

export default ClubManagePage;
