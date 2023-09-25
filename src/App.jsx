import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import AllRegions from "./routes/AllRegions";
import MyRegions from "./routes/MyRegions";
import FavoriteRegions from "./routes/FavoriteRegions.jsx";
import NavTab from "./components/NavTab.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<AllRegions />} />
          <Route path="/my" element={<MyRegions />} />
          <Route path="/favorite" element={<FavoriteRegions />} />
        </Routes>
        <NavTab />
      </Router>
    </>
  );
}

export default App;
