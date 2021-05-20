import { withStyles } from '@material-ui/core';
import React, { useCallback } from 'react';
import { ModalTitle } from '../LoadApplicationModal/styles';
import { CloseModalButton, CreateModal } from './styles';
import styled from 'styled-components';

const Image = styled.div`
	width: 700px;
	height: 100%;

	background-color: #f7f7f7;
	background-image: url(${(props) => props.modalImageURL || ''});
	background-size: cover;
	background-repeat: no-repeat;

	margin: 0 auto;
`;

const ImageModal = ({ show, children, onCloseModal, modalImageURL }) => {
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
				<ModalTitle>이미지 크게보기</ModalTitle>
				<CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
				<Image modalImageURL={modalImageURL} />
				{children}
			</div>
		</CreateModal>
	);
};

export default ImageModal;
