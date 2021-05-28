import BasicTemplateHeader from 'components/common/BasicTemplateHeader/index';
import LoginForm from 'components/login';
import React from 'react';

const LoginPage = () => {
    return (
        <BasicTemplateHeader>
            <LoginForm />
        </BasicTemplateHeader>

    );
};

export default LoginPage;