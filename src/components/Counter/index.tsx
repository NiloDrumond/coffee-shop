import { Minus, Plus } from 'phosphor-react';

export function Counter() {
  return (
    <div className="flex flex-row bg-button rounded-md gap-1 p-2 w-[72px] justify-between text-purple">
      <button>
        <Minus className="text-base" />
      </button>
      <p className="leading-5 text-title font-normal">1</p>
      <button>
        <Plus className="text-base" />
      </button>
    </div>
  );
}
