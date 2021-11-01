import {combineEpics, Epic} from "redux-observable";
import {combineReducers} from "redux";
import {BasketReducer} from "./basket/reducers";
import {ActionType, StateType} from "typesafe-actions";
import {CategoryActions, ProductActions} from "./product/actions";
import {BasketActions} from "./basket/actions";
import {fetchCategoryList, fetchProductEpic, fetchProductsEpic} from "./product/epic";
import {CategoryReducer, ProductReducer} from "./product/reducers";
import {ImageModalAction, ImageModalReducer} from "./image";
import {NewsReducer} from "./news/reducers";
import {NewsActions} from "./news/actions";
import {getNewsEpic, getNewsListEpic} from "./news/epic";

export const rootEpic = combineEpics(
    fetchProductsEpic,
    fetchProductEpic,
    fetchCategoryList,
    getNewsListEpic,
    getNewsEpic
);

export const rootReducer = combineReducers({
    BasketReducer,
    ProductReducer,
    ImageModalReducer,
    CategoryReducer,
    NewsReducer
});

export const rootActions = {
    product : ProductActions,
    basket: BasketActions,
    image: ImageModalAction,
    category: CategoryActions,
    news: NewsActions
}

export type RootActionType = ActionType<typeof rootActions>
export type RootState=StateType<typeof rootReducer>
export type RootEpicType = Epic<RootActionType, RootActionType>
