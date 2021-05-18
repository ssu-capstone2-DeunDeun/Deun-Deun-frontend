import { withStyles } from '@material-ui/core';
import React, { useCallback } from 'react';
import { CloseModalButton, CreateModal, ModalTitle } from './styles';

const ImageModal = ({ show, children, onCloseModal }) => {
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
				{/* <ModalTitle>이미지 크게보기</ModalTitle> */}
				<CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
				{children}
			</div>
		</CreateModal>
	);
};

export default ImageModal;
