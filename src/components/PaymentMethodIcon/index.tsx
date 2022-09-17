import { Bank, IconProps, CreditCard, Money } from 'phosphor-react';
import { PaymentMethod } from '../../modules/ordering/types';

interface PaymentMethodIconProps {
  method: PaymentMethod;
  iconProps?: IconProps;
}

export function PaymentMethodIcon({
  method,
  iconProps,
}: PaymentMethodIconProps) {
  switch (method) {
    case 'cartão de crédito':
      return <CreditCard {...iconProps} />;
    case 'cartão de débito':
      return <Bank {...iconProps} />;
    case 'dinheiro':
      return <Money {...iconProps} />;
    default:
      return <></>;
  }
}
