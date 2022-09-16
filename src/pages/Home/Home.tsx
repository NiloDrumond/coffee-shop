import coffeeImg from '../../assets/Imagem.svg';
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'

export function Home() {
  return (
    <div className="w-full flex flex-row my-20 gap-14 relative">
      <div className="absolute w-screen bg-hero-pattern  bg-no-repeat bg-cover bg-center blur-3xl h-full -left-40" />
      <div className="flex-1 flex flex-col">
        <h1 className="text-5xl">Encontre o café perfeito para qualquer hora do dia</h1>
        <p className="mt-4 text-xl mb-14 text-subtitle">Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-row gap-3 items-center">
            <div className="w-8 h-8 p-2 bg-yellow-dark text-background rounded-full"><ShoppingCart weight="fill" /></div>
            <p>Compra simples e segura</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="w-8 h-8 p-2 bg-text text-background rounded-full"><Package weight="fill" /></div>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="w-8 h-8 p-2 bg-yellow text-background rounded-full"><Timer weight="fill" /></div>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="w-8 h-8 p-2 bg-purple text-background rounded-full"><Coffee weight="fill" /></div>
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </div>
      <img src={coffeeImg} />
    </div >
  );
}