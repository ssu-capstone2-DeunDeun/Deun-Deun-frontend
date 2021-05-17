import React from 'react';
import styled from 'styled-components';
import GROOPY from '../../img/logo/GROOPY.png';
import illi from '../../img/club/illi.jpg';

const BasicTemplateBlock = styled.div`
    width:1920px;
    height:2078px;
    padding:0 0 325.5px;
    background-color:#ffffff;
`;
const BasicHeaderBlock = styled.div` 
    height:348px;
    background:url(${illi}) no-repeat;
    background-size:cover;
    margin:0 0 76px;
`;

const BasicLogoBlock = styled.div`
    height:69.5px;
    border-bottom:1px solid #d3d3d3;
    display:flex;
    align-items:center;
    .logo{
        img{
            width:110px;
            height:44.1px;
            margin-left:35px;
        }
    }
`;

const BasicTitleBlock = styled.div`
    height:277.5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family: NotoSansKR;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;

    .sector{
        font-size:16px;
        font-weight:500;
    }
    .club{
        font-size: 44px;
        font-weight: 900;
    }
`;

const BasicTemplate = ({ children, club, sector }) => {
    return (
        <BasicTemplateBlock>
            <BasicHeaderBlock>
                <BasicLogoBlock>
                    <div class="logo">
                        <img src={GROOPY} alt="logo"></img>
                    </div>
                </BasicLogoBlock>
                <BasicTitleBlock>
                    <div class="sector">{sector}</div>
                    <div class="club">{club}</div>
                </BasicTitleBlock>
            </BasicHeaderBlock>
            {children}
        </BasicTemplateBlock>
    );
};

export default BasicTemplate;