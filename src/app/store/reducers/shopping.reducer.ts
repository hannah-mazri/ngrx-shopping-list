import {
  ShoppingAction,
  ShoppingItemTypes,
} from './../actions/shopping.actions';
import { ShoppingItem } from './../models/shopping-item.model';

export interface ShoppingState {
  list: ShoppingItem[];
  loading: boolean;
  error: Error;
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined,
};

/*
whenever we call the ADD_ITEM action,
the reducer takes the previous state and appends the action.payload
(i.e. the new Shopping item) to the end of the list
*/

export function ShoppingReducer(
  state: ShoppingState = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingItemTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true,
      };
    case ShoppingItemTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ShoppingItemTypes.LOAD_SHOPPING_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ShoppingItemTypes.ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ShoppingItemTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ShoppingItemTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ShoppingItemTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ShoppingItemTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case ShoppingItemTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
