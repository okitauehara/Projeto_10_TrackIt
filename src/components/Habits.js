import styled from "styled-components";
import { TrashOutline } from 'react-ionicons'

export default function Habits() {

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <main>
            <PageHeader>
                <MyHabits>Meus hábitos</MyHabits>
                <AddHabit>+</AddHabit>
            </PageHeader>
            <Container>
                <Name type='text' placeholder='nome do hábito'></Name>
                <Weekdays>
                    {days.map(weekday => (
                        <Day>{weekday}</Day>
                    ))}
                </Weekdays>
                <Actions>
                    <Cancel>Cancelar</Cancel>
                    <Save>Salvar</Save>
                </Actions>
            </Container>
            <NoHabitsAlert>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabitsAlert>
            <HabitContainer>
                <Title>Ler 1 capítulo de livro</Title>
                <RemoveHabit>
                    <TrashOutline
                        color={'#666666'} 
                        height="15px"
                        width="15px"
                        />
                </RemoveHabit>
                <Weekdays>
                    {days.map(weekday => (
                        <Day>{weekday}</Day>
                    ))}
                </Weekdays>
            </HabitContainer>
            <HabitContainer>
                <Title>Ler 1 capítulo de livro</Title>
                <RemoveHabit>
                    <TrashOutline
                        color={'#666666'} 
                        height="15px"
                        width="15px"
                        />
                </RemoveHabit>
                <Weekdays>
                    {days.map(weekday => (
                        <Day>{weekday}</Day>
                    ))}
                </Weekdays>
            </HabitContainer>
            <HabitContainer>
                <Title>Ler 1 capítulo de livro</Title>
                <RemoveHabit>
                    <TrashOutline
                        color={'#666666'} 
                        height="15px"
                        width="15px"
                        />
                </RemoveHabit>
                <Weekdays>
                    {days.map(weekday => (
                        <Day>{weekday}</Day>
                    ))}
                </Weekdays>
            </HabitContainer>
        </main>
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

const Container = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 30px;
`;

const Name = styled.input`
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin-bottom: 10px;
    outline: none;

    ::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #dbdbdb;
        padding-left: 10px;
    }
`;

const Weekdays = styled.div`
    display: flex;
    flex-direction: row;
`;

const Day = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: #dbdbdb;
    background-color: #ffffff;
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
`;

const NoHabitsAlert = styled.p`
    font-size: 18px;
    color: #666666;
`;

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