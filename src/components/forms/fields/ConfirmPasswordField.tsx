import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

export const ConfirmPasswordField = forwardRef(function ConfirmPasswordField(
  props: TextFieldProps,
  ref,
) {
  return (
    <>
      <TextField
        label="Confirm Password"
        variant="outlined"
        size="small"
        {...props}
        inputRef={ref}
      />
    </>
  );
});
