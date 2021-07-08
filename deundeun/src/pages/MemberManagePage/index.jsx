import MemberManagementForm from 'components/manager/MemberManagementForm';
import { getClubs, sendAlarm } from 'lib/api/auth';
import { getMemberInfo } from 'modules/memberManageInfo';
import { initialValue, inputContentType, inputValue } from 'modules/sendMsgForm';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const MemberManagePage = () => {

	const dispatch = useDispatch();
	const [clubName, setClubName] = useState(null);
	const { memberInfo, message, sendMsgForm } = useSelector(({ memberManageInfo, sendMsgForm }) => (
		{
			memberInfo: memberManageInfo,
			message: sendMsgForm.message,
			sendMsgForm: sendMsgForm,
		}
	))

	useEffect(() => {
		async function loadClubs() {
			await getClubs().then(response => {
				setClubName(response.data[0].clubResponseDto.clubName);
				dispatch(inputValue({ type: "clubId", value: response.data[0].clubResponseDto.clubId }))
			})
		}
		loadClubs();
	}, [dispatch]);

	useEffect(() => {
		clubName && dispatch(getMemberInfo(clubName))
	}, [dispatch, clubName]);


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
		<>
			{ memberInfo && <MemberManagementForm
				clubName={clubName}
				memberInfo={memberInfo.getMemberInfo}

				sendEmail={sendEmail}
				sendMsgForm={sendMsgForm}
				onResetContent={onResetContent}
				onResetEmail={onResetEmail}
				onChangeEmail={onChangeEmail}
				onChangeContent={onChangeContent}
				message={message}
				onChangeType={onChangeType}
				onResetType={onResetType}
			/>}
		</>

	);
};

export default MemberManagePage;
