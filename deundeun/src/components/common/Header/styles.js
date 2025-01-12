import styled from '@emotion/styled';

export const Container = styled.header`
	width: 100vmax;
	height: 7vh;
	padding: 19px 20px 19px 48px;
	display: flex;
	flex-direction: row;
	align-items: center;
	&.detail {
		background-color: #a3a3a3;
	}
	border-bottom: solid 1px #d3d3d3;
`;

export const Logo = styled.img`
	width: 110px;
	height: 44.1px;
	cursor: pointer;
`;

export const IconContainer = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: row;
	align-items: center;

	.sign {
		display: flex;
        margin-right: 60px;
		div{
			text-decoration: none;
            color: black;
            font-size:20px;
		}
		div {
			margin: 0 15px;
		}
    }
    .signout{
        /* margin-right:60px; */
        font-size:20px;
        display:flex;

        .userInfo{
            display:flex;
            /* justify-content:center;
            align-items:center; */
            .userInfoNickname{
                display:flex;
                justify-content:center;
                align-items:center;
                color:rgba(31, 208, 181);
                font-weight:bold;
                
            }
            .userInfoText{
                display:flex;
                justify-content:center;
                align-items:center;
                margin-left:10px;
            }
            
        }

    }
    .signBtn{
        font-size:20px;
        background-color:rgba(31, 208, 181, 0.3);
        border-radius:4px;
        font-weight:700;
        width:100px;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left:30px;
        margin-right:60px;
        cursor:pointer;
    }
    .signBtnLogout{
        margin-right:75px;
    }
`;

export const ProfileIcon = styled.div`
	width: 4.62vh;
	height: 4.62vh;
	margin-left: auto;
	background-color: black;
	border-radius: 35px;
	margin-left: 0.8em;
	cursor: pointer;
`;

export const SearchBoxContainer = styled.div`
	width: 800px;
	height: 40px;
	border-radius: 36px;
	border: solid 1.5px #a7a7a7;

	padding-left: 1em;

	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;

	margin-left: 27em;
`;

export const SearchBox = styled.input`
	width: 750px;
	height: 30px;
	border: none;

	&:focus {
		outline: none;
	}
`;


//로그인 모달창
export const LoginContainer = styled.div`
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


export const LoginModal = styled.div`
    width:496px;
    /* height:484px; */
    height:500px;
    background:white;
	margin-top: 10%;

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

export const GoogleContainer = styled.a`
    border:1px solid #4284F4;
    width:356px;
    height:54px;
    margin-top:30px;
    cursor:pointer;

    a{
        display:flex;
        align-items:center;
        text-decoration:none;
        background-color:#4284F4;
        .googleBtn{
            width:44px;
            height:44px;
            border-radius:5px;
            background-color:white;
            margin-left:8.6px;
            .googleImg{
                    display:flex;
                    justify-content: center;
                img{
                    margin-top:4.5px;
                    margin-right:1px;
                    width:35px;
                    height:35px;
                }
            }
        }
        .googleText{
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


export const NaverContainer = styled.a`
    border:1px solid #05C75B;
    width:356px;
    height:54px;
    margin-top:10px;
    cursor:pointer;
    background-color:#05C75B;
    a{
        display:flex;
        align-items:center;
        /* text-decoration:none !important; */
        a:hover{
            text-decoration :none !important;
        }
        .naverBtn{
            width :60px;
            .naverImg{
                text-align:center;
                img{
                    width:44px;
                    height:44px;
                }
            }
        }
        .naverText{
            flex:1;
            height:52px;
            font-size:16px;
            background-color:#05C75B;
            font-weight:bold;
            display:flex;
            align-items:center;
            justify-content: center;
            color:white;
            margin-right:6.5px;
        }
    }
`;

