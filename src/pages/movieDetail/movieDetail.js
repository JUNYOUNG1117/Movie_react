import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContentContainer, Container } from "./styled";
import axios from "axios";
import { SmallCard } from "../../components/smallCard/smallCard";
import { KEY } from "../../constant";
export const MovieDetail = () => {
  const location = useLocation();
  console.log(location.state.code);

  // 배우 저장
  const [actor, setActor] = useState([]);

  // 영화 장르 저장
  const [genreNm, setGenreNm] = useState([]);

  // 개봉 연도 저장
  const [openDt, setOpenDt] = useState([]);

  // 제작 국가 저장
  const [nationNm, setNationNm] = useState([]);

  // 관람 등급 저장
  const [watchGradeNm, setWatchGradeNm] = useState([]);

  useEffect(() => {
    getMovieDetail();
  }, []);
  const getMovieDetail = async () => {
    try {
      const response = await axios.get(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${KEY}&movieCd=${location.state.code}`
      );

      setActor(response.data.movieInfoResult.movieInfo.actors);
      setGenreNm(response.data.movieInfoResult.movieInfo.genres);
      setNationNm(response.data.movieInfoResult.movieInfo.nations);
      setOpenDt(response.data.movieInfoResult.movieInfo.openDt);
      setWatchGradeNm(response.data.movieInfoResult.movieInfo.audits);
    } catch (e) {
      alert("네트워크를 확인하세요.");
      console.log(e);
    }
  };

  return (
    <div>
      <Container>
        <ContentContainer>
          <h3>출연 배우</h3>
          {actor.length !== 0 &&
            actor.map((e, i) => {
              if (i < 8) {
                return <SmallCard key={i} props={e.peopleNm} />;
              } else {
                return;
              }
            })}
        </ContentContainer>
        <ContentContainer>
          <h3>장르</h3>
          {genreNm.length !== 0 &&
            genreNm.map((e, i) => {
              return <SmallCard key={i} props={e.genreNm} />;
            })}
        </ContentContainer>
        <ContentContainer>
          <h3>제작 국가</h3>
          {nationNm.length !== 0 &&
            nationNm.map((e, i) => {
              return <SmallCard key={i} props={e.nationNm} />;
            })}
        </ContentContainer>
        <ContentContainer>
          <h3>개봉일</h3>
          <SmallCard props={openDt}></SmallCard>
        </ContentContainer>
        <ContentContainer>
          <h3>관람 등급</h3>
          {watchGradeNm.map((e, i) => {
            return <SmallCard key={i} props={e.watchGradeNm} />;
          })}
        </ContentContainer>
      </Container>
    </div>
  );
};
