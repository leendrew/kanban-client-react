import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

export type BaseFieldProps = Omit<TextFieldProps, 'variant' | 'size'>;

export type ExtractRef<T> = Omit<T, 'label' | 'inputRef'>;

export type BaseFieldPropsWithoutRef = ExtractRef<BaseFieldProps>;

export function BaseField({ ...props }: BaseFieldProps) {
  return (
    <>
      <TextField variant="outlined" size="small" {...props} />
    </>
  );
}
