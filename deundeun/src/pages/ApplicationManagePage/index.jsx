import AddApplicationFormCard from 'components/AddApplicationFormCard';
import ApplicationFormCard from 'components/ApplicationFormCard';
import React from 'react';
import { Container } from './styles';
const ApplicationManagePage = () => {
	return (
		//
		<Container>
			<AddApplicationFormCard />
			<ApplicationFormCard />
			<ApplicationFormCard />
		</Container>
	);
};

export default ApplicationManagePage;
