import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/card/card";
import { Container } from "./styled";
import { KEY } from "../../constant";

export const Main = () => {
  // 어제 날짜 구하기(일일 박스오피스는 조회 당일은 아직 정보가 없기 때문에 전날 기준을 잡음)
  const TODAY = new Date();
  const YEAR = TODAY.getFullYear();
  const MONTH = ("0" + (TODAY.getMonth() + 1)).slice(-2);
  const YESTERDAY = ("0" + (TODAY.getDate() - 1)).slice(-2);
  const DATE = YEAR + MONTH + YESTERDAY;
  // 위에서 구한 날짜와 키값을 바탕으로 일일 박스오피스 조회
  const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`;
  const [Boxoffice, setBoxoffice] = useState([]); // 일일 박스오피스 리스트 저장
  const [Code, setCode] = useState([]);// 영화 코드를 저장

  // 페이지 로딩 시 api 호출
  useEffect(() => {
    const apirequest = async () => {
      try {
        const response = await axios.get(url);
        setBoxoffice(
          response.data.boxOfficeResult.dailyBoxOfficeList.map(
            (movie) => movie.movieNm // 영화 제목 저장
          )
        );
        setCode(
          response.data.boxOfficeResult.dailyBoxOfficeList.map(
            (code) => code.movieCd // 영화 코드 저장
          )
        );
      } catch (e) {
        console.log(e);
      }
    };
    apirequest();
  }, []);

  return (
    <>
      <Container>
        {Boxoffice.map((e, i) => {// Boxoffice에 담긴 정보를 뿌림
          return <Card key={i} props={e} code={Code[i]} />;
        })}
      </Container>
    </>
  );
};
