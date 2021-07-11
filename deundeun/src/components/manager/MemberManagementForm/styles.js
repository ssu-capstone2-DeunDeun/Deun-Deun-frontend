import styled from 'styled-components';



export const BasicBlock = styled.div`
    /* display:flex; */
`;


export const ContentBlock = styled.div`
    .main{
        margin-top:60px;
        width:1160px;

        .mainHeader{
            display:flex;
            justify-content:space-between;
            margin-bottom:16.5px;
            
            .mainTitle{
                font-size:28px;
                font-weight:bold;
                color:#282828;
            }

            .findUser{
                display:flex;
                align-items:center;
                border-bottom:1px solid #b2b2b2;
                width:185px;
                input{
                    border:none;
                    outline:none;
                    font-size:14px;
                    color:#b2b2b2;
                }
                svg{
                    width:13px;
                    height:13px;
                }
            }
        }

        .mainContent{
            .mainContentHeader{
                border-top:3px solid #282828;
                display:flex;
                align-items:center;
                
                height:59.4px;
                padding-left:15px;

                .skills{
                    display:flex;
                    align-items:center;
                    padding-right:402px; //변경
                    .message{
                        display:flex;
                        margin-right:17.5px;
                        svg{
                            width:20px;
                            height:20px;
                            opacity:0.2;
                        }
                    }
                    .skill{
                        margin-right:17.5px;
                        font-size:14px;
                        font-weight:bold;
                        color:#282828;
                    }
                }

                .func{
                    display:flex;
                    align-items:center;
                    font-weight:bold;
                    font-size:15px;
                    color:#282828;
                    .allUnit{
                        display:flex;
                        align-items:center;
                        margin-right:52px;
                        div{
                            margin-right:3px;
                        }
                        
                    }
                    .allRole{
                        display:flex;
                        align-items:center;
                        margin-right:52px;
                        div{
                            margin-right:3px; 
                        }
                        
                    }
                    .allAuthorized{
                        display:flex;
                        align-items:center;
                        div{
                            margin-right:3px;
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
    justify-content:space-between;
    height:70px;
    font-size:14px;
    font-weight:500;
    color:#282828;
    border-top:1px solid #d5d5d5;
    svg{
        width:77.14px;  
        height:77.14px;
        /* 나중에 수정해야한다. */
        /* width:20px; */
        /* height:20px; */
        opacity:0.2;
        padding-left:15px;
        padding-right:42px;
    }
    .userInfo{
        display:flex;
        align-items:center;
        
        //나중에 지워도 상관 없음
        .userImg{
            width:30px;
            height:30px;
            border-radius:50%;
            background:url("/img/club/HealthClub.jpeg");
            background-size:contain;
            margin-right:8px;
        }
        .nickname{
            width:230px;
        }
    }

    .phoneNumber{
        width:180px;
    }
    .email{
        width:230px;
    }
    .unit{
        width:110px;
    }
    .role{
        width:130px;
    }
    .authorized{
        width:110px;
    }
    .other{
        width:60px;
        svg{
            opacity:0.5;
        }
    }
`;
export const PopupBlock = styled.div`
    .msgDelete{
        display:none;
    }
    .msgPopupBlock{
        width:782px;
        height:750px;
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

        .msgPopupTitle{
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
            .div{
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
            height:40px;
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
            margin-top:20px;
            height:270px;
        }
        .msgSubmitBtn{
            margin-top:38px;
            text-align:center;
        }
    }
    
`;
export const StyledTextarea = styled.textarea`
    width:688px;
    height:188px;
    margin-top:15px;
    margin-bottom:0;
    font-size:14px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    padding-left:24px;
    padding-top:16px;
`;

export const RoleSetBlock = styled.div`
    .roleDelete{
        display:none;
    }
    .rolePopupBlock{
        width:782px;
        height:580px;
        position:absolute;
        box-shadow:15px 15px 30px 0 rgba(0,0,0,0.16);
        margin:auto;
        right:0;
        left:0;
        top:0;
        bottom:0;
        z-index:100;
        background-color:#ffffff;
        padding:38px 40.5px 49px 44px;
        color:#282828;

        .rolePopupTitle{
            font-size:25px;
            font-weight:900;
            color:#282828;
            margin-bottom:36px;
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
        .addRole{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            font-size:14px;
            color:#b5b5b5;
            font-weight:400;
            cursor:pointer;
            margin-bottom:11.5px;
            svg{
                margin-right:6px;
            }
            &:hover{
                color:#282828;
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
            .posInfo{
                margin-right:15px;
                font-size:14px;
            }
            .delIcon{
                margin-right :15px;
                
                svg{
                    cursor:pointer;
                }
                svg:hover{
                    color:#1CD0B5;
                    opacity:1;
                }
            }

        }

        .roleSetBtn{
            text-align:center;
        }
    }
    
`;


export const AuthSetBlock = styled.div`
    .authDelete{
        display:none;
    }
    .authPopupBlock{
        width:782px;
        height:580px;
        position:absolute;
        box-shadow:15px 15px 30px 0 rgba(0,0,0,0.16);
        margin:auto;
        right:0;
        left:0;
        top:0;
        bottom:0;
        z-index:100;
        background-color:#ffffff;
        padding:38px 40.5px 49px 44px;
        color:#282828;

        .authPopupTitle{
            font-size:25px;
            font-weight:900;
            color:#282828;
            margin-bottom:36px;
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
        .addAuth{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            font-size:14px;
            color:#b5b5b5;
            margin-bottom:11.5px;
            svg{
                margin-right:6px;
            }
        }
        .authSetBtn{
            text-align:center;
        }
    }
    
`;



export const AddRoleBlock = styled.div`
    .addRoleDelete{
        display:none;
    }

    .addRolePopupBlock{
        width:600px;
        height:310px;
        position:absolute;
        box-shadow:15px 15px 30px 0 rgba(0,0,0,0.16);
        margin:auto;
        right:0;
        left:0;
        top:0%;
        bottom:0;
        z-index:100;
        background-color:#ffffff;
        padding:38px 40.5px 49px 44px;
        color:#282828;

        .addRolePopupTitle{
            font-size:25px;
            font-weight:900;
            color:#282828;
            margin-bottom:36px;
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
        .addRole{
            height:100px;
            .addRoleInfo{
                display:flex;
                align-items:center;
                font-size:20px;
                
                .addRoleTit{
                    margin-right:20px;
                }
                input{
                    padding:5px;
                    padding-left:10px;
                    border:2px solid #808080;
                    border-radius:5px;
                    outline:none;
                    height:40px;

                    &:focus{
                        border:2px solid black;
                    }
                }
            }
        }
        .addRoleSetBtn{
            text-align:center;
        }
    }
    
`;