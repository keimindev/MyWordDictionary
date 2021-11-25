import React from 'react'
import styled from 'styled-components';

const Spinner = () => {
    const is_loaded = true;
    return (
        <>
        {is_loaded ? (
            <Loading>
                <p>Loading...</p>
            </Loading>
        ) : (
           <p>hello</p>
        )}
        </>

    )
}

const Loading = styled.div`
width: 100%;
height: 100%;
color: #fff;
background-color: #4451c6;
font-size: 50px;
padding-top: 400px;
box-sizing: border-box;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
z-index: 30;

p{
    font-weight:bold;
    font-family: 'yg-jalnan';
}
`;
export default Spinner