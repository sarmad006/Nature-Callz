import React, { useState } from "react";
import Search from "./pages/Search";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import TermsAndCondition from './pages/TermsAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from "./ScrollToTop";
import './assets/css/style.css'

function App() {
  const [searchCount, setSearchCount] = useState(0);
  sessionStorage.setItem('count', '0');
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home searchCount={searchCount} setSearchCount={setSearchCount} />}></Route>
            <Route path="/search/q=:text" element={<Search searchCount={searchCount} setSearchCount={setSearchCount} />}></Route>
            <Route path="/about" element={<About searchCount={searchCount} setSearchCount={setSearchCount} />}></Route>
            <Route path="/terms-and-conditions" element={<TermsAndCondition searchCount={searchCount} setSearchCount={setSearchCount} />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy searchCount={searchCount} setSearchCount={setSearchCount} />}></Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
