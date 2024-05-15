import React, { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "../../constant";
import { Button, Search, Container, MovieList, SearchBar, SearchText } from "./styled";
import { useNavigate } from "react-router-dom";

export const SearchMovie = () => {
  const navigate = useNavigate();
  const [serchInput, setSerchInput] = useState(0);
  const [searchResult, setSearchResult] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [code, setCode] = useState([]);

  useEffect(() => {
    if (movieList.length > 0) {
      const filter = movieList.filter((result) => {
        if (result !== "") {
          return Object.values(result).join("").includes(serchInput);
        } else {
          return "";
        }
      });
      setSearchResult(filter);
      
    }
  }, [movieList]);

  const getSerchInput = (e) => {
    setSerchInput(e.target.value);
  };

  const getMovieList = async () => {
    try {
      const response = await axios.get(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${KEY}&movieNm=${serchInput}&itemPerPage=100`
      );
      console.log(response.data.movieListResult.movieList);
      setMovieList(response.data.movieListResult.movieList);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <SearchBar>
        <SearchText>
        영화 검색 :
        </SearchText>
        <Search type="text" placeholder="영화 제목을 입력하세요" onChange={getSerchInput}>
          {/* <input
            placeholder="영화 제목을 입력하세요"
            onChange={getSerchInput}
            type="text"
          /> */}
        </Search>
        <Button onClick={getMovieList}>Search</Button>
      </SearchBar>
      <Container>
        {searchResult.length > 0 ? (
          searchResult.map((e, i) => {
            return (
              <MovieList
                key={i}
                onClick={() => navigate("/movie-detail", { state: {code:e.movieCd  } })}
              >
                {e.movieNm}
              </MovieList>
            );
          })
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};
