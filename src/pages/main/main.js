import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/card/card";
import { Container } from "./styled";
import { KEY } from "../../constant";

export const Main = () => {
  console.log(KEY);
  // 어제 날짜 구하기
  const TODAY = new Date();
  const YEAR = TODAY.getFullYear();
  const MONTH = ("0" + (TODAY.getMonth() + 1)).slice(-2);
  const YESTERDAY = ("0" + (TODAY.getDate() - 1)).slice(-2);
  const DATE = YEAR + MONTH + YESTERDAY;

  const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`;
  const [Boxoffice, setBoxoffice] = useState([]);
  const [Code, setCode] = useState([]);
  useEffect(() => {
    const apirequest = async () => {
      try {
        const response = await axios.get(url);
        setBoxoffice(
          response.data.boxOfficeResult.dailyBoxOfficeList.map(
            (movie) => movie.movieNm
          )
        );
        setCode(
          response.data.boxOfficeResult.dailyBoxOfficeList.map(
            (code) => code.movieCd
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
        {Boxoffice.map((e, i) => {
          return <Card key={i} props={e} code={Code[i]} />;
        })}
      </Container>
    </>
  );
};
