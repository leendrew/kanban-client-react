import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

export const PasswordField = forwardRef(function PasswordField(props: TextFieldProps, ref) {
  return (
    <>
      <TextField label="Password" variant="outlined" size="small" {...props} inputRef={ref} />
    </>
  );
});
