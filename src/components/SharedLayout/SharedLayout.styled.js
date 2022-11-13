import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  color: #ffffff;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #61dafb;
  }
  &.active {
    height: 50px;
    border-radius: 10px;
    background-color: lightslategrey;
    box-shadow: inset 0px 5px 5px black;
    color: #61dafb;
  }
`;