import ApplyForm from 'components/apply/ApplyForm';
import BasicTemplate from 'components/common/BasicTemplate';
import { getApplyForms } from 'lib/api/apply';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ApplyPage = ({ match }) => {
	return (
		<BasicTemplate club="IT동아리 일리네어" sector="IT / 개발">
			<ApplyForm match={match} />
		</BasicTemplate>
	);
};

export default withRouter(ApplyPage);
