import { OrderingAction, OrderingActions } from './actions';
import { produce } from 'immer';
import { Cart, DeliveryInfo, PaymentMethod } from '../../types/ordering';

export type OrderingState = {
  cart: Cart;
  deliveryInfo?: DeliveryInfo;
  paymentMethod?: PaymentMethod;
};

export function orderingReducer(
  state: OrderingState,
  action: OrderingAction,
): OrderingState {
  switch (action.type) {
    case OrderingActions.ADD_PRODUCT: {
      const prevQuantity = state.cart[action.payload.index];
      return produce(state, (draft) => {
        draft.cart[action.payload.index] =
          prevQuantity !== undefined ? prevQuantity + 1 : 1;
      });
    }
    case OrderingActions.REMOVE_PRODUCT: {
      const prevQuantity = state.cart[action.payload.index];
      if (prevQuantity) {
        return produce(state, (draft) => {
          draft.cart[action.payload.index] =
            prevQuantity === 1 ? undefined : prevQuantity - 1;
        });
      }
      return state;
    }
    default:
      return state;
  }
}
