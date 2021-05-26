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
const ClubListCard = () => {
	return (
		//
		<Container>
			<ClubImage />
			<ClubInfo>
				<ContainerRow style={{ height: '30px', alignItems: 'center' }}>
					<ClubName>IT동아리 트와이스</ClubName>
					{true && <RecruitingIcon>D-4</RecruitingIcon>}
					<FavoriteIcon style={{ width: '20px', height: '20px', marginLeft: 'auto', color: '8f8f8f' }} />
					{/* {isRecruting && <RecruitingIcon />} */}
				</ContainerRow>
				<DetailContainer>
					<ClubDetail>
						다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파.
					</ClubDetail>
				</DetailContainer>
				<HashtagContainer>
					<Hashtag># 해시태그1</Hashtag>
					<Hashtag># 해시태그2</Hashtag>
					<Hashtag># 해시태그3</Hashtag>
				</HashtagContainer>
			</ClubInfo>
		</Container>
	);
};

export default ClubListCard;
