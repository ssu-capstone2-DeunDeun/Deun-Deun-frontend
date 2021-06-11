import React, { useCallback } from 'react';
import { useEffect } from 'react';
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

const ClubInfoSection = ({ clubInfo }) => {
	const { categoryType, clubName, introduction, clubHashtags, backgroundImageUrl, representImageUrl, clubImageUrls } = clubInfo;
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
			<Container backgroundImageUrl={backgroundImageUrl}>
				<Header>
					<Logo onClick={onClickLogo} src="/images/logo/GROOPY_black.png"></Logo>
				</Header>
				<Background></Background>
				<ContainerInfo>
					<ClubLogoImage src={representImageUrl} />
					<ContainerContent>
						<NotificationButton>모집 공고 알림 받기</NotificationButton>
						<Category>{categoryType}</Category>
						<ClubName>{clubName}</ClubName>
						<ClubPreview>{introduction} </ClubPreview>
						<ContainerHashtag>
							{clubHashtags.map(clubHashtag => <Hashtag key={clubHashtag.id}>{clubHashtag.name}</Hashtag>)}
							<ContainerImage>
								<ClubImage />
								<ClubImage />
								<ClubImage>+40</ClubImage>
								{
									clubImageUrls.map(clubImageUrl => <ClubImage clubImageUrl={clubImageUrl} ></ClubImage>)
								}
							</ContainerImage>
						</ContainerHashtag>
					</ContainerContent>
				</ContainerInfo>
			</Container>
		</>
	);
};

export default ClubInfoSection;
