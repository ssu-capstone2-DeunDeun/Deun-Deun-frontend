import RecruitAddPage from 'pages/RecruitAddPage/index';
import { useCallback, useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import { changeInput } from 'modules/recruitAddInfo';
import { useDispatch } from 'react-redux';
const RecruitAddInfoContainer = ({ setAddNewForm }) => {
	const [clubName, setClubName] = useState('');
	const [applicationList, setApplicationList] = useState([]);
	const [applicationId, setApplicationId] = useState(-1);
	const [deadline, setDeadline] = useState({
		submitStartDate: new Date(),
		submitEndDate: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
		documentPassAnnounceDate: new Date().getTime() + 8 * 24 * 60 * 60 * 1000,
		interviewStartDate: new Date().getTime() + 9 * 24 * 60 * 60 * 1000,
		interviewEndDate: new Date().getTime() + 16 * 24 * 60 * 60 * 1000,
		finalPassAnnounceDate: new Date().getTime() + 17 * 24 * 60 * 60 * 1000
	});
	const dispatch = useDispatch();

	const onChangeSubmitStartDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				submitStartDate: date
			});
			dispatch(changeInput({ type: 'submitStartDate', value: date }));
		},
		[deadline, dispatch]
	);

	const onChangeSubmitEndDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				submitEndDate: date
			});
			dispatch(changeInput({ type: 'submitEndDate', value: date }));
		},
		[deadline, dispatch]
	);
	const onChangeDocumentPassAnnounceDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				documentPassAnnounceDate: date
			});
			dispatch(changeInput({ type: 'documentPassAnnounceDate', value: date }));
		},
		[deadline, dispatch]
	);
	const onChangeInterviewStartDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				interviewStartDate: date
			});
			dispatch(changeInput({ type: 'interviewStartDate', value: date }));
		},
		[deadline, dispatch]
	);
	const onChangeInterviewEndDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				interviewEndDate: date
			});
			dispatch(changeInput({ type: 'interviewEndDate', value: date }));
		},
		[deadline, dispatch]
	);
	const onChangeFinalPassAnnounceDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				finalPassAnnounceDate: date
			});
			dispatch(changeInput({ type: 'finalPassAnnounceDate', value: date }));
		},
		[deadline, dispatch]
	);

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
		});
	}, [clubName]);

	useEffect(() => {
		if (clubName !== '') {
			axios({
				method: 'get',
				url: `${API_BASE_URL}/clubs/${clubName}/forms`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
				}
			}).then((response) => {
				setApplicationList(response.data);
			});
		}
	}, [clubName]);

	return (
		<RecruitAddPage
			setAddNewForm={setAddNewForm}
			deadline={deadline}
			setDeadline={setDeadline}
			onChangeSubmitStartDate={onChangeSubmitStartDate}
			onChangeSubmitEndDate={onChangeSubmitEndDate}
			onChangeInterviewStartDate={onChangeInterviewStartDate}
			onChangeInterviewEndDate={onChangeInterviewEndDate}
			onChangeDocumentPassAnnounceDate={onChangeDocumentPassAnnounceDate}
			onChangeFinalPassAnnounceDate={onChangeFinalPassAnnounceDate}
			applicationList={applicationList}
			clubName={clubName}
		/>
	);
};

export default RecruitAddInfoContainer;
