import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/Quiz" element={<QuizComponent />} />
        <Route path="/Result" element={<ResultComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;