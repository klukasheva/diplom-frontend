import * as React from 'react'
import styles from './ProductStyles.module.sass'


export interface CategoryI{
    id: number,
    title: string,
    onClick:(key: number)=> void,
    current?: number
}

export const CategoryTag = (props: CategoryI) => {
    return(
        <div className={`${styles.category} ${props.current && props.current === props.id && styles.activeCategory}`}  onClick={()=>props.onClick(props.id)}>
            {props.title}
        </div>
    )
}