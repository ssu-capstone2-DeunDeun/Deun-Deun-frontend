import styled from "styled-components";


export const LoginContainer = styled.div`
    .control{
        position:fixed;
        top:0;
        right:0;
        left:0;
        bottom:0; 
        background:rgba(0,0,0,0.3);
        

        display:flex;
        justify-content: center;
        align-items:center
    }
    .delete{
        display:none;
    }
`;


export const LoginModal = styled.div`
    width:496px;
    height:484px;
    /* height:700px; */
    background:white;

    .logo{
        margin-top:50px;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;;
        img{
            width:265.3px;
            height:106.3px;
        }
        .text{
            font-size:16px;
            color:#282828;
            font-weight:bold;
        }
        .sub{
            margin-top:26.7px;
            display:flex;
            align-items: center;
            justify-content: center;
            color:#a7a7a7;
            .bar{
                width:127.6px;
                height:0px;
                border:1px solid #a7a7a7;

            }
            .subtext{
                margin:0 15.4px;
            }
        }
    }

`;

export const ImageContainer = styled.div`
    text-align:right;
    svg{
        width:20px;
        height:20px;
        margin-top:32.2px;
        margin-right:32.2px;
        color:#8f8f8f;
        cursor:pointer;
    }
`;

export const SocialContainer = styled.a`
    border:1px solid #4284F4;
    width:356px;
    height:54px;
    margin-top:30px;
    cursor:pointer;
    
    a{
        display:flex;
        align-items:center;
        text-decoration:none;
        .socialBtn{
            width :60px;
            .googleImg{
                text-align:center;
                img{
                    width:44px;
                    height:44px;
                }
            }
        }
        .socialText{
            flex:1;
            height:52px;
            font-size:16px;
            background-color:#4284F4;
            font-weight:bold;
            display:flex;
            align-items:center;
            justify-content: center;
            color:white;
        }

    }
`;

