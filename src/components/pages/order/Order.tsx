import * as React from "react";
import {FunctionComponent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {useSetState} from "react-use";
import {ProductSlideI} from "../../slides/ProductSlide";
import {Input, Textarea} from "../../input/Input";
import styles from './OrderStyles.module.sass'
import {config, url} from "../../../apiConfig";
import {Button, ButtonColor, ButtonSize} from "../../button/Button";
import {BasketActions} from "../../../redux/basket/actions";
import {uniq} from "fp-ts/Array";
import {fromEquals} from "fp-ts/Eq";
import {useHistory} from "react-router";
import {routes} from "../../../routes";

export type OrderType = {
    products: ProductSlideI[],
    phoneNumber: string,
    address: string,
    customerName: string,
    description: string
    cost: number
}


export const Order: FunctionComponent = () => {
    const orders = useSelector((state: RootState) => state.BasketReducer);
    const reducer = (previousValue: number, currentValue: ProductSlideI) => previousValue + currentValue.stockCost;
    const total = orders.reduce(reducer, 0);
    const dispatch = useDispatch();
    const history = useHistory();
    const uniqBy = fromEquals((a: ProductSlideI, b: ProductSlideI) => a.id === b.id)
    const reduceOrders = orders.reduce((acc, el) => {
        // @ts-ignore
        acc[el.id] = (acc[el.id] || 0) + 1
        return acc
    }, {})
    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        orders.map(ord => {
            // @ts-ignore
            ord.count = reduceOrders[ord.id]
        })
    }, [reduceOrders, orders])
    const [resultMessage, setResultMessage] = useState<{ context: string, message: string } | undefined>()
    const [data, setData] = useSetState<OrderType>({
        products: [],
        phoneNumber: '',
        address: '',
        customerName: '',
        description: '',
        cost: total
    });

    useEffect(() => {
        setData({products: [...uniq(uniqBy)(orders)]})
    }, []);

    const submit = async () => {
        await fetch(url(`${config.endpoints.order}`), {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
                res.status === 201 && setResultMessage({
                    context: 'success',
                    message: 'Ваш заказ успешно оформлен. В ближайшее время с вами свяжется оператор'
                })
                setTimeout(() => {
                    dispatch(BasketActions.clearBasket())
                    history.push(routes.root)
                }, 3000)
            }
        ).catch(() =>
            setResultMessage({context: 'error', message: 'Произошла ошибка при оформлении заказа'})
        )
    }

    return (
        <div className={styles.orderWrapper}>
            <div className={styles.order}>
                <div className={styles.ordersList}>
                    {orders.map((order, index) =>
                        <div key={index} className={styles.listItem}>
                            <img src={url((`files/${order.image}`))}/>
                            <div>
                                <div className={styles.title}>
                                    {order.title}
                                </div>
                                <div className={styles.cost}>
                                    {order.stockCost}р
                                </div>
                            </div>
                            <Button onClick={() => dispatch(BasketActions.removeFromBasketAction(index))}
                                    content={'Удалить'}
                                    alignSelf={'center'}
                                    size={ButtonSize.SMALL}
                                    color={ButtonColor.ERROR_BG}/>
                        </div>
                    )}
                </div>
                <div className={styles.total}>
                    К оплате {total} руб
                </div>
                <div className={styles.form}>
                    <Input onChange={value => setData({customerName: value})} value={data.customerName}
                           placeholder={'Введите ваше имя'} required={true}
                           color={'black'}/>
                    <Input onChange={value => setData({phoneNumber: value})} value={data.phoneNumber}
                           placeholder={'Номер телефона'} required={true}
                           color={'black'}/>
                    <Input onChange={value => setData({address: value})} value={data.address}
                           placeholder={'Полный адрес'} required={true}
                           color={'black'}/>
                    <Textarea onChange={value => setData({description: value})} value={data.description}
                              placeholder={'Дополнительные комментарии'} required={true}
                              color={'black'}/>
                    <Button onClick={() => submit()} content={'Оформить заказ'} size={ButtonSize.DEFAULT}
                            color={ButtonColor.GOLD_BG}/>
                </div>
                {resultMessage &&
                <div className={resultMessage.context === 'error' ? styles.error : styles.success}>
                    {resultMessage.message}
                </div>
                }
            </div>

        </div>
    )
}