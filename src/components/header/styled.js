import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    padding: 30px;
    font-size: 50px;
    background-color: black;
    color: white;
    border: 1px solid #c9c9c9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    cursor: pointer;
`;

export const Button = styled.button`
    background-color: darkgrey;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    width: 200px;
    height: 50px;
    justify-self: center;
    margin: auto;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
    }
`

export const SerchInput = styled.div`
    text-align: center;
    font-size: 20px;
    background-color: black;
    color: white;
    border: 1px solid #c9c9c9;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
`