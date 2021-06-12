import React from 'react';
import { ButtonContainer, Button } from 'components/MyApplicationCard/styles';
import { ApplicationDetail, ApplicationTitle, Container, Divider } from './styles';
import DeleteApplicationModal from 'components/modal/DeleteApplicationModal/index';
const ApplicationFormCard = ({
	id,
	title,
	clubName,
	onDeleteApplication,
	showDeleteModal,
	onCloseModal,
	setShowDeleteModal,
	applicationList,
	setApplicationList
}) => {
	return (
		//
		<Container>
			<ApplicationTitle>{title}</ApplicationTitle>
			<Divider />
			<ApplicationDetail>{clubName}</ApplicationDetail>
			{/* <ApplicationDetail>2021.01.01 수정</ApplicationDetail> */}
			<ButtonContainer>
				<Button style={{ marginRight: '1vw' }}>수정하기</Button>
				<Button id={id} onClick={onDeleteApplication}>
					삭제하기
				</Button>
			</ButtonContainer>
			<DeleteApplicationModal
				id={id}
				title={title}
				show={showDeleteModal}
				onCloseModal={onCloseModal}
				setShowDeleteModal={setShowDeleteModal}
				onDeleteApplication={onDeleteApplication}
				applicationList={applicationList}
				setApplicationList={setApplicationList}
				clubName={clubName}
			/>
		</Container>
	);
};

export default ApplicationFormCard;
