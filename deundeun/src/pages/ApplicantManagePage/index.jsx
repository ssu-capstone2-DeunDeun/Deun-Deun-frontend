import ApplicantManagementForm from 'components/manager/ApplicantManagementForm'
import { sendAlarm } from 'lib/api/auth';
import { getApplicant, getClubs, getRecruits, initialApplicant } from 'modules/currentApplyForm';
import { initialValue, inputContentType, inputValue } from 'modules/sendMsgForm';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ApplicantManagePage = () => {
	const dispatch = useDispatch();
	const { getClub, recruits, applicants, message, sendMsgForm } = useSelector(({ currentApplyForm, sendMsgForm }) => ({
		getClub: currentApplyForm.getClubs,
		recruits: currentApplyForm.getRecruits,
		applicants: currentApplyForm.getApplicant,
		message: sendMsgForm.message,
		sendMsgForm: sendMsgForm,
	}))
	const [clubName, setClubName] = useState(null);

	const onClick = (recruitId) => {
		dispatch(getApplicant(recruitId));
	}

	useEffect(() => {
		if (getClub) {
			dispatch(getRecruits(getClub[0].clubResponseDto.clubName));
			setClubName(getClub[0].clubResponseDto.clubName);
			dispatch(inputValue({ type: "clubId", value: getClub[0].clubResponseDto.clubId }));
		}
		dispatch(initialApplicant());
	}, [dispatch, getClub]);

	useEffect(() => {
		dispatch(getClubs());
	}, [dispatch]);

	const onChangeContent = (e) => {
		dispatch(inputValue({ type: "message", value: e.target.value }))
	}

	const onResetContent = (e) => {
		dispatch(inputValue({ type: "message", value: "" }))
	}
	const onResetType = (e) => {
		dispatch(inputValue({ type: "contentType", value: "" }))
	}

	const onChangeEmail = (emailList) => {
		dispatch(inputValue({ type: "emails", value: emailList }))
	}
	const onResetEmail = () => {
		dispatch(inputValue({ type: "emails", value: [] }))
	}
	useEffect(() => {
		dispatch(initialValue())
	}, [dispatch]);

	const sendEmail = () => {
		sendAlarm(sendMsgForm);
	}
	const onChangeType = (value) => {
		dispatch(inputContentType(value))
	}

	return (
		<ApplicantManagementForm
			clubName={clubName}
			sendEmail={sendEmail}
			sendMsgForm={sendMsgForm}
			onResetContent={onResetContent}
			onResetEmail={onResetEmail}
			onChangeEmail={onChangeEmail}
			onChangeContent={onChangeContent}
			message={message}
			applicants={applicants}
			onClick={onClick}
			recruits={recruits}
			onChangeType={onChangeType}
			onResetType={onResetType}
		/>
	);
};

export default ApplicantManagePage;
