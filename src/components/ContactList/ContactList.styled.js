import styled from '@emotion/styled';

export const Contacts = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border: 1px solid black;
  width: 400px;
  min-height: 100px;
  padding: ${p => p.theme.space[4]}px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #808080e3;
`;