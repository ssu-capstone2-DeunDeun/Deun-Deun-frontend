import AddApplicationFormCard from 'components/AddApplicationFormCard';
import ApplicationFormCard from 'components/ApplicationFormCard';
import { initializeQuestion } from 'modules/applicationAddInfo';
import { initialField } from 'modules/registerUserInfo';
import React, { useCallback, useEffect, useState } from 'react';
import { createDispatchHook, useDispatch, useSelector } from 'react-redux';
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import { Container, SpinnerContainer } from './styles';
import LoadingSpinner from 'components/common/LoadingSpinner/index';
import DeleteApplicationModal from 'components/modal/DeleteApplicationModal/index';
const ApplicationManagePage = ({ setAddNewForm }) => {
	const [clubName, setClubName] = useState('');
	const [applicationList, setApplicationList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [deleteId, setDeleteId] = useState(-1);
	const [deleteTitle, setDeleteTitle] = useState('');

	const onDeleteApplication = useCallback((e) => {
		// 모달창 띄우기
		setShowDeleteModal(true);
		setDeleteId(parseInt(e.target.id));
	}, []);

	const onCloseModal = useCallback((e) => {
		setShowDeleteModal(false);
	}, []);

	useEffect(() => {
		axios({
			method: 'get',
			url: `${API_BASE_URL}/user/clubs`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		}).then((response) => {
			const res = response.data[0].clubResponseDto;
			setClubName(res.clubName);
			console.log(clubName);
		});
	}, []);

	useEffect(() => {
		if (clubName) {
			axios({
				method: 'get',
				url: `${API_BASE_URL}/clubs/${clubName}/forms`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
				}
			}).then((response) => {
				const res = response.data;
				setApplicationList(res);
				setLoading(false);
			});
		}
	}, [clubName]);

	return (
		//
		<Container>
			<AddApplicationFormCard setAddNewForm={setAddNewForm} />
			{!loading ? (
				applicationList.map((application) => (
					<ApplicationFormCard
						key={application.applyFormId}
						id={application.applyFormId}
						title={application.title}
						clubName={clubName}
						onDeleteApplication={onDeleteApplication}
						onCloseModal={onCloseModal}
						showDeleteModal={showDeleteModal}
						setShowDeleteModal={setShowDeleteModal}
						applicationList={applicationList}
						setApplicationList={setApplicationList}
					/>
				))
			) : (
				<>
					<SpinnerContainer>
						<LoadingSpinner size="large" style={{ margin: '0 auto' }} />
					</SpinnerContainer>
				</>
			)}
			{/* <SpinnerContainer>
				<LoadingSpinner size="large" style={{ margin: '0 auto' }} />
			</SpinnerContainer> */}
			<DeleteApplicationModal
				id={deleteId}
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

export default ApplicationManagePage;
