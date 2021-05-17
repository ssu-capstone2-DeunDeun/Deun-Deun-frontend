import ApplyForm from 'components/apply/ApplyForm';
import BasicTemplate from 'components/common/BasicTemplate';
import React from 'react';

const ApplyPage = ({ children }) => {
    return (
        <BasicTemplate club="IT동아리 일리네어" sector="IT / 개발">
            <ApplyForm />
        </BasicTemplate>
    );
};

export default ApplyPage;