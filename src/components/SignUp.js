import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <SignUpPage>
            <Logo src='https://i.ibb.co/hR0Xgyx/logo.png' alt='Logo TrackIt'></Logo>
            <Email type='text' placeholder='email'></Email>
            <Password type='password' placeholder='senha'></Password>
            <Name type='text' placeholder='nome'></Name>
            <Picture type='text' placeholder='foto'></Picture>
            <Submit>Cadastrar</Submit>
            <LoginText>
                <Link to='/' style={{color: '#52b6ff'}}>
                    Já tem uma conta? Faça login
                </Link>
            </LoginText>
        </SignUpPage>
    );
}

const SignUpPage = styled.section`
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
        padding-left: 10px;
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
        padding-left: 10px;
    }
`;

const Name = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    width: calc(100% - 70px);
    height: 45px;
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

const Picture = styled.input`
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

const LoginText = styled.p`
    font-size: 14px;
`;