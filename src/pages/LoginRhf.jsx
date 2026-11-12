import { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router";
import { schema } from "../utils/schema";
import { login } from "../services/auth";

export default function LoginRhf() {
  const navigate = useNavigate();
  const [generalError, setGeneralError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    mode: "onTouched",
    defaultValues: { email: "chef@recipes.com", password: "" },
  });

  function onSubmit(data) {
    const user = login(data);
    if (!user) {
      setGeneralError("אימייל או סיסמה שגויים");
      return;
    }
    navigate("/recipes");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>טופס עם react-hook-form</h1>

      <div>
        <label htmlFor="email">אימייל</label>
        <input id="email" {...register("email")} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">סיסמה</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>

      {generalError && <p style={{ color: "red" }}>{generalError}</p>}

      <button type="submit">התחברי</button>
    </form>
  );
}