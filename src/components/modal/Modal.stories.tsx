import { Story, Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import React from 'react';

import { Button } from '../button/Button';
import { Modal as ModalComponent,
  ModalContent,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
} from './Modal';

export default {
  // o title diz respeito as camadas dentro do storyBook
  title: 'Overlay/Modal/Modal',
  // qual vai ser o componente que vai ser renderizado
  component: ModalComponent,
  // argTypes diz respeito aos argumentos 
  argTypes: {
    /* 
      open: { control: 'boolean' } estou dizendo que podemos controlar a
      propriedade open do nosso modal e que o tipo de controle que vai ter vai ser
      o boolean
    */
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
    // não tem por que controlar o prop onOpenChange porque ela é uma função e
    // não a necessidade de "testar" ela no storyBook
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  // os args é para definir quais vão ser os valores default dor argTypes no
  // storyBook
  args: {
    open: false,
    overlay: true,
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [, updateArgs] = useArgs();
  
  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>

      <ModalWrapper>
        <ModalContent>
          <span>Hello World</span>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  );
};

export const Modal = Template.bind({});