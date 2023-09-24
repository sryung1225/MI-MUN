import { Link } from "react-router-dom";

function FooterTab() {
  return (
    <>
      <h1>하단탭</h1>
      <Link to="/">모든 지역 보기</Link>
      <Link to="/my">내 지역 보기</Link>
      <Link to="/favorite">즐겨 찾는 지역 보기</Link>
    </>
  );
}

export default FooterTab;
