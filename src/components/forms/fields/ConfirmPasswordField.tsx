import { forwardRef } from 'react';
import { BasePasswordField } from './BasePasswordField';
import type { BasePasswordFieldPropsWithoutRef } from './BasePasswordField';

export const ConfirmPasswordField = forwardRef<HTMLInputElement, BasePasswordFieldPropsWithoutRef>(
  function ConfirmPasswordField(props, ref) {
    return (
      <>
        <BasePasswordField inputRef={ref} label="Confirm Password" {...props} />
      </>
    );
  },
);
