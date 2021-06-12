import React, { useCallback } from 'react';
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
const DeleteApplicationModal = ({
	id,
	show,
	children,
	onCloseModal,
	setShowDeleteModal,
	title,
	setApplicationList,
	applicationList,
	clubName
}) => {
	const stopPropagation = useCallback((e) => {
		e.stopPropagation();
	}, []);

	const onClickDelete = useCallback(
		(e) => {
			const id = parseInt(e.target.id);
			setApplicationList(applicationList.filter((application) => application.applyFormId !== id));
			setShowDeleteModal(false);
			axios({
				method: 'delete',
				url: `${API_BASE_URL}/clubs/${clubName}/forms/${id}`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
				}
			})
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		[setApplicationList, setShowDeleteModal, applicationList, clubName]
	);

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
			<div onClick={stopPropagation}>
				<ModalTitle>지원서 양식 삭제</ModalTitle>
				<CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
				{children}
				<ContentContainer>
					<ContentKorean>{title} 지원서를 삭제하시겠어요?</ContentKorean>
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

export default DeleteApplicationModal;
