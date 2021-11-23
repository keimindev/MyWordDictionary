import React, {useRef} from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { addWordsListFB } from '../redux/modules/reducer';
import { Info } from '@material-ui/icons';

const AddWord = () => {
    const mywordslist = useSelector((state) => state.reducer.list)
    const listLength = mywordslist.length;
    const nav = useNavigate();
    const myWord = useRef(null);
    const myMean= useRef(null);
    const myEx= useRef(null);
    const dispatch = useDispatch();

    const addMyword=() =>{
        dispatch(addWordsListFB({
            index : listLength + 1,
            word: myWord.current.value,
            meaning: myMean.current.value,
            ex: myEx.current.value, 
        }))
        nav('/');
    }
    return (
        <Main>
            <Title>단어 추가하기</Title>
            <Contents>
            <form>
                <h4>단어</h4>
                <input type="text" ref={myWord} />
                <h4>설명</h4>
                <input type="text" ref={myMean}/>
                <h4>예시</h4>
                <input type="text" ref={myEx}/>
            </form>
            </Contents>
            <Btn onClick={addMyword}>추가하기</Btn>
        </Main>
    )
}

const Main = styled.div`
width: 100%;
height: 82.9vh;
text-align: center;
background-color:#00bcd4;;
`;

const Title = styled.h2`
color: #fff;
text-align: center;
margin-bottom: 60px;
`;

const Contents = styled.div`
width: 550px;
margin: 0px auto;
border-radius: 10px;
text-align: left;
box-sizing: border-box;

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
