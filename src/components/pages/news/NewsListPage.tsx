import * as React from 'react'
import {FunctionComponent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {NewsPromo} from "./NewsPromo";
import styles from './NewsPageStyles.module.sass'
import {NewsActions} from "../../../redux/news/actions";

export const NewsListPage: FunctionComponent = () => {
    const list = useSelector((state: RootState) => state.NewsReducer.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(NewsActions.getList.request())
    }, [dispatch]);

    return (
        <div className={styles.newsWrapper}>
            <div className={styles.news}>
                <div>
                    {list.map(item =>
                        <NewsPromo {...item} key={item.id}/>
                    )}
                </div>
            </div>
        </div>
    )
}