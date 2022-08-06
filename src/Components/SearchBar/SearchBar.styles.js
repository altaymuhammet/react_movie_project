import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 50px;
  background: var(--medGrey);
  margin: 10px auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 10px;
    width: 30px;
  }

  input {
    position: absolute;
    font-size: var(--fontBig);
    left: 0;
    margin: 8px 0;
    padding: 0 0 5px 60px;
    border: 0;
    width: 95%;
    height: 40px;
    color: var(--white);
    background: transparent;

    :focus {
        outline: none;
    }
  }
`;
