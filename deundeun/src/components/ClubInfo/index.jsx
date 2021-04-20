import React, { useCallback } from 'react';
import { Container, Category, NotificationButton, ContainerInfo, HeaderInfo, ClubName } from './styles';

const ClubInfo = () => {
	const onClickNotification = useCallback((e) => {
		console.log('send notification');
	}, []);

	return (
		//
		<Container>
			<ContainerInfo>
				<HeaderInfo>
					<Category>IT / 개발</Category>
					<NotificationButton onClick={onClickNotification}>새 공고 알림 받기</NotificationButton>
				</HeaderInfo>
				<ClubName>IT동아리 트와이스</ClubName>
			</ContainerInfo>
		</Container>
	);
};

export default ClubInfo;
