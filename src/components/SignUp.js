import { postSignUp } from '../service/API'
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import Loader from 'react-loader-spinner';

export default function SignUp() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function submitSignUp() {
        setLoading(true)
        const body = {
            email,
            name,
            image,
            password,
        }


        postSignUp(body)
            .then(() => history.push('/'))
            .catch(() => {
                setLoading(false)
                alert('Todos os campos devem ser preenchidos corretamente')})
    }

    return (
        <SignUpPage>
            <Logo src='https://i.ibb.co/hR0Xgyx/logo.png' alt='Logo TrackIt'></Logo>
            <Input state={loading} type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input state={loading} type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Input state={loading} type='text' placeholder='nome' value={name} onChange={(e) => setName(e.target.value)}></Input>
            <Input state={loading} type='text' placeholder='foto' value={image} onChange={(e) => setImage(e.target.value)}></Input>
            {!loading ? <Submit onClick={submitSignUp}>Cadastrar</Submit> : <Submit><Loader type="ThreeDots" color="#ffffff" height={60} width={60} /></Submit>}
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
    opacity: ${props => props.onClick === undefined ? '0.7' : '1'};
    pointer-events: ${props => props.onClick === undefined ? 'none' : 'all'};
`;

const LoginText = styled.p`
    font-size: 14px;
`;