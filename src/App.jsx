import { Routes, Route } from "react-router";
import LoginControlled from './components/LoginControlled';
import LoginUncontrolled from './components/LoginUncontrolled';
import LoginRhf from './components/LoginRhf';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails";
import RecipesList from "./pages/RecipesList";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login/controlled" element={<LoginControlled />} />
        <Route path="/login/uncontrolled" element={<LoginUncontrolled />} />
        <Route path="/login/rhf" element={<LoginRhf />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path="recipes" element={<RecipesList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
