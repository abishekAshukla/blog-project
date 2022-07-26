import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar2 from "./Components/Sidebar2";
import { AppState } from "./contexts/Context";
import "./App.css";

function App() {
  const { sidebar } = AppState();

  // styling when sidebar gets open
  document.body.style.backgroundColor = sidebar==true?"black":"";
  document.body.style.overflow = sidebar==true?"hidden":"";
  
  return (
    <div className={sidebar === true ? "" : ""}>
      <Router>
        <Navbar />
        <Sidebar2 />
        <Routes>
          <Route exact path="/blog" element={<Home />} />
          <Route exact path="/blogs" element={<Blog />} />
          <Route exact path="/blog/:id" element={<Post />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
