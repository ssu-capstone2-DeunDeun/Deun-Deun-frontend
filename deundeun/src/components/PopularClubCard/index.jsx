import React from 'react';
import { Container, ClubName, RecruitingIcon } from './styles';
import styled from 'styled-components';
import { ContainerRow } from 'styles';
import { withRouter } from 'react-router-dom';

const PopularOrderBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 33.5px;
	height: 33.5px;
	color: #fff;
	font-family: 'NotoSansKR';
	font-weight: bold;
	font-size: 1rem;
	&.green {
		background-color: #06cbad;
	}
	&.gray {
		background-color: #a3a3a3;
	}
`;


const PopularClubCard = ({ order, imageURL, isRecruiting, clubName, clubId, history }) => {
	const onMove = (e) => {
		history.push(`/club/${clubName}`)
	}

	return (
		<Container imageURL={imageURL} onClick={onMove} >
			<PopularOrderBox className={`${order <= 3 ? 'green' : 'gray'}`}>{order}</PopularOrderBox>
			<ContainerRow style={{ marginTop: 'auto', marginBottom: '0.9em', marginLeft: '1em' }}>
				{isRecruiting && <RecruitingIcon>ON</RecruitingIcon>}
				<ClubName>{clubName}</ClubName>
			</ContainerRow>
		</Container>
	);
};

export default withRouter(PopularClubCard);
