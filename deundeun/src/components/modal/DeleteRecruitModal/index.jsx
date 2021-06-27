import React, { useCallback, useEffect, useState } from 'react';
import axios from '../../../../node_modules/axios/index';
import {
	CreateModal,
	ModalTitle,
	CloseModalButton,
	SubmitButton,
	ButtonContainer,
	ContentKorean,
	ContentContainer
} from './styles';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
const DeleteRecruitModal = ({ id, title, show, onCloseModal, setShowDeleteModal, recruitList, setRecruitList }) => {
	const onClickDelete = (e) => {
		const deleteId = parseInt(e.target.id);
		axios({
			method: 'delete',
			url: `${API_BASE_URL}/recruits/${deleteId}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		})
			.then((res) => {
				setRecruitList(recruitList.filter((recruit) => recruit.id !== deleteId));
				setShowDeleteModal(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onClickCancel = useCallback(
		(e) => {
			setShowDeleteModal(false);
		},
		[setShowDeleteModal]
	);

	if (!show) {
		return null;
	}

	return (
		//
		<CreateModal>
			<div>
				<ModalTitle>모집 공고 삭제</ModalTitle>
				<CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
				<ContentContainer>
					<ContentKorean>" {title} "</ContentKorean>
					<ContentKorean>모집 공고를 삭제하시겠어요?</ContentKorean>
					<ContentKorean style={{ fontSize: '1.3rem' }}>(해당 작업은 되돌릴 수 없습니다.)</ContentKorean>
				</ContentContainer>

				<ButtonContainer>
					<SubmitButton id={id} onClick={onClickDelete}>
						확인
					</SubmitButton>
					<SubmitButton onClick={onClickCancel} className="cancel">
						취소
					</SubmitButton>
				</ButtonContainer>
			</div>
		</CreateModal>
	);
};

export default DeleteRecruitModal;
