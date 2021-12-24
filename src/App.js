import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState("home")

  function getPage(pageName) {
    console.log(pageName);
    if (pageName === "home") {
      return <Home />
    }
    else if (pageName === "portfolio") {
      return <Portfolio />
    }
    else if (pageName === "projects") {
      return <Projects />
    }
    else if (pageName === "resume") {
      return <Resume />
    }
  }

  return (
    <div className="App">
      <Nav setPage={setPage} />
      {getPage(page)}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
