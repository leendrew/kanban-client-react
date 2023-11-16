import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

export const LoginField = forwardRef(function LoginField(props: TextFieldProps, ref) {
  return (
    <>
      <TextField label="Login" variant="outlined" size="small" {...props} inputRef={ref} />
    </>
  );
});
