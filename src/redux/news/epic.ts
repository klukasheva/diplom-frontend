import {RootEpicType} from "../index";
import {NewsActions} from "./actions";
import {filter, mergeMap, map, catchError, of} from "rxjs";
import {isActionOf} from "typesafe-actions";
import {ajax} from "rxjs/ajax";
import {config, url} from "../../apiConfig";
import {ArticlePromoT} from "../../components/pages/news/NewsPromo";

export const getNewsListEpic: RootEpicType = action$ => action$.pipe(
    filter(isActionOf(NewsActions.getList.request)),
    mergeMap(() => ajax.get<ArticlePromoT[]>(url(config.endpoints.news)).pipe(
        map(res => NewsActions.getList.success(res.response)),
        catchError(() => of(NewsActions.getList.failure(null)))
    ))
)

export const getNewsEpic: RootEpicType = action$ => action$.pipe(
    filter(isActionOf(NewsActions.getNews.request)),
    mergeMap(({payload}) => ajax.get<ArticlePromoT>(`${url(config.endpoints.news)}/${payload.id}`).pipe(
        map(res => NewsActions.getNews.success(res.response)),
        catchError(() => of(NewsActions.getNews.failure(null)))
    ))
)
