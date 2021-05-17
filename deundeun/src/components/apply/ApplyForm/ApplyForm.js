import Button from 'components/common/Button';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CheckList from './CheckList';

const RegisterFormBlock = styled.div`
        width:1100px;
        margin:0 auto;
`;

const ApplyInfoBox = styled.div`
    font-family: NotoSansKR;
    font-stretch: normal;
    font-style: normal;
    line-height:normal;
    letter-spacing: normal;
    text-align: left;
    .step{
        font-size: 16px;
        font-weight: 500;
        color: #555555;
        margin-bottom:4px;
    }
    .info{
        font-size: 32px;
        font-weight: bold;
        color: #282828;
        margin-bottom:38.1px;
        padding-bottom:21.9px;
        border-bottom:3px solid #282828;
    }
`;

const FormContent = styled.div`
    .name{
        font-family: NotoSansKR;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.45;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
    }
`;

const StyledTextarea = styled.textarea`
    width:1080px;
    height:148px;
    margin:24px 0 48px;
    font-size:14px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    padding-left:20.1px;
    padding-top:22.1px;
    color:#282828;
`;


const ButtonBlock = styled.div`
    /* margin-top:73px; */
    text-align:center;
`;


const ApplyForm = () => {
    // lists를 나중에는 props로 받아와야 한다. 우선은, 임의적으로 생성했습니다.
    const lists = ["내용을 입력해주세요.", "내용을 입력해주세요.", "내용을 입력해주세요.", "내용을 입력해주세요.", "내용을 입력해주세요."];
    return (
        <RegisterFormBlock>
            <ApplyInfoBox>
                <div class="step">게시글</div>
                <div class="info">
                    <div>[3기] 야! 너도 일리네어 할 수 있어!</div>
                </div>
            </ApplyInfoBox>

            <form>
                <FormContent>
                    <div class="name">Q1 서술형 질문 제목 텍스트 질문 제목 테스트</div>
                    <StyledTextarea placeholder="내용을 입력해주세요."></StyledTextarea>
                </FormContent>
                <FormContent>
                    <div class="name">Q2 서술형 질문 제목 텍스트 질문 제목 텍스트</div>
                    <StyledTextarea placeholder="내용을 입력해주세요."></StyledTextarea>
                </FormContent>
                <FormContent>
                    <div class="name">Q3 서술형 질문 제목 텍스트 질문 제목 텍스트</div>
                    <StyledTextarea placeholder="내용을 입력해주세요."></StyledTextarea>
                </FormContent>
                <FormContent>
                    <div class="name">Q4 선택형 질문 제목</div>
                    <CheckList lists={lists} />               {/* lists를 문항으로 만들어주는 컴포넌트 */}
                </FormContent >

                <ButtonBlock>
                    <Button applyBtn to="/apply/success">지원하기</Button>
                </ButtonBlock>
            </form >
        </RegisterFormBlock >
    );
};

export default ApplyForm;