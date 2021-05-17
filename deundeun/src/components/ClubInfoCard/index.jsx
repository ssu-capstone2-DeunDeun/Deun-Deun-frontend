import React from 'react';
import {
	Container,
	ClubImage,
	ClubInfo,
	ClubDetail,
	HeaderDetail,
	ClubName,
	ClubJoinDate,
	RecruitingInfo,
	ClubKeyInfo,
	ClubYear,
	ClubPeopleNumber
} from './styles';

const ClubInfoCard = () => {
	// test commit
	return (
		//
		<Container>
			<ClubImage />
			<ClubInfo>
				<HeaderDetail>
					<RecruitingInfo>진행중</RecruitingInfo>
					<span style={{ marginLeft: 'auto', marginRight: '1.3em' }}>더보기</span>
				</HeaderDetail>
				<ClubKeyInfo>
					<ClubName>IT동아리 트와이스</ClubName>
					<ClubYear>3기</ClubYear>
					<ClubPeopleNumber>121명</ClubPeopleNumber>
				</ClubKeyInfo>
				<ClubDetail>
					다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파.
				</ClubDetail>
				<ClubJoinDate>2021. 01. 02 부터 참여중입니다.</ClubJoinDate>
			</ClubInfo>
		</Container>
	);
};

export default ClubInfoCard;
