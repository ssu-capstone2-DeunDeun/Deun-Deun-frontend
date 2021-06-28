import React from 'react';
import { Content } from 'pages/MyClubListPage/styles';
import { ContentKorean } from 'components/ClubPostCard/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClubListCard from 'components/ClubListCard';
import { TitleEnglish, ContentContainer, CardContainer } from './styles';
import { ContainerPage } from 'styles';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllClubs } from 'modules/initHomePage';
import { useState } from 'react';

const CategoryPage = ({ match }) => {
	const { categoryType } = match.params;
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const { clubs } = useSelector(({ initHomePage }) => ({
		clubs: initHomePage.getAllClubs
	}));

	if (clubs) {
		console.log('getAllclubs', clubs);
	}

	useEffect(() => {
		dispatch(getAllClubs(categoryType));
	}, [categoryType, dispatch]);

	useEffect(() => {
		console.log(categoryType);
		switch (categoryType) {
			case 'IT':
				setTitle('IT(개발)');
				break;
			case 'HEALTH':
				setTitle('HEALTH(헬스)');
				break;
			case 'STARTUP':
				setTitle('STARTUP(창업)');
				break;
			case 'FRIENDSHIP':
				setTitle('FRIENDSHIP(친목)');
				break;
			case 'VOLUNTEER':
				setTitle('VOLUNTEER(봉사)');
				break;
			case 'CULTURE':
				setTitle('CULTURE(문화)');
				break;
			case 'LANGUAGE':
				setTitle('LANGUAGE(어학)');
				break;
			case 'OTHERS':
				setTitle('OTHERS(기타)');
				break;
			default:
				break;
		}
	}, [categoryType]);

	return (
		//
		<>
			<ContainerPage>
				<ContentContainer>
					<TitleEnglish>{title}</TitleEnglish>
					<Content style={{ marginLeft: 'auto', marginRight: '4em', marginTop: 'auto' }}>
						<CheckCircleOutlineIcon style={{ marginRight: '0.5em' }} />
						<ContentKorean>모집중인 동아리만 보기</ContentKorean>
					</Content>
				</ContentContainer>
				<CardContainer>
					{clubs &&
						clubs.map((club) => (
							<ClubListCard
								id={club.clubId}
								clubName={club.clubName}
								introduction={club.introduction}
								hashtagNames={club.hashtagNames}
								representClubImageUrl={club.representClubImageUrl}
								liked={club.liked}
								recruiting={club.recruting}
								dday={club.dday}
							/>
						))}
				</CardContainer>
			</ContainerPage>
		</>
	);
};

export default withRouter(CategoryPage);
