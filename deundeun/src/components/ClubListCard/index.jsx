import React from 'react';
import { ContainerRow } from 'styles';
import { Container, ClubImage, ClubInfo, ClubName, ClubDetail } from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
const ClubListCard = () => {
	return (
		//
		<Container>
			<ClubImage />
			<ClubInfo>
				<ContainerRow>
					<ClubName>IT동아리 트와이스</ClubName>
					<FavoriteIcon style={{ width: '20px', height: '20px', marginLeft: 'auto' }} />
				</ContainerRow>
				<ClubDetail>
					다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파.
				</ClubDetail>
			</ClubInfo>
		</Container>
	);
};

export default ClubListCard;
