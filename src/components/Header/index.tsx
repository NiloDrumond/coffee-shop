import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../assets/Logo.svg';

export function Header() {
  return (
    <div className="flex-row flex justify-between">
      <img src={logo} />
      <div className="flex flex-row gap-2">
        <button className="btn-primary bg-purple-light text-purple-dark">
          <MapPin className="text-purple " weight="fill" />
          Recife, PE
        </button>
        <button className="btn-primary bg-yellow-light">
          <ShoppingCart className="text-yellow-dark" weight="fill" />
        </button>
      </div>
    </div>
  );
}
