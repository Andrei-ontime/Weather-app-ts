import { FC } from 'react';
import Input, { InputTypes } from './Input';
import Button from './Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vw;
  color: #4b6cb7;
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  background-color: #fff;
  border-radius: 0.7rem;
  width: 25rem;
  height: 28rem;
  gap: 7px;
`;

interface FormProps {
  name: string;
  title: string;
}

const LogIn: FC<FormProps> = (title) => {
  return (
    <LoginContainer>
      <Form>
        <h1>{title.title}</h1>
        <Input
          id='email'
          form='login'
          placeholder='Email'
          type={InputTypes.Email}
          labelText='Email'
          // errorText='wrong email'
        />
        <Input
          id='password'
          form='login'
          placeholder='Password'
          type={InputTypes.Password}
          labelText='Password'
          // errorText='wrong password bitch'
        />
        <Button>Login</Button>
        <Link to='register'>Create new account?</Link>
      </Form>
    </LoginContainer>
  );
};

export default LogIn;
