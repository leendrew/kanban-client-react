import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

export const NameField = forwardRef(function NameField(props: TextFieldProps, ref) {
  return (
    <>
      <TextField label="Name" variant="outlined" size="small" {...props} inputRef={ref} />
    </>
  );
});
