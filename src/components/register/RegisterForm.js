import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';

const RegisterFormBlock = styled.div`
        width:1100px;
        margin:0 auto;
`;

const RegisterInfoBox = styled.div`
    .step{
        font-family: GmarketSans;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:14.6px;
    }
    .info{
        font-family: NotoSansKR;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:102.5px;
    }
`;

const FormContent = styled.div`
    .name{
        font-family: NotoSansKR;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.45;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
    }
    .checking{
        display:flex;
        position:relative; 

        button{
            position:absolute;
            top:11%;
            right:-4%;
            border:none;
            width:263px;
            background:#cecece;
            height:80px;
            font-size:20px;
            color:#ffffff;
            font-weight:bold;
            cursor: pointer;
        }
    }  
`;


const StyledInput = styled.input`
    width:1109px;
    height:80px;
    margin:19.5px 0 78.4px;
    font-size:20px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    padding-left:30px;
`;


const ButtonBlock = styled.div`
    margin-top:50px;
    text-align:center;
`;

const RegisterForm = () => {
    return (
        <RegisterFormBlock>
            <RegisterInfoBox>
                <div class="step">STEP 1.</div>
                <div class="info">
                    <div>반갑습니다!</div>
                    <div>기본 정보를 입력해주세요.</div>
                </div>
            </RegisterInfoBox>
            <form>
                <FormContent>
                    <div class="name">이름</div>
                    <StyledInput placeholder="이름을 입력해주세요."></StyledInput>
                </FormContent>
                <FormContent>
                    <div class="name">닉네임</div>
                    <div class="checking">
                        <StyledInput placeholder="닉네임을 입력해주세요."></StyledInput>
                        <button>중복 검사</button>
                    </div>
                </FormContent>
                <FormContent>
                    <div class="name">이메일</div>
                    <StyledInput placeholder="이메일을 입력해주세요."></StyledInput>
                </FormContent>
                <ButtonBlock>
                    <Button to="/register/2">다음 단계로</Button>
                </ButtonBlock>
            </form>
        </RegisterFormBlock>
    );
};

export default RegisterForm;