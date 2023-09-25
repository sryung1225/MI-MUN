import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import Title from "./components/Title.jsx";
import AllRegions from "./routes/AllRegions";
import MyRegions from "./routes/MyRegions";
import FavoriteRegions from "./routes/FavoriteRegions.jsx";
import NavTab from "./components/NavTab.jsx";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Title />
        <Container>
          <Routes>
            <Route path="/" element={<AllRegions />} />
            <Route path="/my" element={<MyRegions />} />
            <Route path="/favorite" element={<FavoriteRegions />} />
          </Routes>
        </Container>
        <NavTab />
      </Router>
    </>
  );
}

const Container = styled.main`
  width: 100%;
  height: calc(100vh - 160px);
  margin: 80px 0;
`;

export default App;
