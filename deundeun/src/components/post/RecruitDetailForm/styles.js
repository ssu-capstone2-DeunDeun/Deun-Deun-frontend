// import styled from '@emotion/styled';
import Button from 'components/common/Button/Button';
// import HealthClub from '../../../../public/img/club/HealthClub.jpeg';
import styled from 'styled-components';

export const PostDetailFormBlock = styled.div`
    width:1080px;
    margin:0 auto;

    .header{
        border-bottom:3px solid #282828;
        padding-bottom:16.5px;
        margin-bottom:30.5px;
        .headerContent{
            .recruit{
                font-size:16px;
                margin-bottom:4px;
            }
            .info{
                display:flex;
                justify-content:space-between;
                .title{
                    font-size:28px;
                    font-weight:900;
                    color:#282828;
                }
                .btn{
                    display:flex;
                    align-items:center;
                    color:#282828;
                    font-size:15px;
                    .heart{
                        width:15px;
                        height:15px;
                        margin-right:9.7px;
                    }
                    .share{
                        width:15px;
                        height:15px;
                        margin-left:16px;
                        margin-right:6.4px;
                    }
                    .shareText{
                        color:#8f8f8f;
                    }
                }
            }
        }
    }

    .main{
        .recruitContent{
            height:156px;
            border:none;
            background:#e8e8e8;
            padding:22px 41.3px 24.8px 29.5px;

            margin-bottom:42px;
            display:flex;
            justify-content:space-between;
            align-items:center;

            .mainInfo{
                .mainTitle{
                    font-size:18px;
                    font-weight:bold;
                    color:#282828;
                    margin-bottom:23.2px;
                }
                .recruitInfo{
                    display:flex;
                    flex-direction:column;
                    font-size:16px;
                    font-weight:500;
                    color:#555555;
                    div{
                        display:flex;
                        
                        .infoItem{
                            width:279.2px;
                            display:flex;
                            justify-content:space-between;
                            margin-right:149px;
                            .recruitDate{
                                color:#06cbad;
                            }
                        }
                    }
                }
            }
            .apply{
                display:flex;
                flex-direction:column;
                align-items:center;
            }
        }

        .img{
            img{
                width:100%;
                height:500px;
            }
            margin-bottom:32px;
        }
        .mainContent{
            padding-bottom:99.5px;
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
            padding-bottom:119px;
        }
    }
`;

export const StyledButton = styled(Button)`
        width:80px;
        height:30px;
        padding:13px 44px 13px 44px;
        border-radius:28px;
        font-size:19px;
        font-weight:500;
        background-color:#06cbad;
        margin-top:7.6px;
        text-align:center;
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