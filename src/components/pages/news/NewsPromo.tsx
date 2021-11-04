import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './NewsPromoStyles.module.sass'
import {url} from "../../../apiConfig";
import * as S from 'fp-ts/string'
import {useHistory} from "react-router";
import {routes} from "../../../routes";

export interface ArticlePromoT {
    id: number,
    creationDate: string,
    title: string,
    author: string,
    content: string,
    image: string,
}

export const NewsPromo: FunctionComponent<ArticlePromoT> = (props) => {
    const history = useHistory();
    return (
        <article className={styles.promo}>
            <img src={url(`files/${props.image}`)}/>
            <div className={styles.right}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.creationDate}>
                    <div>
                        {props.author}
                    </div>
                    <div>
                        {props.creationDate}
                    </div>
                </div>
                <div className={styles.content}>
                    {S.slice(0, 300)(props.content)}...
                </div>
                <div
                    className={styles.readMore}
                    onClick={() => {
                    history.push(`${routes.news}/${props.id}`)
                }}>
                    Читать новость...
                </div>
            </div>
        </article>
    )
}