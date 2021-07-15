import React, { useCallback } from 'react';
import { ContentKorean } from 'components/ClubPostCardSmall/styles';
import { Container, InnerContainer } from './styles';
import loadable from '@loadable/component';

const AddCircleOutlineIcon = loadable(() => import('@material-ui/icons/AddCircleOutline'));

const AddRecruitAnnounceCard = ({ setAddNewForm }) => {
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
				<InnerContainer className="inner" onClick={onClickAddNewForm}>
					<AddCircleOutlineIcon style={{ marginRight: '12px' }} />
					<ContentKorean style={{ paddingTop: '0.15em' }}>모집 공고 추가하기</ContentKorean>
				</InnerContainer>
			</Container>
		</>
	);
};

export default AddRecruitAnnounceCard;
