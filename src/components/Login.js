import { postLogin } from "../service/API";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export default function Login({ setUser }) {

    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitLogin() {
        const body = {
            email,
            password,
        }
        postLogin(body)
            .then(response => {
                setUser(response.data)
                history.push('/hoje')
            })
            .catch(() => alert('Usuário e/ou senha incorretos'));
    }

    return (
        <LoginPage>
            <Logo src='https://i.ibb.co/hR0Xgyx/logo.png' alt='Logo TrackIt'></Logo>
            <Input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Submit onClick={submitLogin}>Entrar</Submit>
            <SignUpText>
                <Link to='/cadastro' style={{color: '#52b6ff'}}>
                    Não tem uma conta? Cadastre-se
                </Link>
            </SignUpText>
        </LoginPage>
    );
}

const LoginPage = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`;

const Logo = styled.img`
    width: 180px;
    height: 180px;
    margin-bottom: 30px;
`;

const Input = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    width: calc(100% - 70px);
    height: 45px;
    margin-bottom: 5px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    outline: none;

    ::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #dbdbdb;
        padding-left: 10px;
    }
`;

const Submit = styled.button`
    width: calc(100% - 70px);
    height: 45px;
    margin-bottom: 25px;
    color: #ffffff;
    background-color: #52b6ff;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 21px;
    border: none;
    border-radius: 5px;
`;

const SignUpText = styled.p`
    font-size: 14px;
`;