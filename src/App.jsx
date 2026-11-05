import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// ↓ כאן כל אחת מוסיפה את ה־import שלה ↓
import RecipeDetails from "./pages/RecipeDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* ↓ כאן כל אחת מוסיפה את ה־Route שלה ↓ */}
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
