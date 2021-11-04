import * as React from 'react'
import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NewsActions} from "../../../redux/news/actions";
import {RootState} from "../../../redux";
import {url} from "../../../apiConfig";
import styles from './NewsPageStyles.module.sass'

export const NewsPage = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const news = useSelector((state: RootState) => state.NewsReducer.news)
    useEffect(()=>{
        dispatch(NewsActions.getNews.request({id: +id}))
    },[dispatch, id]);

    return(
        <div className={styles.pageWrapper}>
            <div className={styles.page}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>
                        {news.title}
                    </div>
                    <div className={styles.creationDate}>
                        {news.creationDate}
                    </div>
                </div>
                <img src={url((`files/${news.image}`))}/>
                <div className={styles.content}>
                    {news.content}
                </div>
                <div className={styles.author}>
                    &copy; {news.author}
                </div>
            </div>
        </div>
    )
}