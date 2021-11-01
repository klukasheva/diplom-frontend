import * as React from 'react'
import {useEffect, useState} from "react";
import {Product} from "./Product";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {CategoryActions, ProductActions} from "../../../redux/product/actions";
import {Link} from 'react-router-dom';
import {routes} from "../../../routes";
import {CategoryTag} from "./CategoryTag";
import styles from './ProductStyles.module.sass'
import {useQuery} from "../../../hooks";

export const ProductList = () => {
    const dispatch = useDispatch();
    const params = useQuery()
    const products = useSelector((state: RootState) => state.ProductReducer.productList);
    const categoryList = useSelector((state: RootState) => state.CategoryReducer);
    const [currentCategory, setCurrentCategory] = useState<number | undefined>();

    useEffect(() => {
        if (currentCategory) {
            dispatch(ProductActions.getList.request(currentCategory))
        } else {
            dispatch(ProductActions.getList.request(undefined))
        }
    }, [dispatch, currentCategory])

    useEffect(() => {
        dispatch(CategoryActions.request())
    }, [dispatch])

    useEffect(() => {
        setCurrentCategory(+params.getAll('category')[0])
    }, [])

    return (
        <div className={styles.productList}>
            <div className={styles.categoryList}>
                {
                    categoryList.map(category =>
                        <CategoryTag {...category} key={category.id} onClick={() => setCurrentCategory(category.id)}
                                     current={currentCategory}/>
                    )
                }
            </div>
            {!products.length ?
                <div className={styles.empty}>К сожалению, товаров в данной категории не существует</div>
                :
                <>
                    {products.map(item =>
                        <Link to={`${routes.products}/${item.id}`} key={item.id}
                              style={{textDecoration: 'none', color: 'initial'}}>
                            <Product data={item}/>
                        </Link>
                    )}
                </>
            }
        </div>
    )

}