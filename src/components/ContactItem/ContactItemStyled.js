import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  align-items: center;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 13px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover:not([disabled]) {
    background-color: #61dafb;
  }
`;