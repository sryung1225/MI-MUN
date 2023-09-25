import { Helmet } from "react-helmet";
import Card from "../components/Card";

function FavoriteRegions() {
  return (
    <>
      <Helmet>
        <title>미먼이 ☁ 즐겨찾기</title>
      </Helmet>
      <h1>즐겨 찾는 지역 보기</h1>
      {Array.from({ length: 5 }, (_, index) => (
        <Card key={index} />
      ))}
    </>
  );
}

export default FavoriteRegions;
