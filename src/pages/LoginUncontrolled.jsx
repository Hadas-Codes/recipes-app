
import { useActionState } from "react";
import { useNavigate } from "react-router";
import { login } from "../services/auth";
import TextField from "../components/TextField";

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

        <TextField
        label="אימייל"
        name="email"
        defaultValue={state.values.email}
        error={state.errors.email}
      />

      <TextField
        label="סיסמה"
        name="password"
        type="password"
        defaultValue={state.values.password}
        error={state.errors.password}
      />

      {state.errors.general && <p style={{ color: "red" }}>{state.errors.general}</p>}

      <button type="submit">התחברי</button>
    </form>
  );
}