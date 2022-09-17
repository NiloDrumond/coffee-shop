import { OrderingAction, OrderingActions } from './actions';
import { produce } from 'immer';
import { Cart, DeliveryInfo, PaymentMethod } from '../types';

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
      return produce(state, (draft) => {
        draft.cart[action.payload.index] = action.payload.quantity;
      });
    }
    case OrderingActions.REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        draft.cart[action.payload.index] = undefined;
      });
    }
    case OrderingActions.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.cart = {};
      });
    }
    case OrderingActions.SET_DELIVERY_INFO: {
      return produce(state, (draft) => {
        draft.deliveryInfo = action.payload.deliveryInfo;
      });
    }
    case OrderingActions.SET_PAYMENT_METHOD: {
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.paymentMethod;
      });
    }
    default:
      return state;
  }
}
