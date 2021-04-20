import React from 'react';
import { Container, PostContainer, TitleKorean, ContentKorean, TextContainer } from './styles';
const PostSection = () => {
	return (
		//
		<Container>
			<PostContainer>
				<TextContainer>
					<TitleKorean>게시판</TitleKorean>
					<ContentKorean>최신순</ContentKorean>
				</TextContainer>
			</PostContainer>
		</Container>
	);
};

export default PostSection;
