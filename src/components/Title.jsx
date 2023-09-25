import styled from "styled-components";

function Title() {
  return (
    <Header>
      <Desc>
        미세먼지 <br />
        알리미
      </Desc>
      <Tit>미먼이 ☁</Tit>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px #888;
  z-index: 10;
`;

const Tit = styled.h1`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 38px;
`;
const Desc = styled.span`
  display: inline-block;
  margin: 0 6px 11px 0;
  font-size: 14px;
  text-align: right;
`;

export default Title;
