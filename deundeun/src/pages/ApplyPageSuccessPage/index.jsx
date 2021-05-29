import ApplySuccess from 'components/apply/ApplySuccess';
import BasicTemplateHeader from 'components/common/BasicTemplateHeader/index';
import React from 'react';



const ApplyPage = ({ children }) => {
    return (
        <BasicTemplateHeader>
            <ApplySuccess />
        </BasicTemplateHeader>
    );
};

export default ApplyPage;