import React from 'react';
import {
	Container,
	PostImage,
	PostOverview,
	TitleKorean,
	ContentKorean,
	Like,
	PostDate,
	Comment,
	ContentContainer,
	DetailContainer,
	ClubName
} from './styles';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ContainerRow } from 'styles';
import { withRouter } from 'react-router-dom';

const ClubPostCard = ({ title, content, createdAt, clubName, likeCount, postId, history }) => {
	const onMove = () => {
		history.push(`/club/post/${postId}`)
	}
	return (
		//
		<Container onClick={onMove}>
			{/* <PostImage /> */}
			<PostOverview>
				<TitleKorean>{title}</TitleKorean>
				<ContentContainer>
					<ContentKorean>
						{content}
					</ContentKorean>
				</ContentContainer>
				<PostDate>{createdAt}</PostDate>
			</PostOverview>
			<DetailContainer>
				<ClubName>{clubName}</ClubName>
				<ContainerRow style={{ marginLeft: 'auto' }}>
					<Comment>
						<ChatBubbleOutlineIcon
							style={{ width: '20.2px', height: '20.2px', marginRight: '0.2em', cursor: 'pointer' }}
						/>
							1
					</Comment>
					<Like>
						<FavoriteIcon style={{ width: '20.2px', height: '20.2px', marginRight: '0.1em', cursor: 'pointer' }} />
						{likeCount}
					</Like>
				</ContainerRow>
			</DetailContainer>
		</Container>
	);
};

export default withRouter(ClubPostCard);
