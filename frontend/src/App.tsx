import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Game } from "./screens/Game";
import { Landing } from "./screens/Landing";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#302E2B]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
