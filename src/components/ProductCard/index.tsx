import { ShoppingCart } from 'phosphor-react';
import { useCallback, useContext, useState } from 'react';
import { OrderingContext } from '../../modules/ordering/context';
import { Product } from '../../modules/ordering/types';
import { Counter } from '../Counter';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { cart, addProduct } = useContext(OrderingContext);
  const [quantity, setQuantity] = useState(cart[index] ?? 0);

  const onIncrease = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  }, []);

  const onAdd = useCallback(() => {
    addProduct(index, quantity);
  }, [addProduct, index, quantity]);

  return (
    <div className="rounded-tl-md rounded-tr-3xl rounded-br-md flex flex-col items-center rounded-bl-3xl bg-card w-64 h-80 px-5 pb-5 gap-2">
      <img src={product.imgUrl} className="-translate-y-5 scale-[1.2]" />
      <div className="flex flex-row gap-1">
        {product.tags.length > 0 ? (
          product.tags.map((tag) => (
            <div key={tag} className="tag bg-yellow-light text-yellow-dark">
              {tag}
            </div>
          ))
        ) : (
          <div className="tag select-none opacity-0">placeholder</div>
        )}
      </div>
      <h3 className="text-xl">{product.name}</h3>
      <p className="text-label text-sm text-center">{product.description}</p>
      <div className="flex-1" />
      <div className="flex w-full flex-row justify-between items-center font-bold">
        <h1 className="text-xs font-normal font-sans text-text">
          R${' '}
          <span className="text-2xl font-title">
            {Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(product.price)}
          </span>
        </h1>
        <div className="flex gap-2 flex-row items-center">
          <Counter
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
          <button
            onClick={onAdd}
            className="btn-primary bg-purple-dark text-card"
          >
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
