import "./app.scss"
import Intro from "./components/intro/Intro"
import AddContact from "./components/addContact/AddContact"

function App() {
  return (
    <div className="app">
      <Intro />
      <AddContact />
    </div>
  );
}

export default App;
