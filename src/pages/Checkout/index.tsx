import { Bag } from 'phosphor-react';
import { useContext, useMemo } from 'react';
import { DeliveryForm } from '../../components/DeliveryForm';
import { OrderItem } from '../../components/OrderItem';
import { PaymentSelector } from '../../components/PaymentSelector';
import { OrderingContext } from '../../modules/ordering/context';
import { DELIVERY_COST, products } from '../../modules/ordering/data';
import { calculateOrderTotal } from '../../utils/calculateOrderTotal';
import { formatBRL } from '../../utils/formatBRL';

export function Checkout() {
  const { cart } = useContext(OrderingContext);

  const items = useMemo(() => {
    return Object.entries(cart)
      .filter(([, quant]) => quant !== undefined)
      .map(([key, value]) => [parseInt(key), value]) as [number, number][];
  }, [cart]);

  const itemsTotal = useMemo(() => {
    return items
      .map(([index, quantity]) => products[index].price * quantity)
      .reduce((acc, next) => acc + next, 0);
  }, [items]);

  const orderTotal = useMemo(() => {
    return itemsTotal + DELIVERY_COST;
  }, [itemsTotal]);

  return (
    <div className="flex flex-col xl:flex-row gap-10 items-center xl:items-start justify-center">
      <div className="flex-[1.5] max-w-2xl gap-4 flex flex-col">
        <h3 className="text-lg">Complete seu pedido </h3>
        <DeliveryForm />
        <PaymentSelector />
      </div>
      <div className="flex-1 w-full max-w-2xl gap-4 flex flex-col">
        <h3 className="text-lg">Cafés selecionados</h3>
        <div className="bg-card card p-10 flex flex-col items-center">
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-2">
              <Bag className="text-6xl" />
              <h2 className="text-xl text-text">Carrinho vazio</h2>
            </div>
          ) : (
            <>
              {items.map(([productIndex, productQuantity]) => (
                <OrderItem
                  key={productIndex}
                  index={productIndex}
                  quantity={productQuantity}
                />
              ))}
              <div className="w-full flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-sm">Total de itens</p>
                  <p>R$ {formatBRL.format(itemsTotal)}</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-sm">Entrega</p>
                  <p>R$ {formatBRL.format(DELIVERY_COST)}</p>
                </div>
                <div className="flex flex-row items-center justify-between font-bold text-subtitle text-xl">
                  <p>Total</p>
                  <p>R$ {formatBRL.format(orderTotal)}</p>
                </div>
              </div>
              <button className="btn-full bg-yellow w-full text-white uppercase mt-6">
                confirmar pedido
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
