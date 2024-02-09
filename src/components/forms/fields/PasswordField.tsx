import { forwardRef } from 'react';
import { BasePasswordField } from './BasePasswordField';
import type { BasePasswordFieldPropsWithoutRef } from './BasePasswordField';

export const PasswordField = forwardRef<HTMLInputElement, BasePasswordFieldPropsWithoutRef>(
  function PasswordField(props, ref) {
    return (
      <>
        <BasePasswordField inputRef={ref} label="Password" {...props} />
      </>
    );
  },
);
