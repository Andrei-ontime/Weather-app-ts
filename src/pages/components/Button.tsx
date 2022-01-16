import { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  width: 15.5rem;
  height: 2.5rem;
  border: 2px solid black;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  transition: background 2.5s;
  &:hover {
    transition: background 2.5s;
    background: linear-gradient(90deg, #4b6cb7 100%, #182848 100%);
  }
`;
export interface ButtonProps {
  buttonText: string;
}

const Button: FC<ButtonProps> = ({ buttonText }) => {
  return <StyledButton>{buttonText}</StyledButton>;
};

export default Button;
