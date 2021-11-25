import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const NotFound = () => {
    return (
        <Main>
            <h2>Sorry, Page Not Found!</h2>
            <h3>The page you requested could not be found</h3>
            <img src="/assets/notfound.png" alt="notfound"/>
            <Link to="/">           
            <Btn>Go Back</Btn>
            </Link>
        </Main>
    )
}
const Main = styled.div`
height:51vh;
text-align: center;
padding: 150px 40px;
color: #fff;
background-color: #4451c6;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 60;

img{
    display: block;
    margin: 30px auto;
}

h2{
    margin-bottom: 20px;
}
`;
const Btn = styled.button`
width: 100px;
height: 50px;
padding: 10px 20px;
margin: 30px auto;
border: 0;
outline: 0;
font-weight: 600;
border-radius: 10px;
background-color: #7c7dfa;
color: #fff;
transition: all 0.5s ease-in;
cursor: pointer;


&:hover{
    background-color: #002994;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
`;
export default NotFound
