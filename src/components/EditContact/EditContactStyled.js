import styled from '@emotion/styled';
import { FaRegWindowClose } from 'react-icons/fa';

export const EditFormWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 400px;
  min-height: 300px;
  gap: 40px;
  padding: 20px;
  border-radius: 10px;
  background-color: gray;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  padding: 5px 10px;
  margin-bottom: 5px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  border-radius: 10px;
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: none;
  outline: 2px solid green;
  border-radius: 10px;
  height: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export const CloseBtn = styled(FaRegWindowClose)`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: red;
  }
`;