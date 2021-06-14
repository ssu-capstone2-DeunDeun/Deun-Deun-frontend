import styled from 'styled-components';

export const BasicBlock = styled.div`
    /* display:flex; */
`;

export const ContentBlock = styled.div`
    .main{
        margin-top:43px;
        width:1160px;

        .mainInfo{
            font-size:20px;
            color:#282828;
            display:flex;
            flex-direction:column;
            .mainInfoTitle{
                font-weight:bold;
                margin-bottom:24px;
            }
            .recruitNotice{
                font-size:16px;
            }

        }

        .mainContent{
            padding-top:48.5px;

            .mainContentHeader{
                border-bottom:3px solid #282828;
                display:flex;
                align-items:center;
                justify-content:space-between;
                padding-bottom:20.5px;
                padding-left:15px;
                font-size:15px;
                .message{
                    display:flex;
                    svg{
                        margin-right:18px;
                        width:20px;
                        height:20px;
                        color:#707070;
                    }
                    div{
                        display:flex;
                        font-weight:bold;
                        align-items:center;
                    }
                }
                .func{
                    display:flex;
                    align-items:center;
                    .viewAll{
                        display:flex;
                        align-items:center;
                        font-weight:bold;
                        div{
                            margin-right:16px;
                        }
                        margin-right:31px;
                    
                    }
                    .username{
                        display:flex;
                        align-items:center;
                        border-bottom:1px solid #b2b2b2;
                        padding-bottom:2px;
                        width:185px;
                        input{
                            font-size:14px;
                            border:none;
                            outline:none;
                            padding-bottom:2px;
                        }
                    }
                }
            }
        }

    }
`;



export const ApplicantInfoBlock = styled.div`
    display:flex;
    align-items:center;
    font-size:14px;
    color:#282828;
    font-weight:500;
    border-top:1px solid #d5d5d5;
    height:70px;
    svg{
        width:53px;
        height:53px;
        color:#707070;
        padding-left:15px;
        padding-right:18px;
    }
    div{
        display:flex;
        align-items:center;
        justify-content:space-between;
        button{
            width:100px;
            border:0;
            text-decoration:underline;
            cursor:pointer;
            background:none;
            margin-left:150px;
        }
        .nickname{
            width:300px;
        }
        .phoneNumber{
            width:200px;
            font-size:13px;
        }
        .email{
            width:250px;
        }
        .firstpass{

        }
    }
`;


export const RecruitNoticeBlock = styled.div`
    .recruitNoticeBox{
        display:flex;
        align-items:center;
        padding:18px 865px 18px 28.5px;
        background-color:#EBEBEB;
        margin-bottom:16px;
        svg{
            margin-right:21.5px;
            color:#909090;
        }
        .content{
            font-size:16px;
            color:#282828;
        }
    }  
`;


export const PopupBlock = styled.div`
    .delete{
        display:none;
    }
    .popupBlock{
        width:782px;
        height:672px;
        position:absolute;
        box-shadow:15px 15px 30px 0 rgba(0,0,0,0.16);
        margin:auto;
        right:0;
        left:0;
        top:0;
        bottom:0;
        z-index:100;
        background-color:#ffffff;
        padding:38px 50px 38px 44px;
        color:#282828;

        .popupTitle{
            font-size:25px;
            font-weight:900;
            margin-bottom:38px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            svg{
                opacity :0.3;
                width:25px;
                height:25px;
                &:hover{
                    opacity:0.7;
                }
            }
        }
        .kind{
            font-size:15px;
            font-weight:900;
            margin-bottom:11px;
        }
        .kindItem{
            display:flex;
            align-items:center;
            font-weight:bold;
            margin-bottom:21px;
            
            svg{
                margin-right:10px;
                width:18px;
                height:18px;
                opacity:0.2;
            }
            div{
                margin-right:20px;
                font-size:14px;
            }
        }
        .receiver{
            font-size:15px;
            font-weight:bold;
            
        }
        .receiverIist{
            display:flex;
            flex-wrap:wrap;
            button{
                width:120px;
                height:32px;
                font-size:12px;
                margin:15px 8px 0 0;
                padding:8px 12.8px 6px 18px;
                color:#282828;
                background-color:#f7f7f7;
                border:none;
                display:flex;
                align-items:center;
                justify-content:center;
                svg{
                    margin-left:36.7px;
                    cursor:pointer;
                    width:15px;
                    height:15px;
                }
            }
        }
        .content{
            font-weight:bold;
            margin-top:19px;
        }
        .msgSubmitBtn{
            text-align:center;
        }
    }
    
`;
export const StyledTextarea = styled.textarea`
    width:688px;
    height:188px;
    margin-top:15px;
    margin-bottom:38px;
    font-size:14px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    padding-left:24px;
    padding-top:16px;
`;