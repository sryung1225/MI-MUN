import Card from "../components/Card";

function FavoriteRegions() {
  return (
    <>
      <h1>즐겨 찾는 지역 보기</h1>
      {Array.from({ length: 5 }, (_, index) => (
        <Card key={index} />
      ))}
    </>
  );
}

export default FavoriteRegions;
