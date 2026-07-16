import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CodePage from "./pages/CodePage";
import AllCodesPage from "./pages/AllCodesPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-glow" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codes" element={<AllCodesPage />} />
        <Route path="/code/:id" element={<CodePage />} />
      </Routes>
    </BrowserRouter>
  );
}
