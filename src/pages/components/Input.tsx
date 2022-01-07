import { FC } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 15rem;
  height: 2rem;
  border: 2px solid #4b6cb7;
  border-radius: 0.5rem;
`;
const StyledLabel = styled.label``;
const StyledErrorText = styled.p`
  margin: 0;
  font-size: 14px;
  color: red;
`;

export enum InputTypes {
  Password = 'password',
  Email = 'email',
}

interface InputProps {
  id: string;
  placeholder?: string;
  type: InputTypes;
  form: string;
  value?: string;
  labelText?: string;
  htmlFor?: string;
  errorText?: string;
}

const Input: FC<InputProps> = ({
  id,
  placeholder,
  type,
  form,
  value,
  labelText,
  errorText,
}) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{labelText}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        type={type}
        form={form}
        value={value}
      ></StyledInput>
      <StyledErrorText>{errorText}</StyledErrorText>
    </>
  );
};

export default Input;
