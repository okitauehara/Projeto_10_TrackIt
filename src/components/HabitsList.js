import styled from "styled-components";
import { TrashOutline } from 'react-ionicons'

export default function HabitsList({ habits, weekdays }) {
    return (
        <>
            {habits.map((habit, index) => {
                <HabitContainer key={index}>
                    <Title>{habit.name}</Title>
                    <RemoveHabit>
                        <TrashOutline
                            color={'#666666'} 
                            height="15px"
                            width="15px"
                            />
                    </RemoveHabit>
                    <Weekdays>
                        {habit.days.map((weekday, index) => (
                            weekday === weekdays.dayID ? <Day state={'selected'} key={index}>{weekday}</Day> : <Day key={index}>{weekday}</Day>
                        ))}
                    </Weekdays>
                </HabitContainer>})}
        </>
    );
}

const HabitContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 15px;
    position: relative;
    margin-bottom: 10px;
`;

const Title = styled.h2`
    font-size: 20px;
    color: #666666;
    margin-bottom: 10px;
`;

const RemoveHabit = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
`;

const Weekdays = styled.div`
    display: flex;
    flex-direction: row;
`;

const Day = styled.button`
    width: 30px;
    height: 30px;
    border: ${props => props.state === 'selected' ? '1px solid #cfcfcf' : '1px solid #d4d4d4'};
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: ${props => props.state === 'selected' ? '#ffffff' : '#dbdbdb'};
    background-color: ${props => props.state === 'selected' ? '#cfcfcf' : '#ffffff'};
    margin-right: 5px;
`;
