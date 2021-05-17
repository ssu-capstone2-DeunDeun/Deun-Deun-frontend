import React from 'react';
import styled from 'styled-components';

const LoginFormBlock = styled.div`
    width:848.3px;
    margin:0 auto;
    margin-top: 79.5px;
`;

const RegisterInfoBox = styled.div`
    .step{
        font-family: GmarketSans;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:14.6px;
    }
`;

const LoginForm = () => {
    return (
        <LoginFormBlock>
            <RegisterInfoBox>
                <div class="step">소셜 로그인</div>
            </RegisterInfoBox>
        </LoginFormBlock>
    );
};

export default LoginForm;