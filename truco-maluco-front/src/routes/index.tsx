import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Game } from "../pages/Game/Game"
import { CreateGame } from "../pages/Game/Create/CreateGame"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/create" element={<CreateGame />} />
      </Routes>
    </BrowserRouter>
  )
}