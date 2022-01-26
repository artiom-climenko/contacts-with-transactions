import { useMemo } from 'react';

export function useTouchableError(form: any, name: string) {
  let touchableError = useMemo(
    () => form.touched[name] && form.errors[name],
    [form.errors, form.touched, name],
  );

  let error = useMemo(() => form.errors[name], [form.errors, name]);

  return {
    error,
    touchableError,
  };
}
