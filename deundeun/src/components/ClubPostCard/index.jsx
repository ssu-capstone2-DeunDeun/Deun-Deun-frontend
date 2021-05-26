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

const ClubPostCard = () => {
	return (
		//
		<Container>
			<PostImage />
			<PostOverview>
				<TitleKorean>게시글 제목</TitleKorean>
				<ContentContainer>
					<ContentKorean>
						다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타 고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴 에
						타고파.다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇 바퀴에 타고파.
					</ContentKorean>
				</ContentContainer>
				<PostDate>2021.01.01</PostDate>
			</PostOverview>
			<DetailContainer>
				<ClubName>동아리명</ClubName>
				<ContainerRow style={{ marginLeft: 'auto' }}>
					<Comment>
						<ChatBubbleOutlineIcon
							style={{ width: '20.2px', height: '20.2px', marginRight: '0.2em', cursor: 'pointer' }}
						/>
						123
					</Comment>
					<Like>
						<FavoriteIcon style={{ width: '20.2px', height: '20.2px', marginRight: '0.1em', cursor: 'pointer' }} />
						123
					</Like>
				</ContainerRow>
			</DetailContainer>
		</Container>
	);
};

export default ClubPostCard;
