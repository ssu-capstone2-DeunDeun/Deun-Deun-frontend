import React, { useCallback, useState } from 'react';
import {
	ClubOverview,
	ClubImage,
	ClubName,
	Container,
	TitleKorean,
	Divider,
	ContentKorean,
	ClubDetail,
	HashtagAndLike,
	Hashtag,
	Like
} from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const PopularClubCard = () => {
	const [like, setLike] = useState(false);
	const onClickLike = useCallback((e) => {
		// use toggle (later)
		setLike(true);
		console.log('like');
	}, []);

	return (
		//
		<Container>
			<ClubImage />
			<ClubOverview>
				<ClubName>
					<TitleKorean>IT동아리 트와이스</TitleKorean>
					<Divider />
					<span>D-4</span>
				</ClubName>
				<ClubDetail>
					<ContentKorean>
						다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바 퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파.
					</ContentKorean>
				</ClubDetail>
				<HashtagAndLike>
					<Hashtag># 해시태그</Hashtag>
					<Hashtag># 해시태그</Hashtag>
					<Hashtag># 해시태그</Hashtag>
					<Like>
						<FavoriteIcon
							onClick={onClickLike}
							style={{ marginRight: '0.3em', cursor: 'pointer', color: `${like ? 'error' : 'inherit'}` }}
						/>
						123
					</Like>
				</HashtagAndLike>
			</ClubOverview>
		</Container>
	);
};

export default PopularClubCard;
