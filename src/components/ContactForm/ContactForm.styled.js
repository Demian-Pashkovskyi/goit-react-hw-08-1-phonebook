import styled from '@emotion/styled';

export const FormBox = styled.form`
  position: relative;
  border: 1px solid black;
  width: 400px;
  padding: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Error = styled.p`
  color: red;
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