import {
  Button as ButtonCSS,
  ButtonLabel as ButtonLabelCSS,
  ButtonLoading as ButtonLoadingCSS,
} from '@andromeda-ui/styles';
import { styled } from '@andromeda-ui/web';

import React, { forwardRef } from 'react';

const StyledButton = styled('button', ButtonCSS);
const ButtonLabel = styled('span', ButtonLabelCSS);
const ButtonLoading = styled('span', ButtonLoadingCSS);

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  loading?: boolean;
};

export const Button = forwardRef<React.ElementRef<typeof StyledButton>, ButtonProps>(
  (
    {children, leftIcon, rightIcon, loading, disabled, ...props},
    forwardRef) => {
      return (
        <StyledButton
          disabled={disabled}
          loading={loading}
          ref={forwardRef}
          {...props}
        >
          <ButtonLabel>
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
          </ButtonLabel>

          {loading && (
            <ButtonLoading>
            </ButtonLoading>
          )}
        </StyledButton>
      );
    }
)

Button.displayName = 'Button';