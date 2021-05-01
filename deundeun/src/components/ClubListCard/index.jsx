import { ClubDetail } from 'components/ClubInfoCard/styles';
import NumberOfLikes from 'components/NumberOfLikes';
import React from 'react';
import {
	Container,
	ClubImage,
	ClubInfo,
	HeaderInfo,
	RecruitDeadline,
	LikeContainer,
	ClubName,
	HashtagContainer,
	Hashtag
} from './styles';
const ClubListCard = () => {
	return (
		//
		<Container>
			<ClubImage />
			<ClubInfo>
				<HeaderInfo>
					<RecruitDeadline>모집중 | D-4</RecruitDeadline>
					<LikeContainer>
						<NumberOfLikes />
					</LikeContainer>
				</HeaderInfo>
				<ClubName>IT동아리 트와이스</ClubName>
				<ClubDetail style={{ marginBottom: '-2em' }}>
					다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파.
				</ClubDetail>
				<HashtagContainer>
					<Hashtag># 해시태그 1</Hashtag>
					<Hashtag># 해시태그 2</Hashtag>
					<Hashtag># 해시태그 3</Hashtag>
				</HashtagContainer>
			</ClubInfo>
		</Container>
	);
};

export default ClubListCard;
