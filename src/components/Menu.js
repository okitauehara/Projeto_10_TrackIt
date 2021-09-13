import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Menu() {

    const { todayProgress, todayHabits } = useContext(UserContext);

    return (
        <Footer>
            <Habits>
                <Link to='/habitos' style={{textDecoration: 'none', color: '#52b6ff'}}>
                Hábitos
                </Link>
            </Habits>
            <Today>
                <Link to='/hoje' style={{textDecoration: 'none'}}>
                    <CircularProgressbar
                    value= {todayHabits !== 0 ? ((todayProgress/todayHabits.length) * 100).toFixed(0) : '0'}
                    text= "Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52b6ff",
                        textSize: 18,
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                </Link>
            </Today>
            <History>
                <Link to='/historico' style={{textDecoration: 'none', color: '#52b6ff'}}>
                Histórico
                </Link>
            </History>
        </Footer>
    );
}

const Footer = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 2;
`;

const Habits = styled.span`
    font-size: 18px;
    color: #52b6ff;
`;
const Today = styled.span`
    width: 90px;
    height: 90px;
    margin-bottom: 45px;
`;
const History = styled.span`
    font-size: 18px;
    color: #52b6ff;
`;