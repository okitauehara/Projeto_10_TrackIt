import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <LoginPage>
            <Logo src='https://i.ibb.co/hR0Xgyx/logo.png' alt='Logo TrackIt'></Logo>
            <Email type='text' placeholder='email'></Email>
            <Password type='password' placeholder='senha'></Password>
            <Submit>Entrar</Submit>
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
`;

const Email = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    width: calc(100% - 70px);
    height: 45px;
    margin: 35px 35px 0px 35px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    outline: none;

    ::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #dbdbdb;
    }
`;

const Password = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    width: calc(100% - 70px);
    height: 45px;
    margin: 5px 35px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    outline: none;

    ::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #dbdbdb;
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