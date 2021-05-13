import ClubPostCardSmall from 'components/ClubPostCardSmall';
import React from 'react';
import { Container, PostContainer, CardContainer, Header, SubmitButton, ButtonContainer, Footer } from './styles';
import { TitleKorean, SeeAll } from 'components/RecruitInfoSection/styles';
const PostSection = () => {
	return (
		//
		<Container>
			<PostContainer>
				<Header>
					<TitleKorean>동아리 게시글</TitleKorean>
					<SeeAll>전체보기</SeeAll>
				</Header>
				<CardContainer>
					<ClubPostCardSmall />
					<ClubPostCardSmall />
					<ClubPostCardSmall />
				</CardContainer>
				<ButtonContainer>
					<SubmitButton>게시글 작성</SubmitButton>
				</ButtonContainer>
				<Footer />
			</PostContainer>
		</Container>
	);
};

export default PostSection;
