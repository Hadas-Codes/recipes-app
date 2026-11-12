import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'אימייל הוא שדה חובה',
      'string.email': 'כתובת האימייל אינה תקינה',
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.empty': 'סיסמה היא שדה חובה',
      'string.min': 'הסיסמה חייבת להכיל לפחות 6 תווים',
    }),
});