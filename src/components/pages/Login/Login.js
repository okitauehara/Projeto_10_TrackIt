import { postLogin } from "../../../service/API";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2'

export default function Login({ setUser }) {

    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function submitLogin(event) {
        event.preventDefault();
        setLoading(true);
        const body = {
            email,
            password,
        }
        postLogin(body)
            .then(response => {
                setUser(response.data)
                history.push('/hoje')
            })
            .catch(() => {
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Ops...',
                    text: 'Usuário e/ou senha incorretos!',
                  })});
    }

    return (
        <LoginPage onSubmit={submitLogin}>
            <Logo src='https://i.ibb.co/hR0Xgyx/logo.png' alt='Logo TrackIt'></Logo>
            <Input state={loading} type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input state={loading} type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            {!loading ? <Submit state={loading}>Entrar</Submit> : <Submit state={loading}><Loader type="ThreeDots" color="#ffffff" height={60} width={60} /></Submit>}
            <SignUpText>
                <Link to='/cadastro' style={{color: '#52b6ff'}}>
                    Não tem uma conta? Cadastre-se
                </Link>
            </SignUpText>
        </LoginPage>
    );
}

const LoginPage = styled.form`
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
    color: ${props => props.state ? '#afafaf' : '#000000'};
    pointer-events: ${props => props.state ? 'none' : 'all'};
    background-color: ${props => props.state ? '#f2f2f2' : '#ffffff'};

    ::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: ${props => props.state ? '#afafaf' : '#dbdbdb'};
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
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.state === undefined ? '0.7' : '1'};
    pointer-events: ${props => props.state === undefined ? 'none' : 'all'};
`;

const SignUpText = styled.p`
    font-size: 14px;
`;