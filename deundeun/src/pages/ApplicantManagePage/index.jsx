import ApplicantManagementForm from 'components/manager/ApplicantManagementForm'
import { getClubs, getRecruits } from 'modules/currentApplyForm';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const ApplicantManagePage = () => {
	const [club, setClub] = useState(null);
	const dispatch = useDispatch();
	const { getClub, recruits } = useSelector(({ currentApplyForm }) => ({
		getClub: currentApplyForm.getClubs,
		recruits: currentApplyForm.getRecruits,

	}))

	useEffect(() => {
		if (getClub) {
			dispatch(getRecruits(getClub[0].clubResponseDto.clubName))
		}
	}, [dispatch, getClub])

	useEffect(() => {
		dispatch(getClubs());
	}, [dispatch]);


	return (
		<ApplicantManagementForm recruits={recruits} club={club} />
	);
};

export default ApplicantManagePage;
