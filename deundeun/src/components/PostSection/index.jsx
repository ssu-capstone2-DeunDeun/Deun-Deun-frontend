import React from 'react';
import { Container, PostContainer, TitleKorean, ContentKorean, TextContainer, CardContainer } from './styles';
const PostSection = () => {
	return (
		//
		<Container>
			<PostContainer>
				<TextContainer>
					<TitleKorean>게시판</TitleKorean>
					<ContentKorean>최신순</ContentKorean>
				</TextContainer>
				<CardContainer></CardContainer>
			</PostContainer>
		</Container>
	);
};

export default PostSection;
