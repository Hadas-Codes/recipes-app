import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails";
import RecipesList from "./pages/RecipesList";
import LoginControlled from './pages/LoginControlled';
import LoginUncontrolled from './pages/LoginUncontrolled';
import LoginRhf from './pages/LoginRhf';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="recipes/:id" element={<RecipeDetails />} />

        <Route path="recipes" element={<RecipesList />} />

        <Route path="login/controlled" element={<LoginControlled />} />

        <Route path="login/uncontrolled" element={<LoginUncontrolled />} />
        
        <Route path="login/rhf" element={<LoginRhf />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
