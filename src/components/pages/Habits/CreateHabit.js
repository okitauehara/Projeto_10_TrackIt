import { useState, useContext } from "react";
import styled from "styled-components";
import { getUserHabits, postHabit } from "../../../service/API";
import Loader from "react-loader-spinner";
import UserContext from "../../../contexts/UserContext";
import Swal from "sweetalert2";

export default function CreateHabit({ weekdays, container, setContainer, setHabits }) {

    const { user } = useContext(UserContext);

    const [name, setName] = useState('');
    const [days, setDays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedDays, setSelectedDays] = useState(weekdays);

    function addHabit() {
        setLoading(true);
        const body = {
            name,
            days,
        }

        if (!!name && days.length !== 0) {
            postHabit(body, user.token)
            .then(() => {
                getUserHabits(user.token)
                    .then((response) => setHabits(response.data))
                    .catch(() => console.error);
                setName('');
                setDays('');
                setSelectedDays(weekdays);
                setContainer(false);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Ops...',
                    text: 'Preencha todos os campos corretamente',
                  })
            })
        } else {
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Existem campos vazios!',
                text: 'Dê um nome para o hábito e selecione ao menos um dia',
              })
        }
    }

    return (
        <Container state={container} >
            <Name
                state={loading}
                type='text'
                placeholder='nome do hábito'
                value={name}
                onChange={(e) => setName(e.target.value)}></Name>
            <Weekdays state={loading}>
                <RenderDays
                    selectedDays={selectedDays}
                    days={days}
                    setDays={setDays}/>
            </Weekdays>
            <Actions>
                <Cancel onClick={() => setContainer(false)}>Cancelar</Cancel>
                {!loading ? <Save onClick={addHabit}>Salvar</Save> : <Save><Loader type="ThreeDots" color="#ffffff" height={30} width={30} /></Save>}
            </Actions>
        </Container>
    );
}

function RenderDays({ selectedDays, days, setDays }) {

    function toggleDay(weekday) {
        if (days.includes(weekday.dayID)) {
            weekday.isAvailable = true;
            let removed = (days.indexOf(weekday.dayID));
            days.splice(removed, 1);
            setDays([...days]);
        } else {
            weekday.isAvailable = false;
            setDays([...days, weekday.dayID]);
        }
    }

    return (
        selectedDays.map((weekday, index) => (
            <Day key={index} state={weekday.isAvailable} onClick={() => toggleDay(weekday)}>{weekday.day}</Day>
        ))
    );
}

const Container = styled.div`
    width: 100%;
    height: 180px;
    display: ${props => props.state ? 'flex' : 'none'};
    flex-direction: column;
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 30px;
`;

const Name = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin-bottom: 10px;
    outline: none;
    color: ${props => props.state ? '#afafaf' : '#000000'};
    pointer-events: ${props => props.state ? 'none' : 'all'};
    background-color: ${props => props.state ? '#f2f2f2' : '#ffffff'};

    ::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #dbdbdb;
        padding-left: 10px;
        color: ${props => props.state ? '#afafaf' : '#dbdbdb'};
    }
`;

const Weekdays = styled.div`
    display: flex;
    flex-direction: row;
    pointer-events: ${props => props.state ? 'none' : 'all'};
`;

const Day = styled.button`
    width: 30px;
    height: 30px;
    border: ${props => props.state ? '1px solid #d4d4d4' : '1px solid #cfcfcf'};
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: ${props => props.state ? '#dbdbdb' : '#ffffff'};
    background-color: ${props => props.state ? '#ffffff' : '#cfcfcf'};
    margin-right: 5px;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`;

const Cancel = styled.button`
    width: 84px;
    height: 35px;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    color: #52b6ff;
    margin-right: 10px;
`;

const Save = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    color: #ffffff;
    opacity: ${props => props.onClick === undefined ? '0.7' : '1'};
    pointer-events: ${props => props.onClick === undefined ? 'none' : 'all'};
`;
