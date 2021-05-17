import Button from 'components/common/Button';
import React, { useState } from 'react';
import styled from 'styled-components';
import friend from '../../img/tag/friend.jpg';
import design from '../../img/tag/design.jpg';
import development from '../../img/tag/development.jpg';
import economy from '../../img/tag/economy.jpg';
import sports from '../../img/tag/sports.jpg';
import voca from '../../img/tag/voca.jpg';
import volunteer from '../../img/tag/volunteer.jpg';
import employment from '../../img/tag/employment.jpg';


const RegisterFormBlock = styled.div`
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
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:15px;
    }
    .info{
        font-family: NotoSansKR;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:15px;
    }
    .subinfo{
        font-family: NotoSansKR;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #9d9d9d;
        margin-bottom:88px;
    }
`;

const TagsBox = styled.div`
    display:flex;
    flex-wrap:wrap;

    .tags{
        width:156px;
        height:156px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        background-size:contain;
        margin:0 0  63px 45px;
        font-size:22px;
        font-weight:500;
        cursor:pointer;
        color:#ffffff;
        filter:brightness(50%);


    }
    .active{
            filter:brightness(100%);
    }
    .tag1{
        background-image:url(${development});
    }
    .tag2{
        background-image:url(${design});
    }
    .tag3{
        background-image:url(${economy});
    }
    .tag4{
        background-image:url(${sports});
    }
    .tag5{
        background-image:url(${voca});
    }
    .tag6{
        background-image:url(${friend});
    }
    .tag7{
        background-image:url(${volunteer});
    }
    .tag8{
        background-image:url(${employment});

    }
    
`;

const ButtonBlock = styled.div`
    text-align:center;
    margin-top:47px; 
`;

const RegisterForm2 = () => {
    const tag1 = ["개발", "디자인", "경제 / 경영", "스포츠", "어학", "친목", "봉사", "취업"];
    let setLists = [];
    let count = 0;

    const onInsert = (e) => {
        const thisEle = e.target;

        if (thisEle.classList.contains("active")) {
            thisEle.classList.remove("active");
            count -= 1;
            setLists = setLists.filter(list => list !== thisEle.innerText);
            console.log(setLists);
        }
        else {
            if (count === 3) {
                return;
            }
            thisEle.classList.add("active");
            count += 1;
            setLists = setLists.concat(thisEle.innerText);
            console.log(setLists);
        }

    }
    return (
        <RegisterFormBlock>
            <RegisterInfoBox>
                <div class="step">STEP 2.</div>
                <div class="info">
                    <div>닉네임님, 환영합니다!</div>
                    <div>관심있는 태그를 설정해주세요.</div>
                </div>
                <div class="subinfo">관심 태그는 최대 3개까지 선택할 수 있습니다.</div>
            </RegisterInfoBox>

            <TagsBox>
                <div className="tags tag1" onClick={onInsert}>{tag1[0]}</div>
                <div className="tags tag2" onClick={onInsert}>{tag1[1]}</div>
                <div className="tags tag3" onClick={onInsert}>{tag1[2]}</div>
                <div className="tags tag4" onClick={onInsert}>{tag1[3]}</div>
                <div className="tags tag5" onClick={onInsert}>{tag1[4]}</div>
                <div className="tags tag6" onClick={onInsert}>{tag1[5]}</div>
                <div className="tags tag7" onClick={onInsert}>{tag1[6]}</div>
                <div className="tags tag8" onClick={onInsert}>{tag1[7]}</div>
            </TagsBox>

            <ButtonBlock>
                <Button registerBtn1 to="/">건너뛰기</Button>
                <Button registerBtn2 to="/">다음 단계로</Button>
            </ButtonBlock>
        </RegisterFormBlock >
    );
};

export default RegisterForm2;