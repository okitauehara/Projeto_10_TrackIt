import Navbar from '../../shared/Navbar';
import Menu from '../../shared/Menu';
import styled from "styled-components";

export default function History() {
    return (
        <>
            <Navbar />
                <main>
                    <HabitHistory>Histórico</HabitHistory>
                    <NoHistoryAlert>Em breve você poderá ver o histórico dos seus hábitos aqui!</NoHistoryAlert>
                </main>
            <Menu />
        </>
    );
}

const HabitHistory = styled.h1`
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 30px;
`;

const NoHistoryAlert = styled.p`
    font-size: 18px;
    color: #666666;
`;
