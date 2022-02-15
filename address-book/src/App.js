import "./app.scss"
import Intro from "./components/Intro/Intro"
import AddContact from "./components/AddContact/AddContact"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Intro /><AddContact /></>} />
          {/* <Route path="/list" element={} /> */}
          {/* <Route path="/search" element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
