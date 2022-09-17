import { CurrencyDollar } from 'phosphor-react';
import { paymentMethods } from '../../modules/ordering/types';
import { PaymentMethodIcon } from '../PaymentMethodIcon';

export function PaymentSelector() {
  return (
    <div className="rounded-md bg-card p-10 gap-8 flex flex-col">
      <div className="flex flex-row gap-2">
        <CurrencyDollar className="text-xl mt-1 text-purple" />
        <div>
          <p className="text-subtitle">Pagamento</p>
          <p className="text-sm">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        {paymentMethods.map((paymentMethod) => (
          <button
            className="flex flex-row gap-2 bg-button p-4 h-12 flex-1 rounded-md text-xs uppercase items-center"
            key={paymentMethod}
          >
            <PaymentMethodIcon
              method={paymentMethod}
              iconProps={{ className: 'text-purple' }}
            />
            {paymentMethod}
          </button>
        ))}
      </div>
    </div>
  );
}
