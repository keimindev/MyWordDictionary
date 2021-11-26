import React, {useEffect, useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {Add, Delete, Edit} from '@material-ui/icons'
import { delWordsListFB, loadWordsListFB } from '../redux/modules/reducer';

const Words = () => {
    const mywordslist = useSelector((state) => state.reducer.list)
    mywordslist.sort((a, b) => b.index - a.index)
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {cur} = useRef(null);

    useEffect(() => {
       dispatch(loadWordsListFB())
    },[])

    return (
        <Wrapper>
            <Title>My Dictionary</Title>
            <Link to="/add">
            <Btn><Add className="icon"/></Btn>
            </Link>
            <Contents>
            { mywordslist.length === 0 ? (
               <Empty>
                   <h2>Empty your list</h2>
                   <h3>Please, Add your new word</h3>
                   <img src="/assets/empty.png" alt="empty" />
               </Empty>
            ) : (
                <>
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
                        <Button onClick={() => nav(`/${x.id}/edit`)}><Edit /></Button>
                        <Button onClick={() => {
                                dispatch(delWordsListFB(x.id))
                                dispatch(loadWordsListFB())
                        }}><Delete /></Button>
                        </div>
                    </Word>
                    )
                })}
                </>
            )}

          </Contents>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.btns{
    display: flex;
    justify-content: end;

    position:absolute;
    /* bottom: 10px; */
    right: 10px;
    top: 20px;
    
}
`;

const Title = styled.h2`
color: #fff;
text-align: center;
margin-bottom: 60px;
font-size: 36px;
font-weight:bold;
font-family: 'yg-jalnan';
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
background-color: #7c7dfa;
z-index: 50;
transition: all 0.5s ease;

.icon{
    font-size: 60px;
   
}

&:hover{
        background-color: #002994;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    }
`;
const Contents = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;


@media screen and (max-width: 1440px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }



@media screen and (max-width: 680px) {
    width: 100%;
    grid-template-columns: 1fr;
    }
`;


const Word = styled.div`
background-color: #fff;
padding: 5px 20px 20px 20px;
border-radius: 10px;

position: relative;

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
color:#7c7dfa;
cursor: pointer;
transition: all 0.5s ease;
 
&:hover{
color: #002994;
}
`;


const Empty = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

text-align:center;
color: #fff;
 h2{
     margin-bottom: 20px;
 }
 
 h3{
     margin-bottom: 30px;
 }

`;

export default Words
