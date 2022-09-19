import { MapPinLine } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { DeliveryInfo } from '../../modules/ordering/types';

export function DeliveryForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<DeliveryInfo>();

  return (
    <div className="rounded-md bg-card p-10 gap-8 flex flex-col">
      <div className="flex flex-row gap-2">
        <MapPinLine className="mt-1 text-yellow-dark text-xl" />
        <div>
          <p className="text-subtitle">Endereço de entrega</p>
          <p className="text-sm">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-[minmax(180px,_3fr)_minmax(250px,_4fr)_minmax(60px,_1fr)]">
        <input
          placeholder="CEP"
          {...register('postalCode')}
          className={`${errors.postalCode ? 'error' : ' '}`}
        />
        <div className="col-span-2" />
        <input
          placeholder="Rua"
          className={`${errors.street ? 'error' : ''} col-span-3 `}
          {...register('street')}
        />
        <input
          placeholder="Número"
          {...register('number')}
          className={`${errors.number ? 'error' : ''}`}
        />
        <input
          placeholder="Complemento"
          className={`${errors.complement ? 'error' : ''} col-span-2 `}
          {...register('complement')}
        />
        <input
          placeholder="Bairro"
          {...register('neighborhood')}
          className={`${errors.neighborhood ? 'error' : ' '}`}
        />
        <input
          aria-invalid="true"
          placeholder="Cidade"
          {...register('city')}
          className={`${errors.city ? 'error' : ' '}`}
        />
        <input
          className={`${errors.state ? 'error' : ' '}`}
          aria-invalid={!!errors.state}
          placeholder="UF"
          {...register('state')}
        />
      </div>
    </div>
  );
}
