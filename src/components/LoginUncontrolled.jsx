import { useNavigate } from "react-router";
import { login } from "../services/auth";
import { useState } from "react";

export default function LoginUncontrolled() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormAction = (formData) => {
    const data = Object.fromEntries(formData.entries());
    

    const foundUser = login({ email: data.email, password: data.password });

    if (foundUser) {
      setErrorMsg("");
      navigate("/recipes"); 
    } else {
      setErrorMsg("אימייל או סיסמה שגויים"); 
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>טופס התחברות - לא מבוקר (Uncontrolled)</h2>

      <form action={handleFormAction} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        
        <div>
          <label>אימייל:</label>
          <input
            type="email"
            name="email"
            defaultValue="chef@recipes.com" 
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>

        <div>
          <label>סיסמה:</label>
          <input
            type="password"
            name="password"
            defaultValue="" 
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>

        {errorMsg && <p style={{ color: "red", margin: 0 }}>{errorMsg}</p>}

        <button type="submit" style={{ padding: "10px", background: "#007BFF", color: "white", border: "none", cursor: "pointer" }}>
          התחבר
        </button>
      </form>
    </div>
  );
}

/*
  תשובה לשאלה מתוך ההוראות:
  האם ניתן לבדוק תקינות בעת הקלדה? 
  בטופס לא מבוקר אמיתי קשה מאוד לבדוק תקינות בזמן אמת תוך כדי הקלדה 
  מכיוון שאין לנו מעקב בסטייט אחרי כל שינוי לכן, בדיקת התקינות והאימות מתבצעות לרוב בשליחת הטופס בלבד 
*/