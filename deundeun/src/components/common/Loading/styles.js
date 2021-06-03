import styled from "styled-components";

export const LoaderBox = styled.div`
    .loadingImg{
        position: fixed;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;

        div{
            font-size:50px;
            
        }
    }
`;
