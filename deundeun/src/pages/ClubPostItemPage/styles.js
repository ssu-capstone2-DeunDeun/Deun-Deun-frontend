import styled from "styled-components";

export const ClubWritePostBlock = styled.div`
    margin-top:99px;
    form{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        .main{
            .title{
                font-size:36px;
                font-weight:bold;
                border:none;
                outline :none;
                color:#9a9a9a;
                width:1080px;
                height:80px;
                border-bottom: 1px solid #9a9a9a;
            }   
            svg{
                width:40px;
                height:40px;
                margin-left:10px;
                margin-top:5px;
            }
        }
        .body{
            width:1080px;
            height: 500px;
            outline:none;
            border:none;
            margin-top:25.6px;
            font-size:20px;
            line-height:1.45;
        }

        .btn{
            display:flex;
        }
    }
`;