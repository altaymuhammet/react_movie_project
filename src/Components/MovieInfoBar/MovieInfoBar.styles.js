import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    background: var(--darkGrey);
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;

    .column {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 20px;
        margin: 0 auto;
    }

     @media screen and (max-width: 768px) {
         display: block;

         .column {
            width: 90%;
             margin: 20px auto;
         }
     }
`;