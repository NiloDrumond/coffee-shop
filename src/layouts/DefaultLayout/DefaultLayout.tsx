import { Outlet } from "react-router-dom";

import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../assets/Logo.svg';

export function DefaultLayout() {
  return (
    <div className="bg-background max-w-screen h-screen px-40 py-8">
      <div className="flex-row flex justify-between">
        <img src={logo} />
        <div className="flex flex-row gap-2">
          <button className="btn-primary bg-purple-light text-purple-dark"><MapPin className="text-purple text-xl" weight="fill" />Recife, PE</button>
          <button className="btn-primary bg-yellow-light"><ShoppingCart className="text-yellow-dark text-xl" weight="fill" /></button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
