import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Game } from "../pages/Game/Game"
import { CreateGame } from "../pages/Game/Create/CreateGame"
import { JoinGame } from "@/pages/Game/Join/JoinGame";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/create" element={<CreateGame />} />
        <Route path="/game/join" element={<JoinGame />} />
      </Routes>
    </BrowserRouter>
  );
}