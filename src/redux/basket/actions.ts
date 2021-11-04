import {ActionType, createAction, createAsyncAction} from "typesafe-actions";
import {ProductSlideI} from "../../components/slides/ProductSlide";
import {BasketProduct} from "../../types";


export const BasketActions = {
    pushBasketAction :  createAction(
        'basket/ADD_BASKET_ITEM'
    )<ProductSlideI>(),
    removeFromBasketAction: createAction(
        'basket/REMOVE_FROM_BASKET_ITEM'
    )<number>(),
    clearBasket: createAction(
        'basket/CLEAR_BASKET_ACTION'
    )<undefined>(),
    submitBasketAction : createAsyncAction(
        'basket/SUBMIT_BASKET_REQUEST',
        'basket/SUBMIT_BASKET_SUCCESS',
        'basket/SUBMIT_BASKET_FAILURE'
    )<BasketProduct, {status: 200}, {status: 400}>()
}

export type BasketActionsType = ActionType<typeof BasketActions>;




