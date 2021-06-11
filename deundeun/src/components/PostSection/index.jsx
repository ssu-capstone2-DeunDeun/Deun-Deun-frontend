import ClubPostCardSmall from 'components/ClubPostCardSmall';
import React from 'react';
import { Container, PostContainer, CardContainer, Header, SubmitButton, ButtonContainer, Footer } from './styles';
import { TitleKorean, SeeAll } from 'components/RecruitInfoSection/styles';
import { withRouter } from 'react-router-dom';
const PostSection = ({ history, postResponse, clubName }) => {
	return (
		<Container>
			<PostContainer>
				<Header>
					<TitleKorean>인기 게시글</TitleKorean>
					<SeeAll>전체보기</SeeAll>
				</Header>
				<CardContainer>
					{
						postResponse && postResponse.map(postInfo =>
							<ClubPostCardSmall postInfo={postInfo}
								clubName={clubName} />
						)
					}
				</CardContainer>
				<ButtonContainer>
					{/* <SubmitButton>게시글 작성</SubmitButton> */}
				</ButtonContainer>
				<Footer />
			</PostContainer>
		</Container >
	);
};

export default withRouter(PostSection);
