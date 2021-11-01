import {ActionType, createAsyncAction} from "typesafe-actions";
import {ProductSlideI} from "../../components/slides/ProductSlide";


export type CategoryType = {
    id: number,
    title: string
}
export const ProductActions = {
    getList: createAsyncAction(
        'product/GET_LIST_REQUEST',
        'product/GET_LIST_SUCCESS',
        'product/GET_LIST_FAILURE',
    )<number| undefined, ProductSlideI[], null>(),
    getProduct: createAsyncAction(
        'product/GET_PRODUCT_REQUEST',
        'product/GET_PRODUCT_SUCCESS',
        'product/GET_PRODUCT_FAILURE',
    )<{id: number}, ProductSlideI, null> ()
}

export const CategoryActions = createAsyncAction(
    'category/GET_CATEGORY_LIST_REQUEST',
    'category/GET_CATEGORY_LIST_SUCCESS',
    'category/GET_CATEGORY_LIST_FAILURE'
)<undefined,CategoryType[], null>()


export type CategoryActionsType = ActionType<typeof CategoryActions>
export type ProductActionsType = ActionType<typeof ProductActions>