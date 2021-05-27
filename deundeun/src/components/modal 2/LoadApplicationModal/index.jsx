import { withStyles } from '@material-ui/core';
import StyledCheckbox from 'components/common/StyledCheckbox';
import React, { useCallback } from 'react';
import {
	CloseModalButton,
	CreateModal,
	ModalTitle,
	SubmitButton,
	ContentContainer,
	FormList,
	ListItem,
	ApplicationTitle
} from './styles';

const LoadApplicationModal = ({ show, children, onCloseModal }) => {
	const stopPropagation = useCallback((e) => {
		e.stopPropagation();
	}, []);

	if (!show) {
		return null;
	}

	return (
		//
		<CreateModal>
			<div onClick={stopPropagation}>
				<ModalTitle>지원서 불러오기</ModalTitle>
				<CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
				{children}
				<ContentContainer>
					<FormList>
						<ListItem>
							<StyledCheckbox />
							<ApplicationTitle>[3기] 야! 너도 트와이스 할 수 있어!</ApplicationTitle>
						</ListItem>
						<ListItem>
							<StyledCheckbox />
							<ApplicationTitle>[2기] 야! 너도 트와이스 할 수 있어!</ApplicationTitle>
						</ListItem>
						<ListItem>
							<StyledCheckbox />
							<ApplicationTitle>[1기] 야! 너도 트와이스 할 수 있어!</ApplicationTitle>
						</ListItem>
					</FormList>
					<SubmitButton>첨부하기</SubmitButton>
				</ContentContainer>
			</div>
		</CreateModal>
	);
};

export default LoadApplicationModal;
