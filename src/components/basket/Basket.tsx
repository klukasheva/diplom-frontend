import * as React from 'react'
import {ProductSlideI} from "../slides/ProductSlide";
import styles from './BasketStyles.module.sass'
import Icon from "@mdi/react";
import {mdiClose} from "@mdi/js";
import {Button, ButtonColor, ButtonSize} from "../button/Button";
import {useDispatch} from "react-redux";
import {BasketActions} from "../../redux/basket/actions";
import {url} from "../../apiConfig";
import {useHistory} from "react-router";
import {routes} from "../../routes";


export interface BasketI{
    orders: ProductSlideI[],
    setCloseModal: (value: boolean) => void
}
export const Basket = (props: BasketI) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const reducer = (previousValue:number,currentValue:ProductSlideI)=> previousValue + currentValue.stockCost;
    const total = props.orders.reduce(reducer,0)
    return(
        <div className={styles.basketWrapper}>
            <div className={styles.basket}>
                <div className={styles.header}>
                    <div>
                        Подтвердите заказ
                    </div>
                    <div onClick={()=> props.setCloseModal(false)}>
                        <Icon path={mdiClose} size={1}/>
                    </div>
                </div>
                <div className={`${styles.content} ${!props.orders.length && styles.noContent}`}>
                    <div className={styles.productList}>
                        {props.orders.map((order,index)=>
                            <div key={index} className={styles.order}>
                                <img src={url((`files/${order.image}`))}/>
                                <div className={styles.title}>
                                    {order.title}
                                </div>
                                <div className={styles.costBlock}>
                                    <div className={styles.cost}>
                                        {order.cost}р
                                    </div>
                                    <div className={styles.stockCost}>
                                        {order.stockCost}р
                                    </div>
                                </div>
                                <Button onClick={()=> dispatch(BasketActions.removeFromBasketAction(index))}
                                        content={'Удалить'}
                                        alignSelf={'center'}
                                        size={ButtonSize.SMALL}
                                        color={ButtonColor.ERROR}/>
                            </div>
                        )}
                    </div>
                    {!props.orders.length &&
                    <div className={styles.noOrders}>
                            У вас нет выбранных товаров
                    </div>
                    }
                    <div>
                        {!!props.orders.length &&
                        <div className={styles.total}>
                            К оплате {total} руб
                        </div>
                        }
                        <div className={styles.buttons} style={{justifyContent: !!props.orders.length ? 'space-between' : 'center'}}>
                            <Button onClick={()=> {
                                props.setCloseModal(false);
                                history.push(routes.products)}
                            }
                                    content={'Все товары'}
                                    size={ButtonSize.SMALL}
                                    color={ButtonColor.GOLD}
                            />
                            {!!props.orders.length &&
                            <Button onClick={()=> {
                                props.setCloseModal(false);
                                history.push(routes.order);
                            }}
                                    content={'Оформить заказ'}
                                    size={ButtonSize.SMALL}
                                    color={ButtonColor.BLUE}
                            />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}