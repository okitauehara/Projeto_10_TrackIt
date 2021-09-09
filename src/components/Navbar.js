import styled from "styled-components";

export default function Navbar() {
    return (
        <Header>
            <Logo>TrackIt</Logo>
            <Profile src="http://www.rachegebran.com.br/wp-content/uploads/perfil.jpg"></Profile>
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

const Logo = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 40px;
    font-weight: 400;
    color: #ffffff;
    margin-left: 18px;
`

const Profile = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    background-color: #ffffff;
    margin-right: 18px;
    object-fit: cover;
`