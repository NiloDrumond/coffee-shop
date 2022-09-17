import { createContext, ReactNode, useReducer } from 'react';
import { orderingReducer } from './reducer';
import {
  addProductAction,
  removeProductAction,
  setDeliveryInfoAction,
  setProductAction,
} from './reducer/actions';
import { Cart, DeliveryInfo, PaymentMethod } from './types';

interface OrderingContextData {
  cart: Cart;
  deliveryInfo?: DeliveryInfo;
  paymentMethod?: PaymentMethod;
  addProduct: (index: number, quantity: number) => void;
  setProduct: (index: number, quantity: number) => void;
  removeProduct: (index: number) => void;
  setDeliveryInfo: (deliveryInfo: DeliveryInfo) => void;
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

  function addProduct(index: number, quantity: number) {
    dispatch(addProductAction(index, quantity));
  }

  function removeProduct(index: number) {
    dispatch(removeProductAction(index));
  }

  function setDeliveryInfo(deliveryInfo: DeliveryInfo) {
    dispatch(setDeliveryInfoAction(deliveryInfo));
  }

  function setProduct(index: number, quantity: number) {
    dispatch(setProductAction(index, quantity));
  }

  return (
    <OrderingContext.Provider
      value={{
        ...state,
        addProduct,
        removeProduct,
        setDeliveryInfo,
        setProduct,
      }}
    >
      {children}
    </OrderingContext.Provider>
  );
}
