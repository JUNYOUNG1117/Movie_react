import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContentContainer, Container, Text } from "./styled";
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
  // 누적 관객 수
  const [audiAcc, setaudiAcc] = useState([]);

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
      console.log(e);
    }
  };

  return (
    <div>
      <Container>
        <ContentContainer>
          <Text>출연 배우</Text>
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
          <Text>장르</Text>
          {genreNm.length !== 0 &&
            genreNm.map((e, i) => {
              return <SmallCard key={i} props={e.genreNm} />;
            })}
        </ContentContainer>
        <ContentContainer>
          <Text>제작 국가</Text>
          {nationNm.length !== 0 &&
            nationNm.map((e, i) => {
              return <SmallCard key={i} props={e.nationNm} />;
            })}
        </ContentContainer>
        <ContentContainer>
          <Text>개봉일</Text>
          <SmallCard props={openDt}></SmallCard>
        </ContentContainer>
        <ContentContainer>
          <Text>관람 등급</Text>
          {watchGradeNm.map((e, i) => {
            return <SmallCard key={i} props={e.watchGradeNm} />;
          })}
        </ContentContainer>
      </Container>
    </div>
  );
};
