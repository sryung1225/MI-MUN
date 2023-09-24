import Card from "../components/Card";

function AllRegions() {
  return (
    <>
      <h1>모든 지역 보기</h1>
      {Array.from({ length: 5 }, (_, index) => (
        <Card key={index} />
      ))}
    </>
  );
}

export default AllRegions;
