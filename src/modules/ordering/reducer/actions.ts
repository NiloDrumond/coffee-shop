export enum OrderingActions {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_DELIVERY_INFO,
  SET_PAYMENT_METHOD,
}

export function addProductAction(index: number) {
  return {
    type: OrderingActions.ADD_PRODUCT,
    payload: { index },
  };
}

export function removeProductAction(index: number) {
  return {
    type: OrderingActions.REMOVE_PRODUCT,
    payload: { index },
  };
}

export type OrderingAction = ReturnType<
  typeof addProductAction | typeof removeProductAction
>;
