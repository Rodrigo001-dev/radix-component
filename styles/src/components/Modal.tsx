import { css, keyframes } from '@andromeda-ui/web';

// animação para para o overlay aparecer
const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

// animação para para o overlay desaparecer
const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    // a animação do transform vai fazer com que o modal começar e vai aparecer
    // grande na tela
    transform: 'translate3d(-50%, calc(-50% + 20%), 0) scale(.96)',
  },
  '100%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' }
});

const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
  '100%': { 
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20%), 0) scale(.96)',
  }
});

export const ModalOverlay = css({
  backgroundColor: 'rgba(0,0,0,.9)',
  position: 'fixed',
  inset: 0,
  zIndex: '$overlay',

  '&[data-state=open]': {
    animation: `${overlayShow} 0.2s ease-in`,
  },
  '&[data-state=closed]': {
    animation: `${overlayHide} 0.3s ease-in`,
  },
  length: 0,
});

export const ModalWrapper = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  backfaceVisibility: 'hidden',
  transform: 'translate3d(-50%, -50%, 0)',
  width: '90vw',
  /* 
    quando eu coloco $$ antes quer dizer que é uma variável escopada, ou seja,
    ela só funciona dentro do ModalWrapper
  */
  maxWidth: '$$maxWidth',
  background: '$shape-primary',
  maxHeight: '90vh',
  overflow: 'auto',
  // quando utilizamos somente 1 $ temos uma variável que funciona globalmente
  // na aplicação
  zIndex: '$modal',
  borderRadius: '$sm',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state=open]': {
    animation: `${contentShow} 0.3 ease-out`,
  },
  '&[data-state=closed]': {
    animation: `${contentHide} 0.2 ease-out`,
  },

  boxShadow: `
    0px 1.8px 2.6px rgba(0, 0, 0, 0.038),
    0px 5px 7.1px rgba(0, 0, 0, 0.057),
    0px 12.1px 17.2px rgba(0, 0, 0, 0.077),
    0px 40px 57px rgba(0, 0, 0, 0.12)
  `,
  length: 0,
});

export const ModalContent = css({
  padding: '$8',

  '@mobile': {
    padding: '$5'
  },
  length: 0,
});



