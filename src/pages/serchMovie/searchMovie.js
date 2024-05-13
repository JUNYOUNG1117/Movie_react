import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../constant";
import { Button, Search, Container, MovieList } from "./styled";
import { useNavigate } from "react-router-dom";

export const SearchMovie = () => {
  const navigate = useNavigate();
  const [serchInput, SetSerchInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [code, setCode] = useState([]);
  const getSerchInput = (e) => {
    SetSerchInput(e.target.value);
  };

  const getMovieList = async () => {
    try {
      const response = await axios.get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${KEY}&movieNm=${serchInput}&itemPerPage=100`
      );
      setMovieList(response.data.movieListResult.movieList);
      setCode(response.data.movieListResult.movieList.movieCd);
      console.log(code);
      console.log(serchInput);
      console.log(response);
      console.log(response.data.movieListResult.movieList);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        영화 검색 :
        <Search>
          <input
            placeholder="영화 제목을 입력하세요"
            onChange={getSerchInput}
            type="text"
          />
        </Search>
        <Button onClick={getMovieList}>Search</Button>
      </Container>
      <Container>
        {movieList.length !== 0 &&
          movieList.map((e, i) => {
            return (
              <MovieList
                key={i}
                onClick={() => navigate("/movie-detail", { state: { code } })}
              >
                {e.movieNm}
              </MovieList>
            );
          })}
      </Container>
    </>
  );
};
