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
import { SettingsOutlined } from '../../../../node_modules/@material-ui/icons/index';
const DeleteApplicationModal = ({
	id,
	show,
	onCloseModal,
	setShowDeleteModal,
	setApplicationList,
	applicationList,
	clubName
}) => {
	const [title, setTitle] = useState('');

	const onClickDelete = useCallback(
		(e) => {
			const deleteId = parseInt(e.target.id);
			console.log(e.target.id);
			setApplicationList(applicationList.filter((application) => application.applyFormId !== deleteId));
			setShowDeleteModal(false);
			axios({
				method: 'delete',
				url: `${API_BASE_URL}/clubs/${clubName}/forms/${deleteId}`,
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

	useEffect(() => {
		const obj = applicationList.find((application) => application.applyFormId === id);
		if (obj) {
			setTitle(obj.title);
		}
	}, [applicationList, id]);

	if (!show) {
		return null;
	}

	return (
		//
		<CreateModal>
			<div>
				<ModalTitle>지원서 양식 삭제</ModalTitle>
				<CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
				<ContentContainer>
					<ContentKorean>" {title} "</ContentKorean>
					<ContentKorean>지원서를 삭제하시겠어요?</ContentKorean>
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
