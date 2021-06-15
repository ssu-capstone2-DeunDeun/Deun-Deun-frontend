import MemberManagementForm from 'components/manager/MemberManagementForm';
import { getClubs } from 'lib/api/auth';
import { getMemberInfo } from 'modules/memberManageInfo';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const MemberManagePage = () => {

	const dispatch = useDispatch();
	const [clubName, setClubName] = useState(null);
	const { memberInfo } = useSelector(({ memberManageInfo }) => (
		{
			memberInfo: memberManageInfo
		}
	))

	useEffect(() => {
		async function loadClubs() {
			await getClubs().then(response => setClubName(response.data[0].clubResponseDto.clubName))
		}
		loadClubs();

	}, [dispatch]);

	useEffect(() => {
		clubName && dispatch(getMemberInfo(clubName))
	}, [dispatch, clubName])

	return (
		<>
			{ memberInfo && <MemberManagementForm clubName={clubName} memberInfo={memberInfo.getMemberInfo} />}
		</>

	);
};

export default MemberManagePage;
