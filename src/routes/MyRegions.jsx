import Card from "../components/Card";

function MyRegions() {
  return (
    <>
      <h1>내 지역 보기</h1>
      {Array.from({ length: 5 }, (_, index) => (
        <Card key={index} />
      ))}
    </>
  );
}

export default MyRegions;
