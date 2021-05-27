import styled from 'styled-components';

export const LoginContainer = styled.div`
    width:848.3px;
    margin:0 auto;
    margin-top: 79.5px;
    text-align:center;
    .login-content {
        background: #ffffff;
        box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
        border-radius: 2px;
        width: 500px;
        display: inline - block;
        position: relative;
        padding: 35px;

        .login-title {
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 30px;
            color: rgba(0, 0, 0, 0.65);
        }   
        .social-btn {
            margin-bottom: 15px;
            font-weight: 400;
            font-size: 20px;
            display:flex;
            align-items:center;
            
            div{
                margin-left:70px;
                text-decoration:underline;
            }
        }
        .social-btn img {
            height: 50px;
        }
    }
    
`;
