import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #c9c9c9;
  flex-wrap: wrap;
`;
export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  align-items: center;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  justify-content: space-between;
  background: #2f3545;
`;

export const MovieList = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  &:hover {
    background-color: black;
    color: white;
  }
`;
