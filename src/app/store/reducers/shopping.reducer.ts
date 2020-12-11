import {
  ShoppingAction,
  ShoppingItemTypes,
} from './../actions/shopping.actions';
import { ShoppingItem } from './../models/shopping-item.model';

const initialState: ShoppingItem[] = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Diet Coke',
  },
];

/*
whenever we call the ADD_ITEM action,
the reducer takes the previous state and appends the action.payload
(i.e. the new Shopping item) to the end of the list
*/

export function ShoppingReducer(
  state: ShoppingItem[] = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingItemTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingItemTypes.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
