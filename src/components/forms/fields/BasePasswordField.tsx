import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { BaseField } from './BaseField';
import type { BaseFieldProps, ExtractRef } from './BaseField';

type BasePasswordFieldProps = Omit<BaseFieldProps, 'type'>;

export type BasePasswordFieldPropsWithoutRef = ExtractRef<BasePasswordFieldProps>;

export function BasePasswordField({ inputProps, ...props }: BasePasswordFieldProps) {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(true);

  const togglePasswordShowing = () => setIsPasswordShowing((prev) => !prev);

  const onPasswordClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    togglePasswordShowing();
  };

  const onPasswordMouseDownHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  const inputType: 'text' | 'password' = isPasswordShowing ? 'text' : 'password';

  const passwordIcon = isPasswordShowing ? <VisibilityOffIcon /> : <VisibilityIcon />;

  return (
    <>
      <BaseField
        // @ts-expect-error mui
        InputProps={{
          ...inputProps,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                size="small"
                edge="end"
                aria-label="toggle password visibility"
                onClick={onPasswordClickHandler}
                onMouseDown={onPasswordMouseDownHandler}
              >
                {passwordIcon}
              </IconButton>
            </InputAdornment>
          ),
        }}
        type={inputType}
        variant="outlined"
        size="small"
        {...props}
      />
    </>
  );
}
