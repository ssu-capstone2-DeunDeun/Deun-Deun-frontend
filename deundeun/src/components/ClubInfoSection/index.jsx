import React, { useCallback } from 'react';
import { Redirect, useHistory } from 'react-router';
import {
	Container,
	Category,
	NotificationButton,
	ContainerInfo,
	ClubName,
	ClubPreview,
	ContainerHashtag,
	Hashtag,
	ClubImage,
	ContainerImage,
	Background,
	ClubLogoImage,
	Header,
	Logo,
	ContainerContent
} from './styles';

const ClubInfo = () => {
	const history = useHistory();
	const onClickLogo = useCallback(
		(e) => {
			history.push('/home');
		},
		[history]
	);

	const onClickNotification = useCallback((e) => {
		console.log('send notification');
	}, []);

	return (
		//
		<>
			<Container>
				<Header>
					<Logo onClick={onClickLogo} src="/images/logo/GROOPY_black.png"></Logo>
				</Header>
				<Background></Background>
				<ContainerInfo>
					<ClubLogoImage src="/images/sample/club-logo/sample-clublogo.png" />
					<ContainerContent>
						<NotificationButton>모집 공고 알림 받기</NotificationButton>
						<Category>IT / 개발</Category>
						<ClubName>IT동아리 트와이스</ClubName>
						<ClubPreview>다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. </ClubPreview>
						<ContainerHashtag>
							<Hashtag># 해시태그1</Hashtag>
							<Hashtag># 해시태그2</Hashtag>
							<Hashtag># 해시태그3</Hashtag>
							<ContainerImage>
								<ClubImage />
								<ClubImage />
								<ClubImage>+40</ClubImage>
							</ContainerImage>
						</ContainerHashtag>
					</ContainerContent>
				</ContainerInfo>
			</Container>
		</>
	);
};

export default ClubInfo;
