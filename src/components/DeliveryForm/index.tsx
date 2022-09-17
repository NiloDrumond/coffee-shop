import { MapPinLine } from 'phosphor-react';

export function DeliveryForm() {
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
        <input placeholder="CEP" />
        <div className="col-span-2" />
        <input placeholder="Rua" className="col-span-3" />
        <input placeholder="Número" />
        <input placeholder="Complemento" className="col-span-2" />
        <input placeholder="Bairro" />
        <input placeholder="Cidade" />
        <input placeholder="UF" />
      </div>
    </div>
  );
}
