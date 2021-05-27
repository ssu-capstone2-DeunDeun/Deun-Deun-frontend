// import Button from 'components/common/Button';
// import React from 'react';
// import styled from 'styled-components';

// const RegisterFormBlock = styled.div`
//         width:848.3px;
//         margin:0 auto;
//         margin-top: 79.5px;
// `;

// const RegisterInfoBox = styled.div`
//     .step{
//         font-family: GmarketSans;
//         font-size: 28px;
//         font-weight: bold;
//         font-stretch: normal;
//         font-style: normal;
//         line-height: 1.19;
//         letter-spacing: normal;
//         text-align: left;
//         color: #282828;
//         margin-bottom:15px;
//     }
//     .info{
//         font-family: NotoSansKR;
//         font-size: 28px;
//         font-weight: bold;
//         font-stretch: normal;
//         font-style: normal;
//         line-height: 1.47;
//         letter-spacing: normal;
//         text-align: left;
//         color: #282828;
//         margin-bottom:56px;
//     }
// `;

// const FormContent = styled.div`
//     .name{
//         font-family: NotoSansKR;
//         font-size: 14px;
//         font-weight: bold;
//         font-stretch: normal;
//         font-style: normal;
//         line-height: 1.45;
//         letter-spacing: normal;
//         text-align: left;
//         color: #282828;
//     }
//     .checking{
//         display:flex;
//         position:relative; 

//         button{
//             position:absolute;
//             top:15.5%;
//             right:-2.5%;
//             border:none;
//             width:263px;
//             background:#505050;
//             height:60px;
//             width:188px;
//             font-size:14px;
//             color:#ffffff;
//             font-weight:bold;
//             cursor: pointer;
//         }
//     }  
// `;


// const StyledInput = styled.input`
//     width:848.3px;
//     height :60px;
//     margin:16px 0 35px;
//     font-size:14px;
//     border:none;
//     background-color:#f7f7f7;
//     outline:none;
//     padding-left:19.4px;
//     flex:1;

// `;


// const ButtonBlock = styled.div`
//     margin-top:76px;
//     text-align:center;
// `;

// const RegisterForm1 = () => {
//     return (
//         <RegisterFormBlock>
//             <RegisterInfoBox>
//                 <div class="step">STEP 1.</div>
//                 <div class="info">
//                     <div>반갑습니다!</div>
//                     <div>기본 정보를 입력해주세요.</div>
//                 </div>
//             </RegisterInfoBox>
//             <form>
//                 <FormContent>
//                     <div class="name">이름*</div>
//                     <StyledInput placeholder="이름을 입력해주세요."></StyledInput>
//                 </FormContent>
//                 <FormContent>
//                     <div class="name">닉네임*</div>
//                     <div class="checking">
//                         <StyledInput placeholder="닉네임을 입력해주세요."></StyledInput>
//                         <button onClick={(e) => e.preventDefault()}>중복 검사</button>
//                     </div>
//                 </FormContent>
//                 <FormContent>
//                     <div class="name">이메일*</div>
//                     <StyledInput placeholder="이메일을 입력해주세요."></StyledInput>
//                 </FormContent>
//                 <ButtonBlock>
//                     <Button to="/register/2">다음 단계로</Button>
//                 </ButtonBlock>
//             </form>
//         </RegisterFormBlock >
//     );
// };

// export default RegisterForm1;