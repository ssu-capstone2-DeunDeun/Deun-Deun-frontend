import { ContentKorean, TitleEnglish } from 'components/ClubPostCard/styles';
import React from 'react';
import { ContainerColumn, ContainerPage, ContainerRow } from 'styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
	Header,
	Container,
	ProfileImage,
	InputContainer,
	TitleKorean,
	InputBoxContainer,
	SubmitButton,
	InputBox,
	UserName,
	UserEmail,
	SocialImage,
	EmailContainer
} from './styles';

const MyPage = () => {
	return (
		//
		<>
			<ContainerPage>
				<Header>
					<ContentKorean>마이페이지</ContentKorean>
					<ChevronRightIcon />
					<ContentKorean>내 정보 수정</ContentKorean>
				</Header>
				<Container>
					<ProfileImage />
					<UserName>신상현</UserName>

					<EmailContainer>
						<SocialImage src="/images/icons/kakao.png"></SocialImage>
						<UserEmail>qwerty123@kakao.com</UserEmail>
					</EmailContainer>

					<InputContainer>
						<TitleKorean style={{ marginLeft: '7.8em' }}>닉네임 *</TitleKorean>
						<InputBoxContainer>
							<InputBox placeholder="닉네임"></InputBox>
							<SubmitButton type="submit">닉네임 변경</SubmitButton>
						</InputBoxContainer>
						<TitleKorean style={{ marginLeft: '7.8em' }}>휴대폰 번호 *</TitleKorean>
						<InputBoxContainer>
							<InputBox placeholder="010-1234-5678"></InputBox>
							<SubmitButton type="submit">전화번호 변경</SubmitButton>
						</InputBoxContainer>
					</InputContainer>
				</Container>
			</ContainerPage>
		</>
	);
};

export default MyPage;
