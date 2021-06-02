import styled from "styled-components";

export const ClubManagePostPageContainer = styled.div`
    margin-top:50px;

    .title{
        font-size:22px;
        font-weight:900;
        margin-bottom:20px;
    }

    .postLists{
        display:flex;
        flex-wrap : wrap;
        width:1500px;
    }

    .writeBtnBox{
        /* border:1px solid gray; */
        width:1444px;
        display:flex;
        justify-content: flex-end; 
        margin-bottom:40px;

        .writeBtn{
            width:150px;
            height:45px;
            background-color:#3bc9db;
            border-radius:4px;
            &:hover{
                background-color:#66d9e8;
            }
            cursor:pointer;
            a{
                text-decoration:none;
                display:flex;
                align-items: center;
                justify-content: center;
                width:150px;
                font-size:20px;
                height:50px;
                color:white;
                font-weight:900;
                font-size:18px;
            }
        }
    }
`;

