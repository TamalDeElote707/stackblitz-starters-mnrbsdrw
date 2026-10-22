import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";

export default function App() {
  return (
    <div className="app">
      <span className="deco d1">✿</span>
      <span className="deco d2">♡</span>
      <span className="deco d3">✦</span>
      <span className="deco d4">☁</span>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receta/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}
