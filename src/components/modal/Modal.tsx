import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled } from '@andromeda-ui/web';

const StyledModalWrapper = styled(DialogPrimitive.Content, '');
const StyledModalOverlay = styled(DialogPrimitive.Overlay, '');
const StyledModalContent = styled('div', '');

/*
  o ModalProps vai receber todas as propriedades que um DialogPrimitive.Root
  tambem pode receber
*/

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean;
};

export const Modal = ({ children, overlay = true, ...props }: ModalProps) => {
  return (
    // DialogPrimitive.Root é o container por dentro do Modal
    <DialogPrimitive.Root {...props}>
      {/* se o overlay for true vai mostrar o StyledModalOverlay */}
      {overlay && <StyledModalOverlay />} {children}
    </DialogPrimitive.Root>
  );
};

/*
  o ModalWrapperProps vai receber todas as propriedades que são relacinadas ao
  DialogPrimitive.DialogContentProps
  e tambem pode receber todas as propriedades que um StyledModalWrapper pode
  receber
*/
export type ModalWrapperProps = 
DialogPrimitive.DialogContentProps & 
React.ComponentProps<typeof StyledModalWrapper> & 
{
  width?: number;
  /* 
    maintainDimentions vai ser um boolean para ver se queremos ao não manter as
    dimensões do modal, se o modal por exemplo tem 700px, nós vamos poder falar
    que queremos manter esse modal com 700px independente do tamanho da tela,
    mesmo que a tela seja menor que 700px, ou se queremos que quando o tamanho da
    tela chegue em 700px ele ocupe 100% da tela
  */
  maintainDimentions?: boolean;
};

export const ModalWrapper = ({ children, ...props }: ModalWrapperProps) => {
  return (
    <StyledModalWrapper {...props}>{children}</StyledModalWrapper>
  );
};

export const ModalTrigger = DialogPrimitive.Trigger;
ModalTrigger.displayName = 'ModalTrigger';

export const ModalContent = StyledModalContent;
ModalContent.displayName = 'ModalContent';