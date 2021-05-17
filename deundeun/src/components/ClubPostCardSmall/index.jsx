import React from 'react';
import {
	Container,
	PostOverview,
	TitleKorean,
	ContentKorean,
	DetailContainer,
	ClubName,
	Like,
	Comment,
	PostDate
} from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import styled from '@emotion/styled';
const ClubPostCardSmall = () => {
	const PostImage = styled.div`
		height: 188px;
		background-image: url('/images/sample/post/sample-post2.jpeg');
		background-size: cover;
		background-color: #e8e8e8;
	`;

	return (
		//
		<Container>
			<PostImage />
			<PostOverview>
				<TitleKorean>게시글 제목</TitleKorean>
				<ContentKorean>
					다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴 에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파…
				</ContentKorean>
				<PostDate>2021.01.01</PostDate>
			</PostOverview>
			<DetailContainer>
				<ClubName>동아리명</ClubName>
				<Comment>
					<ChatBubbleOutlineIcon style={{ marginRight: '0.2em', cursor: 'pointer' }} />
					123
				</Comment>
				<Like>
					<FavoriteIcon style={{ marginRight: '0.1em', cursor: 'pointer' }} />
					123
				</Like>
			</DetailContainer>
		</Container>
	);
};

export default ClubPostCardSmall;
