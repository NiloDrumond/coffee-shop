import { Minus, Plus } from 'phosphor-react';

interface CounterProps {
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export function Counter({ quantity, onAdd, onRemove }: CounterProps) {
  return (
    <div className="flex flex-row bg-button rounded-md gap-1 p-2 w-[72px] justify-between text-purple">
      <button onClick={onRemove}>
        <Minus className="text-base" />
      </button>
      <p className="leading-5 text-title font-normal">{quantity}</p>
      <button onClick={onAdd}>
        <Plus className="text-base" />
      </button>
    </div>
  );
}
