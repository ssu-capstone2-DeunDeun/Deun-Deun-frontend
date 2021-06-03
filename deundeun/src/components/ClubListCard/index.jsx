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
const ClubListCard = ({ clubName, introduction, hashtagNames, representClubImageUrl, liked, recruiting, dday }) => {
	return (
		<Container>
			<ClubImage />
			<ClubInfo>
				<ContainerRow style={{ height: '30px', alignItems: 'center' }}>
					<ClubName>{clubName}</ClubName>
					{true && <RecruitingIcon>{dday < 0 ? `모집종료` : `D - ${dday}`}</RecruitingIcon>}
					<FavoriteIcon style={{ width: '20px', height: '20px', marginLeft: 'auto', color: '8f8f8f' }} />
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
		</Container>
	);
};

export default ClubListCard;
