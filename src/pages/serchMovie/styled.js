import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #c9c9c9;
  flex-wrap: wrap;
  
  
`

export const SearchBar = styled.div`
  display: flex;
  border-bottom: 1px solid #c9c9c9;
  flex-wrap: wrap;
  height: 35px;
  gap: 5px;
  background-color: black;
  border-radius: 10px;
  
`
export const SearchText = styled.div`
  display: flex;
  padding: 5px;
  color: white;
`

export const Search = styled.input`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 5px;
`;

export const Button = styled.div`
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background-color:#2f3545;
  padding: 5px;
`;

export const MovieList = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #c9c9c9;
  border-radius: 10px;
  
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    

  }
`;
