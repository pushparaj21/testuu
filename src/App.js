/** @format */
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Studant from "./components/Studant";
function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" components={Studant} />
    </Router>
  );
}

export default App;
