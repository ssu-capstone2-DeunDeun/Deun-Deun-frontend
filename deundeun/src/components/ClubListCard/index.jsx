import React from 'react';
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
const ClubListCard = ({ history, clubName, introduction, hashtagNames, representClubImageUrl, liked, recruiting, dday }) => {

	const onMove = () => {
		history.push(`/club/${clubName}`)
	}
	return (
		<Container onClick={onMove}>
			<ClubImage src={representClubImageUrl} />
			<ClubInfo>
				<ContainerRow style={{ height: '30px', alignItems: 'center' }}>
					<ClubName>{clubName}</ClubName>
					{true && <RecruitingIcon>{dday < 0 ? `모집종료` : `D - ${dday}`}</RecruitingIcon>}
					<FavoriteIcon />
					{/* {isRecruting && <RecruitingIcon />} */}
				</ContainerRow>
				<DetailContainer>
					<ClubDetail>
						{introduction}
					</ClubDetail>
				</DetailContainer>
				<HashtagContainer>
					{
						hashtagNames && hashtagNames.map(hashtagName =>
							<Hashtag>{hashtagName}</Hashtag>
						)
					}
					{/* <Hashtag># 해시태그1</Hashtag>
					<Hashtag># 해시태그2</Hashtag>
					<Hashtag># 해시태그3</Hashtag> */}
				</HashtagContainer>
			</ClubInfo>
		</Container >
	);
};

export default withRouter(ClubListCard);
