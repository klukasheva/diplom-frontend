import {createReducer} from "typesafe-actions";
import {BasketActions, BasketActionsType} from "./actions";
import {ProductSlideI} from "../../components/slides/ProductSlide";

export const BasketReducer = createReducer<ProductSlideI[], BasketActionsType>([])
.handleAction(BasketActions.pushBasketAction,(state,action)=> [...state,action.payload])
.handleAction(BasketActions.removeFromBasketAction,(state,action)=> state.filter((item,index)=>index !== action.payload))