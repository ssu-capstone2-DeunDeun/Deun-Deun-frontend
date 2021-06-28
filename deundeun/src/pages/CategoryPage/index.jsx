import React from 'react';
import { ContentKorean } from 'components/ClubPostCard/styles';
import ClubListCard from 'components/ClubListCard';
import { TitleEnglish, ContentContainer, CardContainer, Content } from './styles';
import { ContainerPage } from 'styles';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllClubs } from 'modules/initHomePage';
import { useState } from 'react';
import { withStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const ColoredCheckbox = withStyles({
	root: {
		color: '#9ddfd3',
		'&$checked': {
			color: '#9ddfd3'
		}
	},
	checked: {}
})((props) => <Checkbox color="default" {...props} />);

const CategoryPage = ({ match }) => {
	const { categoryType } = match.params;
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [checked, setChecked] = useState(false);
	const { clubs } = useSelector(({ initHomePage }) => ({
		clubs: initHomePage.getAllClubs
	}));

	if (clubs) {
		console.log('getAllclubs', clubs);
	}

	const onCheck = () => {
		setChecked((prev) => !prev);
	};

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
				<ContentContainer style={{ width: '1346px' }}>
					<TitleEnglish>{title}</TitleEnglish>
					<Content>
						<ColoredCheckbox checked={checked} onClick={onCheck} />
						<ContentKorean style={{ fontSize: '0.97rem' }}>모집중인 동아리만 보기</ContentKorean>
					</Content>
				</ContentContainer>
				<CardContainer>
					{clubs &&
						(checked
							? clubs.map((club) =>
									club.dday > 0 ? (
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
									) : null
							  )
							: clubs.map((club) => (
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
							  )))}
				</CardContainer>
			</ContainerPage>
		</>
	);
};

export default withRouter(CategoryPage);
