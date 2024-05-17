import React from "react";
import { Container, Text } from "./styled";
import { useNavigate } from "react-router-dom";

export const Card = ({ props, code }) => {
  // main 페이지에 api에서 영화 제목(props), 영화 코드(code)를 받음
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate("/movie-detail", { state: { code } })} // 영화 상세보기 페이지에 영화 코드를 넘김
    >
      <Text>{props}</Text>
    </Container>
  );
};
