import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const AddWord = () => {
    const nav = useNavigate();
    const addMyword=() =>{
        nav('/')
    }
    return (
        <Main>
            <Title>단어 추가하기</Title>
            <Contents>
            <form>
                <h4>단어</h4>
                <input type="text" />
                <h4>설명</h4>
                <input type="text" />
                <h4>예시</h4>
                <input type="text" />
            </form>
            </Contents>
            <Btn onClick={addMyword}>추가하기</Btn>
        </Main>
    )
}

const Main = styled.div`
text-align: center;
`;

const Title = styled.h2`
color: #fff;
text-align: center;
margin-bottom: 60px;
`;

const Contents = styled.div`
/* background-color: #fff; */
padding: 30px 40px;
border-radius: 10px;
text-align: left;

  form{

    h4{
        width: 50px;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 10px;
        background-color: #fff;
        padding: 10px 8px;
    
    }

    input{
        width: 95%;
        height: 50px;
        padding: 5px 10px;
        border: 0;
        outline: 0;
        margin-bottom: 30px;
        border-radius: 10px;
    }

  }
`;


const Btn = styled.button`
width: 140px;
height: 70px;
padding: 10px 20px;
margin: 30px auto;
border: 0;
outline: 0;
border-radius: 10px;
background-color: #007c91;
color: #fff;
transition: all 0.5s ease-in;
cursor: pointer;

&:hover{
    background-color:#005c6b;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

`;

export default AddWord
