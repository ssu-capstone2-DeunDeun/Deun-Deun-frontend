import React from 'react';
import { ContainerPage } from 'styles';
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
import { CategoryKorean } from 'pages/MyLikeListPage/styles';
import { ErrorMessage } from 'components/register/RegisterInfoForm/styles';

const MyPage = ({ onChange, userInfo, onChangeNickname, onSubmitNickname, error }) => {
	return (
		//
		<>
			<ContainerPage>
				<Header>
					<CategoryKorean>마이페이지</CategoryKorean>
					<ChevronRightIcon />
					<CategoryKorean>내 정보 수정</CategoryKorean>
				</Header>
				<Container>
					<ProfileImage />
					{
						userInfo && <UserName>{userInfo.name}</UserName>
					}
					<EmailContainer>
						{/* <SocialImage src="/images/icons/kakao.png"></SocialImage> */}
						{
							userInfo && <UserEmail>{userInfo.email}</UserEmail>
						}
					</EmailContainer>

					<InputContainer>
						<TitleKorean style={{ marginLeft: '7.8em' }}>닉네임 *</TitleKorean>
						<InputBoxContainer>
							<InputBox onChange={onChangeNickname} placeholder={userInfo && userInfo.nickname}></InputBox>
							<SubmitButton onClick={onSubmitNickname} type="submit">닉네임 변경</SubmitButton>
						</InputBoxContainer>
						<ErrorMessage>{error}</ErrorMessage>

						{/* <TitleKorean style={{ marginLeft: '7.8em' }}>휴대폰 번호 *</TitleKorean>
						<InputBoxContainer>
							<InputBox placeholder="010-1234-5678"></InputBox>
							<SubmitButton type="submit">전화번호 변경</SubmitButton>
						</InputBoxContainer> */}

					</InputContainer>
				</Container>
			</ContainerPage>
		</>
	);
};

export default MyPage;
