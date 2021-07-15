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
import VisibilityIcon from '@material-ui/icons/Visibility';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';

const ClubPostCardSmall = ({ history, postInfo, clubName }) => {
	const PostImage = styled.div`
		height: 188px;
		background-image: url('/images/sample/post/sample-post2.jpeg');
		background-size: cover;
		background-color: #e8e8e8;
	`;

	const { viewCount, likeCount, createdAt, content, title } = postInfo;
	// post image 도 나중에 필요하다!!!

	const onMove = () => {
		history.push(`/club/${clubName}/post/${postInfo.postId}`);
	};
	return (
		<Container onClick={onMove}>
			<PostImage />
			<PostOverview>
				<TitleKorean>{title}</TitleKorean>
				<ContentKorean>{content}</ContentKorean>
				<PostDate>{createdAt}</PostDate>
			</PostOverview>
			<DetailContainer>
				<ClubName>{clubName}</ClubName>
				<Comment>
					{/* <ChatBubbleOutlineIcon style={{ marginRight: '0.2em', cursor: 'pointer' }} /> */}
					<VisibilityIcon style={{ marginRight: '0.2em', cursor: 'pointer' }} />
					{viewCount}
				</Comment>
				<Like>
					<FavoriteIcon style={{ marginRight: '0.1em', cursor: 'pointer' }} />
					{likeCount}
				</Like>
			</DetailContainer>
		</Container>
	);
};

export default withRouter(ClubPostCardSmall);
