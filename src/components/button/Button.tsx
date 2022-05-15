import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { styled } from '@andromeda-ui/web';
import { Button as ButtonCSS } from '@andromeda-ui/styles';

const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  size?: number;
  variant?: boolean;
  loading?: boolean;
};

export const Button = ({children, ...props }: ButtonProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledButton>{children}</StyledButton>
    </DialogPrimitive.Root>
  );
};