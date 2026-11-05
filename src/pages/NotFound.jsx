import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h1>העמוד לא נמצא</h1>
      <Link to="/">חזרה לעמוד הבית</Link>
    </div>
  );
}
