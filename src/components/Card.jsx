import React from "react";
import styled from "styled-components";
import StarPath from "../assets/images/i_star_line_b.png";

const colors = {
  so_good: "#4992ff",
  good: "#88e08d",
  soso: "#f3f489",
  bad: "#f9b42a",
  so_bad: "#f75538",
};

function Card({ data }) {
  const pm10Value = data.pm10Value;
  let conditionColor, conditionText;
  if (pm10Value >= 0 && pm10Value <= 15) {
    conditionColor = colors.so_good;
    conditionText = "매우좋음";
  } else if (pm10Value >= 16 && pm10Value <= 30) {
    conditionColor = colors.good;
    conditionText = "좋음";
  } else if (pm10Value >= 31 && pm10Value <= 80) {
    conditionColor = colors.soso;
    conditionText = "보통";
  } else if (pm10Value >= 81 && pm10Value <= 150) {
    conditionColor = colors.bad;
    conditionText = "나쁨";
  } else {
    conditionColor = colors.so_bad;
    conditionText = "매우나쁨";
  }
  return (
    <>
      <CardWrapper style={{ backgroundColor: conditionColor }}>
        <Location>
          <Dong>{data.stationName}</Dong>
          <Si>{data.sidoName}</Si>
        </Location>
        <Condition style={{ color: conditionColor }}>{conditionText}</Condition>
        <Detail>미세먼지 수치: {data.pm10Value}</Detail>
        <Detail>({data.dataTime} 기준)</Detail>
        <Star type="button"></Star>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.article`
  position: relative;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: calc(50% - 40px);
  height: 250px;
  margin: 20px;
  padding: 20px;
  border-radius: 7px;
  box-shadow: 3px 3px 3px #aaa;
  @media only screen and (max-width: 1200px) {
    width: calc(100% - 40px);
  }
`;

const Location = styled.div`
  display: inline-block;
  width: 100%;
  height: 45px;
`;

const Dong = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-size: 38px;
  font-weight: bold;
`;

const Si = styled.span`
  font-size: 25px;
`;

const Condition = styled.span`
  display: inline-block;
  height: 90px;
  padding: 20px 30px;
  margin: 20px auto 10px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 50px;
  font-weight: bold;
`;

const Detail = styled.p`
  display: inline-block;
  width: 100%;
  margin-top: 2px;
  font-size: 14px;
  text-align: center;
`;

const Star = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(${StarPath}) no-repeat center;
  background-size: cover;
`;

export default Card;
