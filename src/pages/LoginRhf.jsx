import { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router";
import { schema } from "../utils/schema";
import { login } from "../services/auth";
import TextField from "../components/TextField";

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

      <TextField
        label="אימייל"
        error={errors.email?.message}
        {...register("email")}
      />

      <TextField
         label="סיסמה"
         type="password"
         error={errors.password?.message}
        {...register("password")}
      />

      {generalError && <p style={{ color: "red" }}>{generalError}</p>}

      <button type="submit">התחברי</button>
    </form>
  );
}