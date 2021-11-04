import * as React from 'react';
import {FunctionComponent} from "react";
import styles from './HeaderStyles.module.sass'
import {MENU_ITEMS} from "../../mock";
import { Link } from 'react-router-dom';

export const Header:FunctionComponent=()=>{
    return(
        <header className={styles.header}>
            {MENU_ITEMS.map((item,index)=>
                <Link to={item.link} key={item.key}>
                    {item.key}
                </Link>
            )}
        </header>
    )
}