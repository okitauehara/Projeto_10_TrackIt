import Navbar from '../../shared/Navbar';
import Menu from '../../shared/Menu';
import styled from "styled-components";
import { CheckmarkSharp } from 'react-ionicons';
import * as dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getTodayHabits } from '../../../service/API';
import { toggleHabit } from '../../../service/API';

export default function Today() {

    require('dayjs/locale/pt-br')
    const date = dayjs().locale('pt-br').format(`dddd, DD/MM`);

    const { user, todayHabits, setTodayHabits } = useContext(UserContext);

    useEffect(() => {
        getTodayHabits(user.token)
            .then((response) => setTodayHabits(response.data))
            .catch(() => console.error)
    }, [user.token, setTodayHabits, todayHabits]);

    function calcPercentage () {
        const progress = todayHabits.filter(habit => habit.done).length;
        const totalHabits = todayHabits.length;

        return ((progress/totalHabits) * 100).toFixed(0);
    }

    return (
        <>
            <Navbar />
                <main>
                    <Date>{date}</Date>
                    <Progress state={todayHabits.filter(habit => habit.done).length === 0}>{todayHabits.filter(habit => habit.done).length === 0 ? 'Nenhum hábito concluído ainda' : `${calcPercentage()}% dos hábitos concluídos`}</Progress>
                    {todayHabits.map((habit, index) =>
                        <TodayHabit
                            key={index}
                            user={user}
                            id={habit.id}
                            name={habit.name}
                            status={habit.done}
                            habitCurrent={habit.currentSequence}
                            habitRecord={habit.highestSequence}
                            toggleHabit={toggleHabit}
                        />)}
                </main>
            <Menu />
        </>
    );
}

function TodayHabit({ user, id, name, status, habitCurrent, habitRecord, toggleHabit }) {

    const [done, setDone] = useState(status);
    const [current, setCurrent] = useState(habitCurrent);
    const [record, setRecord] = useState(habitRecord);

    function check() {
        if (current === record) {
            setRecord(record + 1);
        }
        setCurrent(current + 1);
    }

    function uncheck() {
        setCurrent(current - 1);
        setRecord(record - 1);
    }

    function toggleStatus() {
        if (!done) {
            toggleHabit(user.token, id, 'check');
            setDone(true);
            check();
        } else {
            toggleHabit(user.token, id, 'uncheck');
            setDone(false);
            uncheck();
        }
    }

    return (
        <Habit>
            <TextInfo>
                <Title>{name}</Title>
                <Sequence state={done ? true : false}><SubtitleInfo>Sequência atual:</SubtitleInfo> {current} {current > 1 ? 'dias' : 'dia'}</Sequence>
                <Record state={current === record && record !== 0 ? true : false}><SubtitleInfo>Seu recorde:</SubtitleInfo> {record} {record > 1 ? 'dias' : 'dia'}</Record>
            </TextInfo>
            <Check state={done} onClick={toggleStatus}>
                <CheckmarkSharp
                    color="#ffffff"
                    height="35px"
                    width="28px"
                    />
            </Check>
        </Habit>
    );
}

const Date = styled.h1`
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 5px;
`;

const Progress = styled.h2`
    font-size: 18px;
    color: ${props => props.state ? '#bababa' : '#8fc549'};
    margin-bottom: 30px;
`;

const Habit = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
`;

const TextInfo = styled.div`
    width: calc(100% - 90px);
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: 20px;
    color: #666666;
    margin-bottom: 15px;
`;

const SubtitleInfo = styled.span`
    font-size: 13px;
    color: #666666;
`;

const Sequence = styled.p`
    font-size: 13px;
    color: ${props => props.state ? '#8fc549' : '#666666'};
`;

const Record = styled.p`
    font-size: 13px;
    color: ${props => props.state ? '#8fc549' : '#666666'};
`;

const Check = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.state ? '#8fc549' : '#ebebeb'};
    border: ${props => props.state ? 'none' : '1px solid #e7e7e7'};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
