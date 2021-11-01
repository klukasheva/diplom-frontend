import { mergeMap, map , catchError, filter, of } from "rxjs";
import {CategoryActions, ProductActions} from "./actions";
import { ajax } from 'rxjs/ajax';
import {config, url} from "../../apiConfig";
import {RootEpicType,} from "../index";
import {isActionOf} from "typesafe-actions";
import {ProductSlideI} from "../../components/slides/ProductSlide";
import {CategoryI} from "../../components/pages/product/CategoryTag";

export const fetchProductsEpic:RootEpicType = action$ => action$.pipe(
    filter(isActionOf(ProductActions.getList.request)),
    mergeMap(({payload})=> ajax.get<ProductSlideI[]>(url(payload? `${config.endpoints.product}?category=${payload}`: `${config.endpoints.product}`)).pipe(
        map((res) =>  ProductActions.getList.success(res.response) ),
        catchError(()=>of(ProductActions.getList.failure(null)))
    )),
)

export const fetchProductEpic: RootEpicType = action$ => action$.pipe(
    filter(isActionOf(ProductActions.getProduct.request)),
    mergeMap(({payload})=> ajax.get<ProductSlideI>(url(`${config.endpoints.product}/${payload.id}`)).pipe(
        map(res=> ProductActions.getProduct.success(res.response)),
        catchError(()=>of(ProductActions.getProduct.failure(null)))
    ) )
)

export const fetchCategoryList : RootEpicType = action$ => action$.pipe(
    filter(isActionOf(CategoryActions.request)),
    mergeMap(()=>ajax.get<CategoryI[]>(url(`${config.endpoints.category}`)).pipe(
        map(res=> CategoryActions.success(res.response)),
        catchError(()=>of(CategoryActions.failure(null)))
    )
)
)