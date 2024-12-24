import "./index.css";
import "./base.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilmGrid from "./pages/FilmGrid";
import MainLayout from "./Layouts/MainLayout";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      {/* Toast messages */}
      <Toaster richColors position="top-center" visibleToasts={4} />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<FilmGrid />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
