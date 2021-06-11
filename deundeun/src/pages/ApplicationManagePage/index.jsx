import AddApplicationFormCard from 'components/AddApplicationFormCard';
import ApplicationFormCard from 'components/ApplicationFormCard';
import { initializeQuestion } from 'modules/applicationAddInfo';
import { initialField } from 'modules/registerUserInfo';
import React, { useEffect } from 'react';
import { createDispatchHook, useDispatch } from 'react-redux';
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
