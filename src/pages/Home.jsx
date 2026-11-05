import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>ברוכות הבאות למתכונים</h1>
      <Link to="/recipes">למתכונים</Link>
    </div>
  );
}
