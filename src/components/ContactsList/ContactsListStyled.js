import styled from '@emotion/styled';
// import { font } from "../Styled/Mixins";

export const Contacts = styled.ul`
display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border: 1px solid white;
  width: 400px;
  min-height: 100px;
border-radius: 10px;
padding: 12px;
background-color: #f5f5fa;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
	0px 2px 1px rgba(0, 0, 0, 0.32);
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