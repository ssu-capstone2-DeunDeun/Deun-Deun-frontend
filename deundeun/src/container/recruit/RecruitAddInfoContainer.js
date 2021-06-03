import RecruitAddPage from 'pages/RecruitAddPage/index';
import { useCallback, useState } from 'react';

const RecruitAddInfoContainer = ({ setAddNewForm }) => {
	const [deadline, setDeadline] = useState({
		startDate: new Date(),
		endDate: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
		submitStartDate: new Date().getTime() + 8 * 24 * 60 * 60 * 1000,
		submitEndDate: new Date().getTime() + 15 * 24 * 60 * 60 * 1000,
		interviewStartDate: new Date().getTime() + 16 * 24 * 60 * 60 * 1000,
		interviewEndDate: new Date().getTime() + 23 * 24 * 60 * 60 * 1000,
		finalPassStartDate: new Date().getTime() + 24 * 24 * 60 * 60 * 1000,
		finalPassEndDate: new Date().getTime() + 31 * 24 * 60 * 60 * 1000
	});

	const onChangeStartDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				startDate: date
			});
		},
		[deadline]
	);

	const onChangeEndDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				endDate: date
			});
		},
		[deadline]
	);
	const onChangeSubmitStartDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				submitStartDate: date
			});
		},
		[deadline]
	);
	const onChangeSubmitEndDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				submitEndDate: date
			});
		},
		[deadline]
	);
	const onChangeInterviewStartDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				interviewStartDate: date
			});
		},
		[deadline]
	);
	const onChangeInterviewEndDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				interviewEndDate: date
			});
		},
		[deadline]
	);
	const onChangeFinalPassStartDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				finalPassStartDate: date
			});
		},
		[deadline]
	);

	const onChangeFinalPassEndDate = useCallback(
		(date) => {
			setDeadline({
				...deadline,
				finalPassEndDate: date
			});
		},
		[deadline]
	);
	return (
		<RecruitAddPage
			setAddNewForm={setAddNewForm}
			deadline={deadline}
			setDeadline={setDeadline}
			onChangeStartDate={onChangeStartDate}
			onChangeEndDate={onChangeEndDate}
			onChangeSubmitStartDate={onChangeSubmitStartDate}
			onChangeSubmitEndDate={onChangeSubmitEndDate}
			onChangeInterviewStartDate={onChangeInterviewStartDate}
			onChangeInterviewEndDate={onChangeInterviewEndDate}
			onChangeFinalPassStartDate={onChangeFinalPassStartDate}
			onChangeFinalPassEndDate={onChangeFinalPassEndDate}
		/>
	);
};

export default RecruitAddInfoContainer;
