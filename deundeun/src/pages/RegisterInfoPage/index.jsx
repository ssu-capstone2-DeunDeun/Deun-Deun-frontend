import RegisterInfoContainer from 'container/register/RegisterInfoContainer';
import BasicTemplateHeader from 'pages/RegisterHashtagPage/pages/RegisterInfoPage/components/common/BasicTemplateHeader/index';
import React from 'pages/RegisterInfoPage/react';


const RegisterPage = () => {
    return (
        <BasicTemplateHeader>
            <RegisterInfoContainer />
        </BasicTemplateHeader>


    )
};

export default RegisterPage;