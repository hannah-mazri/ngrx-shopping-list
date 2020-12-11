import {
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
  AddItemAction,
  ShoppingItemTypes,
  AddItemSuccessAction,
  AddItemFailureAction,
  DeleteItemAction,
  DeleteItemFailureAction,
  DeleteItemSuccessAction,
} from './../actions/shopping.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShoppingService } from 'src/app/shopping.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ShoppingEffects {
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}

  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadShoppingAction>(ShoppingItemTypes.LOAD_SHOPPING),
    mergeMap(() =>
      this.shoppingService.getShoppingItems().pipe(
        map((data) => {
          return new LoadShoppingSuccessAction(data);
        }),
        catchError((error) => of(new LoadShoppingFailureAction(error)))
      )
    )
  );

  @Effect() addShoppingItem$ = this.actions$.pipe(
    ofType<AddItemAction>(ShoppingItemTypes.ADD_ITEM),
    mergeMap((data) =>
      this.shoppingService.addShoppingItem(data.payload).pipe(
        map(() => new AddItemSuccessAction(data.payload)),
        catchError((error) => of(new AddItemFailureAction(error)))
      )
    )
  );

  @Effect() deleteShoppingItem$ = this.actions$.pipe(
    ofType<DeleteItemAction>(ShoppingItemTypes.DELETE_ITEM),
    mergeMap((data) =>
      this.shoppingService.deleteShoppingItem(data.payload).pipe(
        map(() => new DeleteItemSuccessAction(data.payload)),
        catchError((error) => of(new DeleteItemFailureAction(error)))
      )
    )
  );
}
