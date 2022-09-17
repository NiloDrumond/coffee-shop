import { createContext, ReactNode, useReducer } from 'react';
import { orderingReducer } from './reducer';
import { addProductAction, removeProductAction } from './reducer/actions';
import { Cart, DeliveryInfo, PaymentMethod } from './types';

interface OrderingContextData {
  cart: Cart;
  deliveryInfo?: DeliveryInfo;
  paymentMethod?: PaymentMethod;
  addProduct: (index: number) => void;
  removeProduct: (index: number) => void;
}

export const OrderingContext = createContext<OrderingContextData>(
  {} as OrderingContextData,
);

interface OrderingContextProviderProps {
  children: ReactNode;
}

export function OrderingContextProvider({
  children,
}: OrderingContextProviderProps) {
  const [state, dispatch] = useReducer(orderingReducer, { cart: {} });

  function addProduct(index: number) {
    dispatch(addProductAction(index));
  }

  function removeProduct(index: number) {
    dispatch(removeProductAction(index));
  }

  return (
    <OrderingContext.Provider value={{ ...state, addProduct, removeProduct }}>
      {children}
    </OrderingContext.Provider>
  );
}
