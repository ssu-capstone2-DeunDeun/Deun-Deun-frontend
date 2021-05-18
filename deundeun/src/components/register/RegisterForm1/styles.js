import styled from 'styled-components';

export const RegisterFormBlock = styled.div`
        width:848.3px;
        margin:0 auto;
        margin-top: 79.5px;
`;

export const RegisterInfoBox = styled.div`
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
        margin-bottom:15px;
    }
    .info{
        font-family: NotoSansKR;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:56px;
    }
`;

export const FormContent = styled.div`
    .name{
        font-family: NotoSansKR;
        font-size: 14px;
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
            top:15.5%;
            right:0;
            border:none;
            width:263px;
            background:#505050;
            height:60px;
            width:188px;
            font-size:14px;
            color:#ffffff;
            font-weight:bold;
            cursor: pointer;
        }
    }  
`;


export const StyledInput = styled.input`
    width:848.3px;
    height :60px;
    margin:16px 0 35px;
    font-size:14px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    padding-left:19.4px;
    flex:1;

`;


export const ButtonBlock = styled.div`
    margin-top:76px;
    text-align:center;
    a{
        text-decoration:none;
        color:#ffffff;
    }
`;