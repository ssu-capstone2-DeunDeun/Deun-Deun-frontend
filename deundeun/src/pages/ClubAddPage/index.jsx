import DropdownMenu from 'components/common/DropdownMenu';
import LoadingSpinner from 'components/common/LoadingSpinner';
import { Background, CoverImage, CoverImageContainer } from 'pages/ClubModifyPage/styles';
import { TitleKorean } from 'pages/MyClubListPage/styles';
import React, { useCallback, useMemo, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
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
	IntroImageContainer,
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

const IntroImage = styled.div`
	border: none;
	cursor: pointer;
	background-color: #f7f7f7;
	width: 100%;
	height: 100%;

	background-image: url(${(props) => props.imageURL || ''});
	background-size: cover;
`;

const ClubManagePage = ({ FileInput, SingleFileInput }) => {
	const menuOptions = ['IT / 개발', '카테고리 2', '카테고리 3', '카테고리 4', '카테고리 5'];
	const [menuIndex, setMenuIndex] = useState(-1);
	const [imageIndex, setImageIndex] = useState(1);
	const [imageLoading, setImageLoading] = useState(false);
	const [clubImageLoading, setClubImageLoading] = useState(false);
	const [showImageModal, setShowImageModal] = useState(false);

	const [generation, setGeneration] = useState('');
	const [imageFileList, setImageFileList] = useState([]);
	const [hashtagList, setHashtagList] = useState([]);

	const [clubImageURL, setClubImageURL] = useState('');
	const [coverImageURL, setCoverImageURL] = useState('');
	const [modalImageURL, setModalImageURL] = useState('');

	const [anchorEl, setAnchorEl] = useState(null);

	const ITEM_HEIGHT = 48;
	const hashtagOptions = ['개발', '디자인', '경제 / 경영', '스포츠', '어학', '친목', '봉사', '취업'];

	const onChangeGeneration = (e) => {
		if (Number(e.target.value) > 0 && Number(e.target.value <= 999)) {
			setGeneration(e.target.value);
		} else {
			setGeneration('');
		}
	};

	const onChangeClubImage = (image) => {
		if (image.imageURL) {
			setClubImageURL(image.imageURL);
		} else return;
	};

	const onChangeFile = (image) => {
		if (image.imageURL) {
			updateImage(image);
		} else return;
	};

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
			setHashtagList(hashtagList.filter((hashtag) => hashtag.name !== e.target.id));
		},
		[hashtagList]
	);

	const onCloseMenu = useCallback(() => {
		setAnchorEl(null);
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
						<ClubImage imageURL={clubImageURL}>
							{clubImageLoading && <LoadingSpinner size="large" />}
							<SingleFileInput onChangeFile={onChangeClubImage} setImageLoading={setClubImageLoading} />
						</ClubImage>
					</ClubImageContainer>
					<MenuContainer>
						<MenuTitle>동아리 기수 / 카테고리</MenuTitle>
						<ContainerRow>
							<Generation>
								<GenerationInput min="1" onChange={onChangeGeneration} value={generation} />
								<Placeholder>기</Placeholder>
							</Generation>
							<DropdownContainer>
								{menuIndex === -1 ? '카테고리를 선택해주세요.' : `${menuOptions[menuIndex]}`}
								<DropdownMenu
									options={menuOptions}
									selectedIndex={menuIndex}
									setSelectedIndex={setMenuIndex}
								></DropdownMenu>
							</DropdownContainer>
						</ContainerRow>

						<MenuTitle>동아리 이름</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em', flex: 'none', maxWidth: '100%' }}>
							<ClubNameInput placeholder="동아리 이름을 입력해주세요."></ClubNameInput>
							<DuplicateCheckButton>중복 검사</DuplicateCheckButton>
						</ContainerRow>
						<MenuTitle>동아리 소개</MenuTitle>
						<ClubInfoTextarea placeholder="동아리 소개를 입력해주세요."></ClubInfoTextarea>
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
											key={hashtag.name}
											id={hashtag.name}
											value={hashtag.name}
											onDeleteHashtag={onDeleteHashtag}
										/>
									))}
								</HashtagContainer>
							</ContainerRow>
						</ContainerRow>
						<MenuTitle>커버 이미지 업로드</MenuTitle>
						<CoverImageContainer>{/* <Background /> */}</CoverImageContainer>
						<MenuTitle>소개 이미지 업로드</MenuTitle>
						<ContainerRow style={{ maxWidth: '100%', marginBottom: '2em', flexWrap: 'wrap', flex: 'none' }}>
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
									{/* 나중에 컴포넌트 하나로 빼는 작업 필요(key prop warning) */}
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
							))}
						</ContainerRow>
						<SubmitButton>동아리 등록 신청</SubmitButton>
					</MenuContainer>
				</Container>
				<ImageModal show={showImageModal} onCloseModal={onCloseModal} modalImageURL={modalImageURL} />
				<Footer />
			</ContainerPage>
		</>
	);
};

export default ClubManagePage;
