import {createReducer} from "typesafe-actions";
import {ProductSlideI} from "../../components/slides/ProductSlide";
import {CategoryActions, CategoryActionsType, CategoryType, ProductActions, ProductActionsType} from "./actions";
import {combineReducers} from "redux";

export const ProductReducer = combineReducers({
    productList:createReducer<ProductSlideI[], ProductActionsType>([])
        .handleAction(ProductActions.getList.success, (state ,action) => action.payload),
    product: createReducer<ProductSlideI, ProductActionsType>({cost: 0, id: 0, image: "", stockCost: 0, title: "", description:"", category:{id: 0, title:''}})
        .handleAction(ProductActions.getProduct.success, (state,action)=> action.payload)
})

export const CategoryReducer = createReducer<CategoryType[], CategoryActionsType>([])
.handleAction(CategoryActions.success,(state,action)=>action.payload)