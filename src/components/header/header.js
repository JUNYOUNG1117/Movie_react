import React, { useEffect, useState } from "react";
import { Container, SerchInput } from "./styled";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
  

  return (
    <>
      <Container onClick={()=>navigate("/") }>영화 일일 박스오피스 순위</Container>
      <SerchInput onClick={()=>navigate("/search-movie") }>
        <div>영화 검색</div>
      </SerchInput>
    </>
  );
};
