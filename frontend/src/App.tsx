import "./index.css";
import "./base.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilmGrid from "./pages/FilmGrid";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<FilmGrid />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
