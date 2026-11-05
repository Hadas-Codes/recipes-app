import { useParams } from "react-router";

export default function RecipeDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>מתכון מספר {id}</h1>
    </div>
  );
}