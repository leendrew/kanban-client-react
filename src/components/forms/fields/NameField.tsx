import { forwardRef } from 'react';
import { BaseField } from './BaseField';
import type { BaseFieldPropsWithoutRef } from './BaseField';

export const NameField = forwardRef<HTMLInputElement, BaseFieldPropsWithoutRef>(
  function NameField(props, ref) {
    return (
      <>
        <BaseField
          inputRef={ref}
          label="Name"
          {...props}
        />
      </>
    );
  },
);
