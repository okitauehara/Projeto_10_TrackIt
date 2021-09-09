import styled from "styled-components";
import { Checkbox } from 'react-ionicons'

export default function Today() {
    return (
        <main>
            <Date>Segunda, 17/05</Date>
            <Progress>Nenhum hábito concluído ainda</Progress>
            <Habit>
                <TextInfo>
                    <Title>Ler 1 capítulo de livro</Title>
                    <Sequence>Sequência atual: 3 dias</Sequence>
                    <Record>Seu recorde: 5 dias</Record>
                </TextInfo>
                <Check>
                    <Checkbox
                        color={'#ebebeb'} 
                        height="69px"
                        width="69px"
                        />
                </Check>
            </Habit>
            <Habit>
                <TextInfo>
                    <Title>Ler 1 capítulo de livro</Title>
                    <Sequence>Sequência atual: 3 dias</Sequence>
                    <Record>Seu recorde: 5 dias</Record>
                </TextInfo>
                <Check>
                    <Checkbox
                        color={'#ebebeb'} 
                        height="69px"
                        width="69px"
                        />
                </Check>
            </Habit>
            <Habit>
                <TextInfo>
                    <Title>Ler 1 capítulo de livro</Title>
                    <Sequence>Sequência atual: 3 dias</Sequence>
                    <Record>Seu recorde: 5 dias</Record>
                </TextInfo>
                <Check>
                    <Checkbox
                        color={'#ebebeb'} 
                        height="69px"
                        width="69px"
                        />
                </Check>
            </Habit>
        </main>
    );
}

const Date = styled.h1`
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 5px;
`;

const Progress = styled.h2`
    font-size: 18px;
    color: #bababa;
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
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: 20px;
    color: #666666;
    margin-bottom: 15px;
`;

const Sequence = styled.p`
    font-size: 13px;
    color: #666666;
`;

const Record = styled.p`
    font-size: 13px;
    color: #666666;
`;

const Check = styled.div`
    width: 69px;
    height: 69px;
`;
