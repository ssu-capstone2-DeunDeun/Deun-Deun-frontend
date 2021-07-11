import MemberManagementForm from 'components/manager/MemberManagementForm';
import { getClubs, sendAlarm } from 'lib/api/auth';
import { addClubPosition, deleteClubPosition, getClubPositions, updateClubPosition } from 'modules/manageMemberPosition';
import { assignAdminRole, assignParticipatePositions, getMemberInfo, quitAdminRole } from 'modules/memberManageInfo';
import { initialValue, inputContentType, inputValue } from 'modules/sendMsgForm';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MemberManagePage = () => {
	const dispatch = useDispatch();
	const [clubName, setClubName] = useState(null);
	const { memberInfo, message, sendMsgForm, clubPositions } = useSelector(({ memberManageInfo, sendMsgForm, manageMemberPosition }) => (
		{
			memberInfo: memberManageInfo,
			message: sendMsgForm.message,
			sendMsgForm: sendMsgForm,
			clubPositions: manageMemberPosition.clubPositions,
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

	useEffect(() => {
		clubName && dispatch(getClubPositions(clubName));
	}, [clubName, dispatch]);

	const addClubPos = (positionName) => {
		dispatch(addClubPosition({
			clubId: `${sendMsgForm.clubId}`,
			positionName,
		}));
	}

	const deleteClubPos = (positionId) => {
		dispatch(deleteClubPosition(positionId));
	};

	const updateClubPos = (positionName, positionId) => {
		const value = {
			positionId,
			clubPositionRequestDto: {
				clubId: `${sendMsgForm.clubId}`,
				positionName,
			}
		}
		dispatch(updateClubPosition(value));
	}

	const assignParticipateClubPos = (participateIds, positionId) => {
		const value = {
			participateIds: [participateIds],
			positionId,
		}
		dispatch(assignParticipatePositions(value))
	}

	const assignAdmin = (participateId) => {
		dispatch(assignAdminRole(participateId));
	};

	const quitAdmin = (participatedId) => {
		dispatch(quitAdminRole(participatedId));
	}
	return (
		<>
			{
				memberInfo &&
				<MemberManagementForm
					clubName={clubName}
					memberInfo={memberInfo.getMemberInfo}
					message={message}
					sendMsgForm={sendMsgForm}
					onResetContent={onResetContent}
					onResetEmail={onResetEmail}
					onChangeEmail={onChangeEmail}
					onChangeContent={onChangeContent}
					onChangeType={onChangeType}
					onResetType={onResetType}
					sendEmail={sendEmail}
					clubPositions={clubPositions}
					addClubPos={addClubPos}
					deleteClubPos={deleteClubPos}
					updateClubPos={updateClubPos}
					assignParticipateClubPos={assignParticipateClubPos}
					assignAdmin={assignAdmin}
					quitAdmin={quitAdmin}
				/>
			}
		</>

	);
};

export default MemberManagePage;
