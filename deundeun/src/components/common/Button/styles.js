import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const buttonStyle = css`
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

    ${props =>
        props.postBtn1 &&
        css`
            background-color:#1f1f1f;
            font-size:18px;
            font-weight:bold;
            padding:17.9px 98px 21.1px 99px;
            width:300px;
            height:66px;
        `
    }   

    ${props =>
        props.postBtn2 &&
        css`
            background-color:#a2a2a2;
            font-size:18px;
            font-weight:bold;
            padding:17.9px 98px 21.1px 99px;
            width:300px;
            height:66px;
            margin-left : 12px;
        `
    }   
`;

export const StyledLink = styled(Link)`
    ${buttonStyle}
`;

export const StyledButton = styled.button`
    ${buttonStyle}
`;