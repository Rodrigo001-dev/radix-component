import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { styled } from '@andromeda-ui/web';
import { Text as TextCSS } from '@andromeda-ui/styles';

const StyledText = styled('span', TextCSS);

export type TextProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  size?: string | undefined;
};

export const Text = ({ children, ...props }: TextProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledText>{children}</StyledText>
    </DialogPrimitive.Root>
  );
};