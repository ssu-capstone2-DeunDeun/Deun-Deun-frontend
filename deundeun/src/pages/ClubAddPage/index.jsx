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
	Placeholder,
	IntroImageContainer
} from './styles';
import styled from 'styled-components';
import ImageModal from 'components/modal/ImageModal/index';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClubHashtag from 'components/common/ClubHashtag/index';
import ImageUpload from 'components/common/ImageUpload/index';
import ClubImageUpload from 'components/common/ClubImageUpload/index';
import { Error } from 'pages/ApplicationAddPage/styles';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { Prompt, useHistory } from 'react-router';
import { initializeInfo } from 'modules/clubAddInfo';

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
	generationError,
	clubName,
	clubNameError,
	categoryError,

	isDuplicate,
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
	onDeleteImage,
	onSubmit,
	submitError,
	setSubmitError,
	onCloseSnackbar,
	clubImageLoading
}) => {
	const [menuIndex, setMenuIndex] = useState(-1);
	const [showImageModal, setShowImageModal] = useState(false);
	const [hashtagError, setHashtagError] = useState(false);

	const [imageFileList, setImageFileList] = useState([]);
	const [hashtagList, setHashtagList] = useState([]);

	const [modalImageURL, setModalImageURL] = useState('');

	const [anchorEl, setAnchorEl] = useState(null);
	const ITEM_HEIGHT = 48;

	const dispatch = useDispatch();
	const history = useHistory();

	const [whenState, setWhenState] = useState(true);

	// const { menuOptions } = useSelector(({ initCategory }) => ({
	// 	menuOptions: initCategory.category
	// }));
	const menuOptions = [
		'IT(개발)',
		'HEALTH(헬스)',
		'STARTUP(창업)',
		'FRIENDSHIP(친목)',
		'VOLUNTEER(봉사)',
		'CULTURE(문화)',
		'LANGUAGE(어학)',
		'OTHERS(기타)'
	];
	const hashtagOptions = ['개발', '문화', '예술', '경제', '스포츠', '친목', '디자인', '봉사'];

	const onClickImage = useCallback((e) => {
		e.preventDefault();
		setShowImageModal(true);
		setModalImageURL(e.target.id);
	}, []);

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
		} else {
			setHashtagError(true);
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

	const handleHashtagAlert = useCallback(() => {
		setHashtagError(false);
	}, []);

	useEffect(() => {
		onChangeHashtag(hashtagList);
	}, [onChangeHashtag, hashtagList]);

	useEffect(() => {
		return () => {
			dispatch(initializeInfo());
		};
	}, [dispatch]);

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
						{(generationError || categoryError) && (
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
						{isDuplicate === true && clubName && (
							<Error style={{ marginTop: '-2.4em', marginLeft: '1.1em', marginBottom: '.96em' }}>
								이미 등록된 동아리명입니다.
							</Error>
						)}
						{isDuplicate === false && clubName && (
							<Error style={{ marginTop: '-2.4em', marginLeft: '1em', marginBottom: '.96em', color: '#2940d3' }}>
								사용 가능한 동아리명입니다!
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

							{clubImages.map((image) => (
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
						<SubmitButton onClick={onSubmit}>동아리 등록 신청</SubmitButton>
					</MenuContainer>
				</Container>
				<ImageModal show={showImageModal} onCloseModal={onCloseModal} modalImageURL={modalImageURL} />
				<Footer />
				<Snackbar open={submitError} autoHideDuration={1000} onClose={onCloseSnackbar}>
					<Alert onClose={onCloseSnackbar} severity="error">
						필수 입력사항을 입력해주세요.
					</Alert>
				</Snackbar>
				<Snackbar open={hashtagError} autoHideDuration={1000} onClose={onCloseSnackbar}>
					<Alert onClose={handleHashtagAlert} severity="error">
						이미 추가된 태그입니다.
					</Alert>
				</Snackbar>
				{/* <Prompt
					when={whenState}
					navigate={(path) => {
						history.push(path);
					}}
					yes="확인"
					no="취소"
					message="작성된 정보가 모두 삭제됩니다. 정말 나가시겠어요?"
				/> */}
			</ContainerPage>
		</>
	);
};

export default ClubManagePage;
