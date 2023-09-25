import Card from "../components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMimun } from "../actions";

function AllRegions() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.mimunSlice);
  useEffect(() => {
    dispatch(fetchMimun("중구"));
  }, [dispatch]);
  if (!data) {
    return null;
  }
  if (data.length === 0) {
    return <div>No data available.</div>;
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
