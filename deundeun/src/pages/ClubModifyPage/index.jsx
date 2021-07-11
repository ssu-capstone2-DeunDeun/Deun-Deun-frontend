import React, { useEffect, useState } from 'react';
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
	ImageDeleteButton,
	HashtagContainer
} from 'pages/ClubAddPage/styles';
import styled from 'styled-components';
import ImageUpload from 'components/common/ImageUpload/index';
import { useSelector } from 'react-redux';
import DropdownMenuSelect from 'components/common/DropdownMenuSelect/index';
import { Error } from 'pages/ApplicationAddPage/styles';
import { ClubName } from './styles';
import ClubHashtag from 'components/common/ClubHashtag/index';
import { useCallback } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

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
	onChangeItem,
	onChangeClubImage,
	onChangeImage,
	onDeleteImage,
	onClickImage
}) => {
	const { menuOptions } = useSelector(({ initCategory }) => ({
		menuOptions: initCategory.category
	}));
	const hashtagOptions = ['개발', '문화', '예술', '경제', '스포츠', '친목', '디자인', '봉사'];
	const [anchorEl, setAnchorEl] = useState(null);
	const ITEM_HEIGHT = 48;

	const [menuIndex, setMenuIndex] = useState(0);
	const [hashtagList, setHashtagList] = useState([]);
	const [hashtagError, setHashtagError] = useState(false);

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

	const onAddHashtag = useCallback((e) => {
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
		[setHashtagList, hashtagList]
	);

	const onCloseMenu = useCallback(() => {
		setAnchorEl(null);
	}, []);

	const onCloseSnackbar = useCallback(() => {
		setHashtagError(false);
	}, []);

	const handleDuplicate = useCallback((e) => {
		e.preventDefault();
		// if(e.target.value !== '') {

		// }
	}, []);

	useEffect(() => {
		if (clubInfo.clubHashtags) {
			setHashtagList(clubInfo.clubHashtags);
		}
	}, [clubInfo.clubHashtags]);

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
							<DuplicateCheckButton onClick={handleDuplicate}>중복 검사</DuplicateCheckButton>
						</ContainerRow>
						<MenuTitle>동아리 소개</MenuTitle>
						<ClubInfoTextarea
							placeholder="동아리 소개를 입력해주세요."
							defaultValue={clubInfo.introduction || ''}
						></ClubInfoTextarea>
						<MenuTitle>관련 태그</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<AddHashtagButton onClick={onAddHashtag}>+ 태그 추가하기</AddHashtagButton>
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
							{clubInfo.clubImageUrls.map((image) => (
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
				<Snackbar open={hashtagError} autoHideDuration={1000} onClose={onCloseSnackbar}>
					<Alert onClose={onCloseSnackbar} severity="error">
						이미 추가된 태그입니다.
					</Alert>
				</Snackbar>
			</ContainerPage>
		</>
	);
};

export default ClubModifyPage;
