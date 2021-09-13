import Navbar from './Navbar';
import Menu from './Menu';
import styled from "styled-components";
import UserContext from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import { getUserHabits } from '../service/API';
import CreateHabit from './CreateHabit';
import HabitsList from './HabitsList';

export default function Habits() {

    const { user } = useContext(UserContext);
    const weekdays = [
        {
            day: 'D',
            dayID: 0,
            isAvailable: true
        },
        {
            day: 'S',
            dayID: 1,
            isAvailable: true
        },
        {
            day: 'T',
            dayID: 2,
            isAvailable: true
        },
        {
            day: 'Q',
            dayID: 3,
            isAvailable: true
        },
        {
            day: 'Q',
            dayID: 4,
            isAvailable: true
        },
        {
            day: 'S',
            dayID: 5,
            isAvailable: true
        },
        {
            day: 'S',
            dayID: 6,
            isAvailable: true
        },
    ];

    const [habits, setHabits] = useState([]);
    const [container, setContainer] = useState(false);

    useEffect(() => {
        getUserHabits(user.token)
            .then((response) => setHabits(response.data))
            .catch(() => console.error);
    }, [user.token]);

    return (
        <>
        <Navbar />
            <main>
                <PageHeader>
                    <MyHabits>Meus hábitos</MyHabits>
                    <AddHabit onClick={() => setContainer(true)}>+</AddHabit>
                </PageHeader>

                <CreateHabit weekdays={weekdays} container={container} setContainer={setContainer} setHabits={setHabits}/>

                {habits.length === 0 ? <NoHabitsAlert>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsAlert> : ''}

                <HabitsList habits={habits} setHabits={setHabits} weekdays={weekdays}/>
            </main>
        <Menu />
        </>
    );
}

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const MyHabits = styled.h1`
    font-size: 23px;
    color: #126ba5;
`;

const AddHabit = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 27px;
`;

const NoHabitsAlert = styled.p`
    font-size: 18px;
    color: #666666;
`;
