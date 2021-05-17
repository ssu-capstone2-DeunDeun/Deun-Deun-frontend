import styled from '@emotion/styled';
// import development from '../../../../public/img/tag/development.jpg';
// import design from '../../../../public/img/tag/design.jpg';
// import economy from '../../../../public/img/tag/economy.jpg';
// import employment from '../../../../public/img/tag/employment.jpg';
// import friend from '../../../../public/img/tag/friend.jpg';
// import sports from '../../../../public/img/tag/sports.jpg';
// import voca from '../../../../public/img/tag/voca.jpg';
// import volunteer from '../../../../public/img/tag/volunteer.jpg';

export const RegisterFormBlock = styled.div`
        width:848.3px;
        margin:0 auto;
        margin-top: 79.5px;
`;

export const RegisterInfoBox = styled.div`
    .step{
        font-family: GmarketSans;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:15px;
    }
    .info{
        font-family: NotoSansKR;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:15px;
    }
    .subinfo{
        font-family: NotoSansKR;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #9d9d9d;
        margin-bottom:88px;
    }
`;

export const TagsBox = styled.div`
    display:flex;
    flex-wrap:wrap;

    .tags{
        width:156px;
        height:156px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        background-size:contain;
        margin:0 0  63px 45px;
        font-size:22px;
        font-weight:500;
        cursor:pointer;
        color:#ffffff;
        filter:brightness(50%);


    }
    .active{
            filter:brightness(100%);
    }
    .tag1{
        background-image:url("/img/tag/development.jpg");
    }
    .tag2{
        background-image:url("/img/tag/design.jpg");
    }
    .tag3{
        background-image:url("/img/tag/economy.jpg");
    }
    .tag4{
        background-image:url("/img/tag/employment.jpg");
    }
    .tag5{
        background-image:url("/img/tag/friend.jpg");
    }
    .tag6{
        background-image:url("/img/tag/sports.jpg");
    }
    .tag7{
        background-image:url("/img/tag/voca.jpg");
    }
    .tag8{
        background-image:url("/img/tag/volunteer.jpg");

    }
    
`;

export const ButtonBlock = styled.div`
    text-align:center;
    margin-top:47px; 
`;
