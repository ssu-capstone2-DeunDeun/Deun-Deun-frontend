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
                &:hover{
                    color :#3bc9db;
                }
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

export const DeleteModal = styled.div`
    .make{
        position:fixed;
        top:0;
        right:0;
        left:0;
        bottom:0; 
        background:rgba(0,0,0,0.3);
        

        display:flex;
        justify-content: center;
		z-index:100;
    }
    .delete{
        display:none;
    }
`;

export const ModalBox = styled.div`
    width:496px;
    height:240px;
    background:white;
    margin-top: 15%;
    display:flex;
    flex-direction: column;
    align-items:center; 

    .deleteBtn{
        font-size:24px;
        font-weight:900;
        margin-top:40px;
        
    }
    .removeBtn{
        display:flex;
        margin-top:60px;
    }
`;
