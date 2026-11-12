import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { loginSchema } from '../utils/schema';
import { login } from '../services/auth';

export default function LoginRhf() {
  const navigate = useNavigate();
  const [generalError, setGeneralError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: joiResolver(loginSchema),
    defaultValues: {
      email: 'chef@recipes.com',
      password: '',
    },
    mode: 'onTouched', 
  });

  const onSubmit = (data) => {
    const foundUser = login({ email: data.email, password: data.password });

    if (foundUser) {
      setGeneralError('');
      navigate('/recipes'); 
    } else {
      setGeneralError('אימייל או סיסמה שגויים');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>טופס התחברות - React Hook Form + Joi</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        <div>
          <label>אימייל:</label>
          <input
            type="email"
            {...register('email')}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '14px', margin: '4px 0 0' }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label>סיסמה:</label>
          <input
            type="password"
            {...register('password')}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '14px', margin: '4px 0 0' }}>
              {errors.password.message}
            </p>
          )}
        </div>
        {generalError && (
          <p style={{ color: 'red', margin: 0, fontWeight: 'bold' }}>{generalError}</p>
        )}

        <button
          type="submit"
          style={{ padding: '10px', background: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          התחבר
        </button>
      </form>
    </div>
  );
}