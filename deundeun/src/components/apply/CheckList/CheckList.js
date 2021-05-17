import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const CheckListBlock = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-bottom:73px;
`;

const CheckBoxBlock = styled.div`
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

const CheckBox = styled.div`
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

const CheckList = ({ lists }) => {
    return (
        <CheckListBlock>
            {
                lists.map(list => <CheckListItem id={list} text={list} />)
            }
        </CheckListBlock >
    )
}

const CheckListItem = ({ text }) => {
    const [click, setClick] = useState(false);

    return (
        <>
            {click === true ?
                <CheckBoxBlock active onClick={(e) => { setClick(!click); }}>
                    <CheckBox >
                        <IoCheckmarkCircleOutline />
                        <div className="text">{text}</div>
                    </CheckBox>
                </CheckBoxBlock>
                :
                <CheckBoxBlock onClick={(e) => { setClick(!click); }}>
                    <CheckBox >
                        <div className="text">{text}</div>
                    </CheckBox>
                </CheckBoxBlock>
            }
        </>
    )
}

export default CheckList;