import ApplicantManagementForm from 'components/manager/ApplicantManagementForm'
import { getApplicant, getClubs, getRecruits } from 'modules/currentApplyForm';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const ApplicantManagePage = () => {
	const dispatch = useDispatch();
	const { getClub, recruits, applicants } = useSelector(({ currentApplyForm }) => ({
		getClub: currentApplyForm.getClubs,
		recruits: currentApplyForm.getRecruits,
		applicants: currentApplyForm.getApplicant,
	}))

	useEffect(() => {
		if (getClub) {
			dispatch(getRecruits(getClub[0].clubResponseDto.clubName))
		}
	}, [dispatch, getClub])

	useEffect(() => {
		dispatch(getClubs());
	}, [dispatch]);

	const onClick = (recruitId) => {
		dispatch(getApplicant(recruitId));
	}

	return (
		<ApplicantManagementForm applicants={applicants} onClick={onClick} recruits={recruits} />
	);
};

export default ApplicantManagePage;
