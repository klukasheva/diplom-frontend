import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './ArticlePromoStyles.module.sass'
import {Tag} from "../../types";
import {url} from "../../apiConfig";

export interface ArticlePromoT {
    id: number,
    creationDate: string,
    title: string,
    author: string,
    content: string,
    image: string,
    tags?: Tag[]
}

export const ArticlePromo: FunctionComponent<ArticlePromoT> = (props) => {

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
                    {props.content}
                </div>
                {!!props.tags &&
                <div className={styles.tags}>
                    {props.tags.map(tag =>
                        <div className={styles.tag} key={tag.id}>#{tag.name}</div>
                    )}
                </div>
                }
            </div>
        </article>
    )
}