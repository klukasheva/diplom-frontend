import * as React from 'react'
import {FunctionComponent} from "react";
import {mdiCartMinus} from "@mdi/js";
import Icon from '@mdi/react';
import styles from './BasketStyles.module.sass'


export interface MobilePanelI{
    ordersLength: number
    setShowBasket: (value: boolean) => void
}
export const BasketPanelMobile: FunctionComponent<MobilePanelI> = (props) => {
    return(
        <div className={styles.mobile}>
            <div className={styles.mobileWrapper} onClick={()=>props.setShowBasket(true)}>
                {!!props.ordersLength &&
                <span className={styles.orderAmount}>
                {props.ordersLength}
                 </span>
                }
                <Icon path={mdiCartMinus}
                      title="Корзина"
                      size={1.2}
                      horizontal
                />
            </div>
        </div>
    )
}