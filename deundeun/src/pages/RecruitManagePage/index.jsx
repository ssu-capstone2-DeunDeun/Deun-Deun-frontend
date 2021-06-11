import AddRecruitAnnounceCard from 'components/AddRecruitAnnounceCard';
import RecruitAnnounceCard from 'components/RecruitAnnounceCard';
import React from 'react';
import { ContainerColumn } from 'styles';

const RecruitManagePage = ({ setAddNewForm }) => {
	return (
		//
		<ContainerColumn>
			<AddRecruitAnnounceCard setAddNewForm={setAddNewForm} />
			<RecruitAnnounceCard />
		</ContainerColumn>
	);
};

export default RecruitManagePage;
