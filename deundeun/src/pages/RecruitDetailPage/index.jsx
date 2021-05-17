import BasicTemplate from 'components/common/BasicTemplate';
import RecruitDetailForm from 'components/post/RecruitDetailForm';
import React from 'react';

const RecruitDetailPage = () => {
    return (
        <BasicTemplate club="IT동아리 일리네어" sector="IT / 개발">
            <RecruitDetailForm />
        </BasicTemplate>
    );
};

export default RecruitDetailPage;