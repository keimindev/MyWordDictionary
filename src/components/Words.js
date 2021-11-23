import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AddCircle} from '@material-ui/icons'

const Words = () => {
    return (
        <Wrapper>
            <Title>My Dictionary</Title>
            <Link to="/add">
            <Btn><AddCircle className="icon"/></Btn>
            </Link>
            <Word>
                <div>
                    <h5>단어</h5>
                    <p>가즈아</p>
                </div>
                <div>
                    <h5>설명</h5>
                    <p>도박이나 투자에서 긍정적인 기대를 표현하는 감탄사로, 소망을 말할 때 사용되는 단어로 의미가 확장되었다</p>
                </div>
                <div>
                    <h5>예시</h5>
                    <li>삼성전자 10만전자 가즈아!</li>
                </div>
            </Word>
            <Word>
                <div>
                    <h5>단어</h5>
                    <p>가즈아</p>
                </div>
                <div>
                    <h5>설명</h5>
                    <p>도박이나 투자에서 긍정적인 기대를 표현하는 감탄사로, 소망을 말할 때 사용되는 단어로 의미가 확장되었다</p>
                </div>
                <div>
                    <h5>예시</h5>
                    <li>삼성전자 10만전자 가즈아!</li>
                </div>
            </Word>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100%;
position: relative;
`;

const Title = styled.h2`
color: #fff;
text-align: center;
margin-bottom: 60px;
`;

const Btn =styled.button`
background-color: transparent;
border: 0;
outline: 0;
color:#005662;
cursor: pointer;

position: absolute;
right: 00px;
top: 30px;

.icon{
    font-size: 40px;
    transition: all 0.5s ease;

    &:hover{
        color: #005c6b;
    }

}


`;

const Word = styled.div`
background-color: #fff;
padding: 5px 20px;
border-radius: 10px;
margin: 30px 0;

div{
    margin: 10px 0 30px 0;

    h5{
        margin-bottom: 10px;
    }
}
`;
export default Words
