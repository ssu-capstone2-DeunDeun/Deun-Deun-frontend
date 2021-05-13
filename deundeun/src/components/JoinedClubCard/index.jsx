import { ClubImage, ClubName } from 'components/ClubListCard/styles';
import React from 'react';
import { ContainerRow } from 'styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Container, ClubInfo, JoinedDate, ClubDetail } from './styles';
const JoinedClubCard = () => {
	return (
		//
		<Container>
			<ClubImage />
			<ClubInfo>
				<ContainerRow>
					<ClubName>IT동아리 트와이스</ClubName>
					<MoreHorizIcon style={{ marginLeft: 'auto', cursor: 'pointer' }} />
				</ContainerRow>
				<ClubDetail>
					다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파.
				</ClubDetail>
				<JoinedDate>2021.01.02에 가입했습니다.</JoinedDate>
			</ClubInfo>
		</Container>
	);
};

export default JoinedClubCard;
