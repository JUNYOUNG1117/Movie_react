import React from "react";
import { Container } from "./styled";
import { useNavigate } from "react-router-dom";

export const Card = ({ props ,code }) => {
  const navigate = useNavigate();
  console.log(props)
  console.log(code)

  return (
    <Container
      onClick={()=>navigate("/movie-detail", { state: { code } } ) }
    >
      <div>{props}</div>
    </Container>
  );
};
