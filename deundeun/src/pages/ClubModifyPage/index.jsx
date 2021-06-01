import React, { useEffect, useState } from 'react';
import DropdownMenu from 'components/common/DropdownMenu';
import { ContainerPage, ContainerRow } from 'styles';

import {
	Container,
	MenuContainer,
	MenuTitle,
	DropdownContainer,
	ClubNameInput,
	DuplicateCheckButton,
	ClubInfoTextarea,
	AddHashtagButton,
	SubmitButton,
	Footer,
	Generation,
	GenerationInput,
	Placeholder
} from 'pages/ClubAddPage/styles';
import { ImageButton } from 'pages/RecruitAddPage/styles';
import { ImageContainer, ClubImage, Background, CoverImageContainer } from './styles';
import axios from '../../../node_modules/axios/index';
import styled from 'styled-components';

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

const ClubModifyPage = () => {
	const [generation, setGeneration] = useState('');
	const menuOptions = ['IT / 개발', '카테고리 2', '카테고리 3', '카테고리 4', '카테고리 5'];
	const [menuIndex, setMenuIndex] = useState(0);

	const onChangeGeneration = (e) => {
		if (Number(e.target.value) > 0 && Number(e.target.value <= 999)) {
			setGeneration(e.target.value);
		} else {
			setGeneration('');
		}
	};

	return (
		//
		<>
			<ContainerPage>
				<Container>
					<ClubImage></ClubImage>
					<MenuContainer>
						<MenuTitle>동아리 기수 / 카테고리</MenuTitle>
						<ContainerRow>
							<Generation>
								<GenerationInput min="1" onChange={onChangeGeneration} value={generation} />
								<Placeholder>기</Placeholder>
							</Generation>
							<DropdownContainer>
								{`${menuOptions[menuIndex]}`}
								<DropdownMenu
									options={menuOptions}
									selectedIndex={menuIndex}
									setSelectedIndex={setMenuIndex}
								></DropdownMenu>
							</DropdownContainer>
						</ContainerRow>

						<MenuTitle>동아리 이름</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<ClubNameInput placeholder="동아리 이름을 입력해주세요."></ClubNameInput>
							<DuplicateCheckButton>중복 검사</DuplicateCheckButton>
						</ContainerRow>
						<MenuTitle>동아리 소개</MenuTitle>
						<ClubInfoTextarea placeholder="동아리 소개를 입력해주세요."></ClubInfoTextarea>
						<MenuTitle>관련 태그</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<AddHashtagButton>+ 태그 추가하기</AddHashtagButton>
							<AddHashtagButton>IT / 개발</AddHashtagButton>
							<AddHashtagButton>IT / 개발</AddHashtagButton>
						</ContainerRow>
						<MenuTitle>커버 이미지 업로드</MenuTitle>
						<CoverImageContainer>
							{/* <Background>1920 * 348 사이즈의 커버 이미지를 등록해 주세요.</Background> */}
							<CoverImage></CoverImage>
						</CoverImageContainer>
						<MenuTitle>소개 이미지 업로드</MenuTitle>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<ImageButton />
							<ImageButton />
							<ImageButton />
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
