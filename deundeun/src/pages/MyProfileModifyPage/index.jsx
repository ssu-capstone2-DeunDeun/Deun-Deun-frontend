import { ContentKorean, TitleEnglish } from 'pages/ClubHomePage/styles';
import React from 'react';
import { Header, Container, ProfileImage, InputContainer, TitleKorean } from './styles';

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
				{/* <Name />
				<Nickname />
				<PhoneNumber />
				<Email /> */}
				<InputContainer>
					<TitleKorean>이름</TitleKorean>
					<TitleKorean>닉네임</TitleKorean>
					<TitleKorean>휴대폰 번호</TitleKorean>
					<TitleKorean>이메일</TitleKorean>
				</InputContainer>
			</Container>
		</>
	);
};

export default MyPage;
