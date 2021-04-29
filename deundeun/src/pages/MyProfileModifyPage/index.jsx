import { ContentKorean, TitleEnglish } from 'pages/ClubHomePage/styles';
import React from 'react';
import {
	Header,
	Container,
	ProfileImage,
	InputContainer,
	TitleKorean,
	InputBoxContainer,
	SubmitButton,
	InputBox
} from './styles';

const MyPage = () => {
	return (
		//
		<>
			<Header>
				<TitleEnglish>MY PROFILE</TitleEnglish>
				<ContentKorean>내 정보 수정</ContentKorean>
			</Header>
			<Container>
				<ProfileImage />
				<InputContainer>
					<TitleKorean>이름</TitleKorean>
					<InputBoxContainer>
						<InputBox placeholder="이름을 입력해주세요"></InputBox>
						<SubmitButton type="submit">등록하기</SubmitButton>
					</InputBoxContainer>
					<TitleKorean>닉네임</TitleKorean>
					<InputBoxContainer>
						<InputBox placeholder="닉네임을 입력해주세요"></InputBox>
						<SubmitButton type="submit">중복 검사</SubmitButton>
					</InputBoxContainer>
					<TitleKorean>휴대폰 번호</TitleKorean>
					<InputBoxContainer>
						<InputBox placeholder="휴대폰 번호를 입력해주세요"></InputBox>
						<SubmitButton type="submit">인증하기</SubmitButton>
					</InputBoxContainer>
					<TitleKorean>이메일</TitleKorean>
					<InputBoxContainer>
						<InputBox placeholder="이메일을 입력해주세요"></InputBox>
						<SubmitButton type="submit">인증하기</SubmitButton>
					</InputBoxContainer>
				</InputContainer>
			</Container>
		</>
	);
};

export default MyPage;
