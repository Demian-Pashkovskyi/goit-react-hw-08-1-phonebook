import styled from '@emotion/styled';
import { font } from "../Styled/Mixins";

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  width: 400px;
`;

export const FilterInput = styled.input`
	border: 0;
	outline: 0;
	width: 100%;
	border-radius: 20px;
	padding: 10px;
	background-color: #ebedf3;
	${font({ fs: 16, fw: 500, lh: 20 })};
	// box-shadow: inset 2px 2px 5px #a1a6b8,
	// 	inset -5px -5px 10px #ffffff;
	// transition: all 0.2s ease-in-out;
	// appearance: none;
`;

export const FilterWrapper = styled.div`
	margin-bottom: 20px;
`;