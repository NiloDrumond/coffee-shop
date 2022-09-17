import { DeliveryInfo, PaymentMethod } from '../types';

export enum OrderingActions {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  SET_DELIVERY_INFO,
  SET_PAYMENT_METHOD,
}

export function addProductAction(index: number, quantity: number) {
  return {
    type: OrderingActions.ADD_PRODUCT as const,
    payload: { index, quantity },
  };
}

export function removeProductAction(index: number) {
  return {
    type: OrderingActions.REMOVE_PRODUCT as const,
    payload: { index },
  };
}

export function clearCartAction() {
  return { type: OrderingActions.CLEAR_CART as const };
}

export function setDeliveryInfoAction(deliveryInfo: DeliveryInfo) {
  return {
    type: OrderingActions.SET_DELIVERY_INFO as const,
    payload: { deliveryInfo },
  };
}

export function setPaymentMethodAction(paymentMethod: PaymentMethod) {
  return {
    type: OrderingActions.SET_PAYMENT_METHOD as const,
    payload: { paymentMethod },
  };
}

export type OrderingAction = ReturnType<
  | typeof addProductAction
  | typeof removeProductAction
  | typeof clearCartAction
  | typeof setDeliveryInfoAction
  | typeof setPaymentMethodAction
>;
