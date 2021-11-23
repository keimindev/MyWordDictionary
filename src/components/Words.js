import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {Add, Delete, Edit} from '@material-ui/icons'
import { delWordsListFB, loadWordsListFB } from '../redux/modules/reducer';

const Words = () => {
    const mywordslist = useSelector((state) => state.reducer.list)
    const lists = mywordslist.sort((a, b) => b.index - a.index)
    const dispatch = useDispatch();
    const {cur} = useRef(null);

    useEffect(() => {
       dispatch(loadWordsListFB())
    }, [])

    const onClick = (e) =>{
        const target = e.target.parentNode.parentNode.parentNode.parentNode.id;
        // dispatch(delWords(target))
        dispatch(delWordsListFB(target))
        window.location.href = '/';
             
    }

    return (
        <Wrapper>
            <Title>My Dictionary</Title>
            <Link to="/add">
            <Btn><Add className="icon"/></Btn>
            </Link>
            <Contents>
            {mywordslist.map((x, i) => {
                return (
                    <Word id={x.id} ref={cur}>
                    <div>
                        <h5>단어</h5>
                        <p style={{fontSize: '26px', fontWeight: '700'}}>{x.word}</p>
                    </div>
                    <div>
                        <h5>설명</h5>
                        <p>{x.meaning}</p>
                    </div>
                    <div>
                        <h5>예시</h5>
                        <li style={{color:"#005cb2"}}>{x.ex}</li>
                    </div>
                    <div className="btns">
                    <Button id={x.id}><Edit /></Button>
                    <Button id={x.id} onClick={onClick}><Delete /></Button>
                    </div>
                </Word>
                )
            })}
          </Contents>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: #00bcd4;

.btns{
    display: flex;
    justify-content: end;
}
`;

const Title = styled.h2`
color: #fff;
text-align: center;
margin-bottom: 60px;
font-size: 30px;
font-weight: 600;
`;

const Btn =styled.button`
background-color: transparent;
border: 0;
outline: 0;
color:#fff;
cursor: pointer;

position: fixed;
right: 5%;
bottom: 5%;
width:  60px;
height: 60px;
border-radius: 50%;
background-color: #005c6b;

.icon{
    font-size: 60px;
    transition: all 0.5s ease;
}

&:hover{
        background-color: #005662;
    }
`;
const Contents = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
background-color: #00bcd4;

@media screen and (max-width: 1200px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }



@media screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: 1fr;
    }
`;


const Word = styled.div`
background-color: ${(props) => props.cur ? '#222' : '#fff' };
padding: 5px 20px;
border-radius: 10px;

div{
    margin: 15px 0 20px 0;

    h5{
        margin-bottom: 10px;
    }
}
`;

const Button = styled.button`
background-color: transparent;
margin: 0 5px;
border: 0;
outline: 0;
color:#08bcd4;
cursor: pointer;
 
&:hover{
color: #005662;
}
`;

export default Words
