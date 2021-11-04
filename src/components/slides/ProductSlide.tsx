import * as React from 'react'
import styles from "./ProductSlideStyles.module.sass";
import Icon from "@mdi/react";
import {mdiFire} from "@mdi/js";
import {Button, ButtonColor, ButtonSize} from "../button/Button";
import {useDispatch} from "react-redux";
import {BasketActions} from "../../redux/basket/actions";
import {url} from "../../apiConfig";
import {useHistory} from "react-router";
import {routes} from "../../routes";
import {AdditionalImage} from "../../types";
import {CategoryType} from "../../redux/product/actions";

export interface ProductSlideI {
    id: number,
    image: string
    title: string,
    cost: number,
    stockCost: number,
    description: string,
    additionalImages?: AdditionalImage[],
    category: CategoryType,
    count?: number
}

export function ProductSlide(props: ProductSlideI) {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div className={styles.stockItem} style={{width: '100%'}}>
            <div className={styles.stockWrap}>
                <img src={url(`files/${props.image}`)}/>
                <div className={styles.stockDescription}>
                    <div className={styles.stockDescription_title}>
                        {props.title}
                    </div>
                    <div className={styles.oldCost}>
                        {props.cost}р
                    </div>
                    <div className={styles.stockCost}>
                        {props.stockCost}
                    </div>
                    <div className={styles.stockHot}>
                        <Icon path={mdiFire} className={styles.stockIcon} size={1}/>
                        <div>
                            Скидка {props.cost - props.stockCost}р !
                        </div>
                    </div>
                    <div className={styles.stockActions}>
                        <Button onClick={() => dispatch(BasketActions.pushBasketAction({
                            category: props.category,
                            cost: props.cost,
                            description: props.description,
                            id: props.id,
                            image: props.image,
                            stockCost: props.stockCost,
                            title: props.title
                        }))}
                                content={'В корзину'}
                                size={ButtonSize.SMALL}
                                color={ButtonColor.GREEN}/>
                        <Button onClick={() => history.push(`${routes.products}/${props.id}`)}
                                content={'Перейти'}
                                size={ButtonSize.SMALL}
                                color={ButtonColor.BLUE}/>
                    </div>
                </div>
            </div>
        </div>
    )
}