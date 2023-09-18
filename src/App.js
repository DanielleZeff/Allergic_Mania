import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/signin/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
