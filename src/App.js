import "./App.css";
import Header from "./components/Header/Header";
import Highlights from "./components/Highlights/Highlights";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { menu } from "./food.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/menu"
            element={
              <div style={{ position: "relative", textAlign: "center" }}>
                <Highlights />
                <Menu menu={menu} />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate replace to="/menu" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
