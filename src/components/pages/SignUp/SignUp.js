import { postSignUp } from '../../../service/API'
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import Swal from 'sweetalert2';
import logo from '../../../assets/logo.png'

export default function SignUp() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function submitSignUp(event) {
        event.preventDefault();
        setLoading(true)
        const body = {
            email,
            name,
            image,
            password,
        }

        postSignUp(body)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Sucesso!',
                    text: 'O usuário foi cadastrado',
                  })
                history.push('/')})
            .catch(() => {
                setLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Cadastro Inválido',
                    text: 'Todos os campos devem ser preenchidos corretamente',
                  })})
    }

    return (
        <SignUpPage onSubmit={submitSignUp}>
            <Logo src={logo} alt='Logo TrackIt'></Logo>
            <Input state={loading} type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input state={loading} type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Input state={loading} type='text' placeholder='nome' value={name} onChange={(e) => setName(e.target.value)}></Input>
            <Input state={loading} type='url' placeholder='foto' value={image} onChange={(e) => setImage(e.target.value)}></Input>
            {!loading ? <Submit state={loading}>Cadastrar</Submit> : <Submit state={loading}><Loader type="ThreeDots" color="#ffffff" height={60} width={60} /></Submit>}
            <LoginText>
                <Link to='/' style={{color: '#52b6ff'}}>
                    Já tem uma conta? Faça login
                </Link>
            </LoginText>
        </SignUpPage>
    );
}

const SignUpPage = styled.form`
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

const LoginText = styled.p`
    font-size: 14px;
`;