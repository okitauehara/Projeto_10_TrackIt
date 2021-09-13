import styled from "styled-components";
import { TrashOutline } from 'react-ionicons';
import { deleteHabit } from "../../../service/API";
import UserContext from "../../../contexts/UserContext";
import { useContext } from "react";
import Swal from "sweetalert2";

export default function HabitsList({ habits, setHabits }) {

    const { user } = useContext(UserContext);
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <>
            {habits.map((habit, index) => 
            <Habit
                habits={habits}
                setHabits={setHabits}
                weekdays={weekdays}
                user={user}
                deleteHabit={deleteHabit}
                name={habit.name}
                selectedDays={habit.days}
                key={index} id={habit.id}
                check={index}/>)}

        </>
    );
}

function Habit ({ habits, setHabits, weekdays, user, deleteHabit, name, selectedDays, id, check}) {

    function deleteConfirmation() {
        Swal.fire({
            title: 'Deseja excluir o hábito?',
            text: 'Não será possível reverter esta ação',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
          }).then((result) => {
            if (result.isConfirmed) {
                let removed = habits.indexOf(habits[check]);
                habits.splice(removed, 1);
                setHabits([...habits]);
                deleteHabit(user.token, id)
                    .then(() =>
                    Swal.fire(
                        'Sucesso!',
                        'Este hábito foi removido com sucesso',
                        'success'
                      ));
            }
          })
    }

    return (
    <HabitContainer key={id}>
        <Title>{name}</Title>
        <RemoveHabit onClick={deleteConfirmation}>
            <TrashOutline
                color={'#666666'} 
                height="15px"
                width="15px"
                />
        </RemoveHabit>
        <Weekdays>
            {weekdays.map((weekday, index) =>
            <Weekday
                weekday={weekday}
                key={index}
                check={index}
                selectedDays={selectedDays}/>)}
        </Weekdays>
    </HabitContainer>
    );
}

function Weekday({ weekday, check, selectedDays }) {
    return (
        <Day selected={selectedDays.indexOf(check) !== -1} >{weekday}</Day>
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
    width: calc(100% - 30px);
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;
`;

const RemoveHabit = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px;
`;

const Weekdays = styled.div`
    display: flex;
    flex-direction: row;
`;

const Day = styled.button`
    width: 30px;
    height: 30px;
    border: ${props => props.selected ? '1px solid #cfcfcf' : '1px solid #d4d4d4'};
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: ${props => props.selected ? '#ffffff' : '#dbdbdb'};
    background-color: ${props => props.selected ? '#cfcfcf' : '#ffffff'};
    margin-right: 5px;
`;
