import { withStyles } from '@material-ui/core';
import StyledCheckbox from 'components/common/StyledCheckbox';
import { changeInput } from 'modules/recruitAddInfo';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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

const LoadApplicationModal = ({ show, children, onCloseModal, applicationList, setFormError }) => {
	const [applicationId, setApplicationId] = useState('-1');
	const [applicationTitle, setApplicationTitle] = useState('');
	const dispatch = useDispatch();

	const stopPropagation = useCallback((e) => {
		e.stopPropagation();
	}, []);

	const onSubmitApplication = useCallback(
		(e) => {
			// dispatch application id
			setFormError(false);
			dispatch(changeInput({ type: 'clubApplyFormId', value: parseInt(applicationId) }));
			dispatch(changeInput({ type: 'clubApplyFormTitle', value: applicationTitle }));
			console.log(e.currentTarget.title);
			onCloseModal();
		},
		[onCloseModal, applicationId, setFormError, dispatch, applicationTitle]
	);

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
					{applicationList.map((application) => (
						<div key={application.applyFormId}>
							<ListItem>
								<StyledCheckbox
									id={application.applyFormId + ''}
									applicationId={applicationId}
									title={application.title}
									setApplicationId={setApplicationId}
									setApplicationTitle={setApplicationTitle}
								/>
								<ApplicationTitle>{application.title}</ApplicationTitle>
							</ListItem>
						</div>
					))}

					<SubmitButton
						id={applicationId}
						title={applicationTitle}
						onClick={onSubmitApplication}
						style={{ marginTop: '2em' }}
					>
						첨부하기
					</SubmitButton>
				</ContentContainer>
			</div>
		</CreateModal>
	);
};

export default LoadApplicationModal;
