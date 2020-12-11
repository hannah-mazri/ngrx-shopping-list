import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingItemTypes {
  LOAD_SHOPPING = '[Shopping] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[Shopping] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[Shopping] Load Shopping Failure',

  ADD_ITEM = '[Shopping] Add Item',
  ADD_ITEM_SUCCESS = '[Shopping] Add Item Success',
  ADD_ITEM_FAILURE = '[Shopping] Add Item Failure',

  DELETE_ITEM = '[Shopping] Delete Item',
  DELETE_ITEM_SUCCESS = '[Shopping] Delete Item Success',
  DELETE_ITEM_FAILURE = '[Shopping] Delete Item Failure',
}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingItemTypes.LOAD_SHOPPING;
}
export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingItemTypes.LOAD_SHOPPING_SUCCESS;

  constructor(public payload: ShoppingItem[]) {}
}
export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingItemTypes.LOAD_SHOPPING_FAILURE;

  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ShoppingItemTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}
export class AddItemSuccessAction implements Action {
  readonly type = ShoppingItemTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) {}
}
export class AddItemFailureAction implements Action {
  readonly type = ShoppingItemTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingItemTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}
export class DeleteItemSuccessAction implements Action {
  readonly type = ShoppingItemTypes.DELETE_ITEM_SUCCESS;

  constructor(public payload: string) {}
}
export class DeleteItemFailureAction implements Action {
  readonly type = ShoppingItemTypes.DELETE_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export type ShoppingAction =
  | LoadShoppingAction
  | LoadShoppingSuccessAction
  | LoadShoppingFailureAction
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailureAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | DeleteItemFailureAction;
