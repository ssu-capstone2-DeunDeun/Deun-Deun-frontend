import React, { useCallback } from 'react';
import {
	Container,
	Category,
	NotificationButton,
	ContainerInfo,
	HeaderInfo,
	ClubName,
	ClubPreview,
	ContainerHashtag,
	Hashtag,
	ClubImage,
	ContainerImage
} from './styles';

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
				<ClubPreview>
					다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. <br /> 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에
					타고파. <br /> 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파.
				</ClubPreview>
				<ContainerHashtag>
					<Hashtag># 해시태그1</Hashtag>
					<Hashtag># 해시태그2</Hashtag>
					<Hashtag># 해시태그3</Hashtag>
					<ContainerImage>
						<ClubImage />
						<ClubImage />
						<ClubImage />
						<ClubImage />
					</ContainerImage>
				</ContainerHashtag>
			</ContainerInfo>
		</Container>
	);
};

export default ClubInfo;
