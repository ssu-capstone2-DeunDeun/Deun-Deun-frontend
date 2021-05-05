import React, { useCallback, useEffect } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { ContentKorean } from 'components/ClubPostCardSmall/styles';
import { Container, InnerContainer } from './styles';
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
			<Container onClick={onClickAddNewForm}>
				<InnerContainer className="inner">
					<AddCircleOutlineIcon style={{ marginRight: '1vw' }} />
					<ContentKorean>새 지원서 추가하기</ContentKorean>
				</InnerContainer>
			</Container>
		</>
	);
};

export default AddApplicationFormCard;