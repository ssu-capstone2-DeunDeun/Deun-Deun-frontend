import styled from 'styled-components';
// import illi from '../../../../public/img/illli.jpg';

export const BasicTemplateBlock = styled.div`
    width:1920px;
    height:2078px;
    padding:0 0 325.5px;
    background-color:#ffffff;
`;
export const BasicHeaderBlock = styled.div` 
    height:348px;
    background:url("/img/club/illi.jpg") no-repeat;
    background-size:cover;
    margin:0 0 76px;
`;

export const BasicLogoBlock = styled.div`
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

export const BasicTitleBlock = styled.div`
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