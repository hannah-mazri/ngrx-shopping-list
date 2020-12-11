import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';
export enum ShoppingItemTypes {
  ADD_ITEM = '[Shopping] Add Item',
  DELETE_ITEM = '[Shopping] Delete Item',
}

export class AddItemAction implements Action {
  readonly type = ShoppingItemTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingItemTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}

export type ShoppingAction = AddItemAction | DeleteItemAction;
