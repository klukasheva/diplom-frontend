import * as React from 'react'
import {FunctionComponent, useEffect, useMemo, useState} from "react";
import styles from './ProductStyles.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {CategoryActions} from "../../../redux/product/actions";
import {Input} from "../../input/Input";
import {takeLeft} from "fp-ts/es6/Array";
import {url} from "../../../apiConfig";
import Icon from "@mdi/react";
import {mdiClose} from "@mdi/js";
import {ProductModalAction} from "../../../redux/modal";

export const ProductModal: FunctionComponent = () => {
    const categories = useSelector((state: RootState) => state.CategoryReducer);
    const dispatch = useDispatch()
    const [value,setValue] = useState('');
    const prepareCategories = useMemo(()=> categories.filter(category=> category.title.substring(0,category.title.length)
        .toUpperCase()
        .includes(value.toUpperCase())),[categories, value]);

    useEffect(()=>{
       dispatch(CategoryActions.request())
    },[dispatch])
    return(
        <div className={styles.wrapperModal}>
            <div className={styles.modal}>
                 <div className={styles.modalHeader}>
                         <div>
                             Для поставщиков
                         </div>
                         <div onClick={()=> dispatch(ProductModalAction({isOpen:false}))}>
                             <Icon path={mdiClose} size={1}/>
                         </div>
                 </div>
                <Input onChange={(value)=> setValue(value)}
                       value={value}
                       required={false}
                       placeholder={'Введите название категории'}
                       color={'black'}/>
                <div className={styles.select}>
                    {prepareCategories.map(cat=>
                        <div key={cat.id} className={styles.categoryItem}>
                            <div className={styles.categoryDescr}>
                                <div>
                                    {cat.title}
                                </div>
                                <div>
                                    {cat.phoneNumber}
                                </div>
                            </div>
                            <div className={styles.categoryProducts}>
                                {takeLeft(3)(cat.products).map(product=>
                                    <div className={styles.productItem}>
                                        <img src={url((`files/${product.image}`))}/>
                                        <div className={styles.productItemCost}>
                                            <div>{product.title}</div>
                                            <div>
                                                {product.stockCost}р
                                            </div>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}