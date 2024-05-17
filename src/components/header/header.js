import React from "react";
import { Container, Button } from "./styled";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
      <Container>
        <div onClick={() => navigate("/")}>일일 박스오피스</div>
        <Button onClick={() => navigate("/search-movie")}>영화 검색</Button>
      </Container>

  );
};
