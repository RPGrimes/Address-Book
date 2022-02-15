import "./app.scss"
import Intro from "./components/Intro/Intro"
import AddContact from "./components/AddContact/AddContact"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {

  const [addressList, setAddressList] = useState([]);

  console.log(addressList)
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="indexComponents">
              <Intro />
              <AddContact addressList={addressList} setAddressList={setAddressList} />
            </div>
          } />
          <Route path="/list" element={
            <div className="listComponents">
              <ListContacts addressList={addressList}/>
            </div>
          } />
          {/* <Route path="/search" element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
