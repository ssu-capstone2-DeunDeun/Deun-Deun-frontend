import React, { useCallback, useEffect } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { ContentKorean } from 'components/ClubPostCardSmall/styles';
import { AddApplicationButton, Container, InnerContainer } from './styles';
import { Link } from 'react-router-dom';
import { Button } from 'components/common/SideBar/styles';

const AddApplicationFormCard = ({ setAddNewForm }) => {
	const onClickAddNewForm = useCallback(
		(e) => {
			setAddNewForm(true);
		},
		[setAddNewForm]
	);

	return (
		//
		<>
			<Container>
				{/* <Link style={{ width: '100%', height: '100%' }} to="/club/manage/application/new"> */}
				<InnerContainer
					component={Link}
					to={'/club/manage/application/new'}
					className="inner"
					onClick={onClickAddNewForm}
				>
					<AddCircleOutlineIcon style={{ marginRight: '12px' }} />
					<ContentKorean style={{ paddingTop: '0.1em' }}>새 지원서 추가하기</ContentKorean>
				</InnerContainer>
				{/* <AddApplicationButton>+</AddApplicationButton> */}
				{/* </Link> */}
			</Container>
		</>
	);
};

export default AddApplicationFormCard;
