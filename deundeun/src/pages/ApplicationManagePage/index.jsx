import AddApplicationFormCard from 'components/AddApplicationFormCard';
import ApplicationFormCard from 'components/ApplicationFormCard';
import React, { useEffect } from 'react';
import { Container } from './styles';
const ApplicationManagePage = ({ setAddNewForm }) => {
	return (
		//
		<Container>
			<AddApplicationFormCard setAddNewForm={setAddNewForm} />
			<ApplicationFormCard />
			<ApplicationFormCard />
		</Container>
	);
};

export default ApplicationManagePage;
