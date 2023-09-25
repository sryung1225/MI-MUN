import Card from "../components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMimun } from "../actions";

function AllRegions() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.mimunSlice);
  useEffect(() => {
    dispatch(fetchMimun("서울"));
  }, [dispatch]);
  if (!data || data.length === 0) {
    return <p>찾는 데이터가 없습니다.</p>;
  }
  return (
    <>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <Card data={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default AllRegions;
