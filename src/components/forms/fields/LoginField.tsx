import { forwardRef } from 'react';
import { BaseField } from './BaseField';
import type { BaseFieldPropsWithoutRef } from './BaseField';

export const LoginField = forwardRef<HTMLInputElement, BaseFieldPropsWithoutRef>(
  function LoginField(props, ref) {
    return (
      <>
        <BaseField label="Login" {...props} inputRef={ref} />
      </>
    );
  },
);
