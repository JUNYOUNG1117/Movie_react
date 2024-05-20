import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border:  solid #c9c9c9;
  border-radius: 10px;
  width: 300px;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: white;
    color: black;
    
  }
  
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
