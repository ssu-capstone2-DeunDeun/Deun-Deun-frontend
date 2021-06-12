import React from 'react';
import { withRouter } from 'react-router-dom';
import {
	Container,
	RecruitTitle,
	InnerContainer,
	RecruitingInfoContainer,
	RecruitingInfo,
	ClubName,
	ApplyButtonContainer,
	Deadline,
	ApplyButton
} from './styles';

const RecruitInfoCard = ({ clubRecruitInfo, clubName, history }) => {
	const { title, remainDays } = clubRecruitInfo;

	return (
		//
		<Container>
			<InnerContainer>
				<RecruitingInfoContainer>
					<RecruitingInfo>ON</RecruitingInfo>
					<ClubName>{clubName}</ClubName>
				</RecruitingInfoContainer>
				<RecruitTitle>{title}</RecruitTitle>
				<ApplyButtonContainer>
					{
						remainDays < 0 ?
							(
								<>
									<ApplyButton>지원마감</ApplyButton>
								</>
							)
							: (

								<div>
									<Deadline>D - ${clubRecruitInfo.remainDays}</Deadline>
									<ApplyButton onClick={() => history.push(`/forms/${clubName}`)}>지원하기</ApplyButton>
								</div>
							)
					}
				</ApplyButtonContainer>
			</InnerContainer >
		</Container >
	);
};

export default withRouter(RecruitInfoCard);
