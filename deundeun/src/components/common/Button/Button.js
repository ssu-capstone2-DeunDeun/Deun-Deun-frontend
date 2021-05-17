import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const buttonStyle = css`
    border:none;
    width:300px;
    height:66px;
    padding:17.9px 106px 21.1px 107px;
    color:white;
    cursor:pointer;
    font-weight:bold;
    border-radius:4px;
    outline:none;
    background-color:#bababa;
    font-size:18px;
    text-decoration:none;

    ${props =>
        props.registerBtn1 &&
        css`
            padding:17.9px 117px 21.1px;
            margin-right:16px;
        `
    }
    ${props =>
        props.registerBtn2 &&
        css`
            background-color:#1f1f1f;
            padding: 17.9px 108px 21.1px 109px;
        `
    }
    ${props =>
        props.applyBtn &&
        css`
            background-color:#1f1f1f;
            padding: 17.9px 117px 21.1px;
        `
    }
    ${props =>
        props.applyBtn1 &&
        css`
            padding : 17.9px 125px 21.1px;
        `
    }
    ${props =>
        props.applyBtn2 &&
        css`
            padding:17.9px 79px 21.1px 80px;
            background-color:#1f1f1f;
            margin-left:32px;
        `
    }
    ${props =>
        props.applyManageBtn &&
        css`
            background-color:#1f1f1f;
            font-size:14px;
            padding:15px 73px 16px;
            width:198px;
            height:51px;
        `
    }
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;



const Button = (props) => {
    return props.to ? (
        <StyledLink {...props} gray={props.gray ? 1 : 0} />
    ) : (
            <StyledButton {...props} />
        );
};

export default Button;