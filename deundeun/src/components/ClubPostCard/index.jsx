import React from 'react';
import { Container, PostImage, PostOverview, TitleKorean, ContentKorean, NicknameAndLike, Like } from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ClubPostCard = () => {
	return (
		//
		<Container>
			<PostImage />
			<PostOverview>
				<TitleKorean>게시글 제목</TitleKorean>
				<ContentKorean>
					다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴 에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파…
				</ContentKorean>
				<NicknameAndLike>
					<ContentKorean>작성자 닉네임</ContentKorean>
					<Like>
						<FavoriteIcon style={{ marginRight: '0.3em', cursor: 'pointer' }} />
						123
					</Like>
				</NicknameAndLike>
			</PostOverview>
		</Container>
	);
};

export default ClubPostCard;
