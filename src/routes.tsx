import { Route, Routes } from "react-router-dom";

import CharacterDetail from "./pages/CharacterDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import {
  fetchCharacterDetail,
  fetchCharacters,
} from "./services/rickandmortyService";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={<Dashboard fetchCharacters={fetchCharacters} />}
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/character-detail/:id"
        element={
          <CharacterDetail fetchCharacterDetail={fetchCharacterDetail} />
        }
      />

      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}
