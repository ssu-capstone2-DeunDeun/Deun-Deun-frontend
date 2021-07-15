import React from 'react';
import loadable from '@loadable/component';

const RecruitDetailForm = loadable(() => import('components/post/RecruitDetailForm'));
const BasicTemplate = loadable(() => import('components/common/BasicTemplate'));

const RecruitDetailPage = () => {
	return (
		<BasicTemplate club="IT동아리 일리네어" sector="IT / 개발">
			<RecruitDetailForm />
		</BasicTemplate>
	);
};

export default RecruitDetailPage;
