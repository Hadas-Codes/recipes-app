
import { useActionState } from "react";
import { useNavigate } from "react-router";
import { login } from "../services/auth";

export default function LoginUncontrolled() {
  const navigate = useNavigate();

  function submitAction(prevState, formData) {
    const values = Object.fromEntries(formData);
    const errors = {};

    if (!values.email) {
      errors.email = "אימייל הוא שדה חובה";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "כתובת האימייל אינה תקינה";
    }

    if (!values.password) {
      errors.password = "סיסמה היא שדה חובה";
    } else if (values.password.length < 6) {
      errors.password = "הסיסמה חייבת להכיל לפחות 6 תווים";
    }

    if (Object.keys(errors).length > 0) {
      return { errors, values };
    }

    const user = login(values);
    if (!user) {
      return { errors: { general: "אימייל או סיסמה שגויים" }, values };
    }

    navigate("/recipes");
    return { errors: {}, values };
  }

  const [state, formAction] = useActionState(submitAction, {
    errors: {},
    values: { email: "chef@recipes.com", password: "" },
  });

  return (
    <form action={formAction}>
      <h1>טופס לא מבוקר</h1>

      <div>
        <label htmlFor="email">אימייל</label>
        <input id="email" name="email" defaultValue={state.values.email} />
        {state.errors.email && <p style={{ color: "red" }}>{state.errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">סיסמה</label>
        <input
          id="password"
          name="password"
          type="password"
          defaultValue={state.values.password}
        />
        {state.errors.password && <p style={{ color: "red" }}>{state.errors.password}</p>}
      </div>

      {state.errors.general && <p style={{ color: "red" }}>{state.errors.general}</p>}

      <button type="submit">התחברי</button>
    </form>
  );
}