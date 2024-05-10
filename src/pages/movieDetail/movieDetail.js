import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ActorContainer } from "./styled";
import axios from "axios";
import { SmallCard } from "../../components/smallCard/smallCard";
import { KEY } from "../../constant";
export const MovieDetail = () => {
  const location = useLocation();
  console.log(location.state.code);

  const [actor, setActor] = useState([]);
  useEffect(() => {
    getMovieDetail();
  }, []);
  const getMovieDetail = async () => {
    try {
      const response = await axios.get(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${KEY}&movieCd=${location.state.code}`
      );

      setActor(response.data.movieInfoResult.movieInfo.actors);
    } catch (e) {
      alert("네트워크를 확인하세요.");
      console.log(e);
    }
  };

  return (
    <div>
      
      <ActorContainer>
        출연 배우
        {actor.length !== 0 &&
          actor.map((e, i) => {
            if(i<8){
              return <SmallCard key={i} props={e.peopleNm} />;
            }else{
              return ;
            }
            
          })}
      </ActorContainer>
    </div>
  );
};
