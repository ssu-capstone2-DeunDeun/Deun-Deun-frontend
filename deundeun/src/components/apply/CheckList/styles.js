import styled, { css } from 'styled-components';

export const CheckListBlock = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-bottom:73px;
`;

export const CheckBoxBlock = styled.div`
    width:510px;
    height:60px;
    margin-top:24px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    padding-left:30px;
    display:flex;
    align-items:center;

    ${props =>
        props.active &&
        css`
            background-color:#D7FFFF ;
        `
    }
`;

export const CheckBox = styled.div`
    cursor:pointer;
    display:flex;
    align-items:center;
    svg{
        font-size:18px;
        color:#1fd0b5;
        font-weight:bold;
    }
    .text{
        margin-left:0.5rem;
        font-size:14px;
        font-weight:500;
        color:#282828;
    }
`;