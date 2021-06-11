import React from 'react';
import { Container, DeleteButton } from './styles';
const ClubHashtag = ({ id, value, onDeleteHashtag }) => {
	return (
		//
		<Container>
			{value}
			<DeleteButton id={id} onClick={onDeleteHashtag}>
				&times;
			</DeleteButton>
		</Container>
	);
};

export default ClubHashtag;
