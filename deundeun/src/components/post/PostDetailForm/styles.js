import styled from '@emotion/styled';
// import HealthClub from '../../../../public/img/club/HealthClub.jpeg';

export const PostDetailFormBlock = styled.div`
    width:1080px;
    margin:0 auto;

    .header{
        border-bottom:3px solid #282828;
        padding-bottom:18.4px;
        .headerContent{
            .post{
                font-size:16px;
                font-weight:500;
                color:#555555;
                margin-bottom:4px;
            }
            .title{
                font-size:28px;
                font-weight:bold;
                color:#282828;
                margin-bottom:15px;
            }
            .info{
                display:flex;
                justify-content:space-between;

                .postInfo{
                    display:flex;
                    font-size:15px;
                    font-weight:normal;

                    .nickname{
                        margin-right:10px;
                        font-weight:bold;
                    }  
                    .date{
                        color:#a7a7a7;
                        margin-right:13px;
                    }
                    .viewBlock{
                        margin-right:5px;
                    }
                    .viewNum{
                        color:#a7a7a7;
                    }
                }
                .btn{
                    display:flex;
                    align-items:center;
                    cursor:pointer;

                    .heart{
                        margin-right:9.7px;
                        width:17.4px;
                        height:17.4px;
                        
                    }
                    .share{
                        margin-left:19.4px;
                        margin-right:10.4px;
                        width:17.4px;
                        height:17.4px;
                    }
                    .shareText{
                        color:#a7a7a7;
                        text-decoration:underline;
                    }
                    .dot{
                        margin-left:14.7px;
                        width:17.4px;
                        height:17.4px;
                    }
                }
            }
        }
    }

    .main{
        margin-top:47.1px;
        .mainContent{
            font-size:16px;
            color:#282828;
            margin-bottom:108px;
        }

        .postlist{
            div{
                display:flex;
                font-size:16px;
                font-weight:500; 
                margin-bottom:1px;
                .listInfo{
                    color:#818181;
                    margin-right : 25.8px;
                }
                .listTitle{
                    color:#282828;
                }
            }
            padding-bottom:11.2px;
            border-bottom:1px solid #cccccc; 
        }
    }

    .footer{
        margin-bottom:160.5px;
        .addComment{
            .btn{
                text-align:right;
                button{
                border:1px solid #707070;
                width:120px;
                height:44px;
                background-color:#ffffff;
                font-size:13px;
                font-weight:bold;
                color:#383838;
                cursor:pointer;
                }
            }
            margin-bottom:13.2px;
        }
        .commentList{
            .commentCount{
                font-size:20px;
                font-weight:500;
                color :#282828;
                margin-bottom:32.8px;
            }
        }
    }
`;

export const StyledTextarea = styled.textarea`
    width:1055px;
    height:106px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    margin-top:40.3px;
    margin-bottom:22.5px;
    padding-left:22.6px;
    padding-top:23.1px;
    font-size:15px;
    color:#b7b7b7;
`;


export const CommentListItemBlock = styled.div`
    width: 1080px;
    padding-top:19.5px;
    padding-bottom:19.5px;
    border-bottom:1px solid #d9d9d9;
    display:flex;
    align-items:center;
    justify-content:space-between;

    /* border:1px solid gray; */
    .item{
        display:flex;
    
        .itemInfo{
            display:flex;
            align-items:center;
            
            .writeImg{
                width:44px;
                height:44px;
                border-radius:50%;
                border:1px solid gray;
                background: url("/img/club/HealthClub.jpeg");
                background-size:contain;
            }
            .writer{
                color:#282828;
                font-size:16px;
                font-weight:bold;
                margin-left: 14px;
                margin-right:12.6px;
            }
            .date{
                font-size:14px;
                color:#a7a7a7;
            }
        }
        .itemContent{
            font-size:14px;
            color :#282828;
            margin-top:10px;
            padding-left:60px;
            width: 900px;  
            /* 내가 임의로 설정한 값 */
        }
    }
    .btn{
        display:flex;
        align-items:center;
        button{
            font-size:12px;
            color:#282828;
            padding-top:10px;
            padding-bottom:10px;
            background-color:#ffffff;
            border:solid 1px #707070;
            cursor:pointer;
            width: 55px;
        }
    }
`;
