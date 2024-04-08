import styled from "styled-components";

export const Wrap = styled.div`
  padding: 24px;
`;

export const Input = styled.input`
  padding: 12px 20px;
  margin-bottom: 8px;
  margin-right: 8px;
  box-sizing: border-box;

  &:focus {
    border: 2px solid orange;
    border-radius: 4px;
  }
`;
export const Buttom = styled.button`
  display: block;
  padding: 12px 20px;
  margin-bottom: 8px;
  box-sizing: border-box;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;
