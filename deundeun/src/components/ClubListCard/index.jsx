import React, { useCallback, useState } from 'react';
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
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
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

	// const onClickLike = useCallback(
	// 	(e) => {
	// 		e.stopPropagation();
	// 		console.log(id);
	// 		const clubId = parseInt(id);
	// 		axios({
	// 			method: 'post',
	// 			url: `${API_BASE_URL}/like/clubs/${clubId}`,
	// 			headers: {
	// 				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
	// 			}
	// 		}).then((res) => {
	// 			console.log(res.data);
	// 			setLike(!like);
	// 		});
	// 	},
	// 	[id, like]
	// );

	return (
		<Container onClick={onMove}>
			<ClubImage src={representClubImageUrl} />
			<ClubInfo>
				<ContainerRow style={{ height: '30px', alignItems: 'center' }}>
					<ClubName>{clubName}</ClubName>
					{true && <RecruitingIcon>{dday < 0 ? `모집종료` : `D - ${dday}`}</RecruitingIcon>}
					<FavoriteIcon id={id} />
					{/* {isRecruting && <RecruitingIcon />} */}
				</ContainerRow>
				<DetailContainer>
					<ClubDetail>{introduction}</ClubDetail>
				</DetailContainer>
				<HashtagContainer>
					{hashtagNames && hashtagNames.map((hashtagName) => <Hashtag>{hashtagName}</Hashtag>)}
					{/* <Hashtag># 해시태그1</Hashtag>
					<Hashtag># 해시태그2</Hashtag>
					<Hashtag># 해시태그3</Hashtag> */}
				</HashtagContainer>
			</ClubInfo>
		</Container>
	);
};

export default withRouter(ClubListCard);
