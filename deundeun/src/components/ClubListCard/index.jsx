import React, { useState } from 'react';
import { ContainerRow } from 'styles';
import {
	Container,
	ClubImage,
	ClubInfo,
	ClubName,
	ClubDetail,
	DetailContainer,
	RecruitingIcon,
	HashtagContainer,
	Hashtag
} from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
const ClubListCard = ({
	id,
	history,
	clubName,
	introduction,
	hashtagNames,
	representClubImageUrl,
	liked,
	recruiting,
	dday
}) => {
	const [like, setLike] = useState(false);

	const onMove = () => {
		history.push(`/club/${clubName}`);
	};

	const onLike = (e) => {
		e.stopPropagation();
		console.log('id : ' + id);
		// axios({
		// 	method: 'post',
		// 	url: `${API_BASE_URL}/like/clubs/${id}`,
		// 	headers: {
		// 		Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
		// 	}
		// })
		// 	.then((response) => {
		// 		console.log(response);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
		setLike((prev) => !prev);
	};

	useEffect(() => {
		if (liked) {
			setLike(true);
		}
	}, [setLike, liked]);

	return (
		<Container onClick={onMove}>
			<ClubImage src={representClubImageUrl} />
			<ClubInfo>
				<ContainerRow style={{ height: '30px', alignItems: 'center' }}>
					<ClubName>{clubName}</ClubName>
					{true && <RecruitingIcon>{dday < 0 ? `모집종료` : `D - ${dday}`}</RecruitingIcon>}
					<FavoriteIcon style={{ color: like ? 'red' : 'gray' }} onClick={onLike} id={id} />
					{/* {isRecruting && <RecruitingIcon />} */}
				</ContainerRow>
				<DetailContainer>
					<ClubDetail>{introduction}</ClubDetail>
				</DetailContainer>
				<HashtagContainer>
					{hashtagNames && hashtagNames.map((hashtagName) => <Hashtag key={hashtagName}>{hashtagName}</Hashtag>)}
					{/* <Hashtag># 해시태그1</Hashtag>
					<Hashtag># 해시태그2</Hashtag>
					<Hashtag># 해시태그3</Hashtag> */}
				</HashtagContainer>
			</ClubInfo>
		</Container>
	);
};

export default withRouter(ClubListCard);
