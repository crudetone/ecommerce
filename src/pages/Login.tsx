import { mobile } from "../responsive";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/929245/pexels-photo-929245.jpeg?cs=srgb&dl=pexels-artem-beliaikin-929245.jpg&fm=jpg")
      center;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 15px 20px;
  width: 40%;
  margin-bottom: 10px;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  cursor: pointer;
  font-size: 12px;
  margin: 5px 0;
  text-decoration: underline;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, error } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();
    login(dispatch, { username, password });
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin} disabled={isFetching}>Login</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Do not you remember the password</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
