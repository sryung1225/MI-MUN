import { Helmet } from "react-helmet";
import Card from "../components/Card";

function MyRegions() {
  return (
    <>
      <Helmet>
        <title>미먼이 ☁ 내 지역</title>
      </Helmet>
      <h1>내 지역 보기</h1>
      {Array.from({ length: 5 }, (_, index) => (
        <Card key={index} />
      ))}
    </>
  );
}

export default MyRegions;
