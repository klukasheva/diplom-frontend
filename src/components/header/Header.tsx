import * as React from 'react';
import {FunctionComponent} from "react";
import styles from './HeaderStyles.module.sass'
import {MENU_ITEMS} from "../../mock";
import { Link } from 'react-router-dom';
import {useLocation} from "react-router";

export const Header:FunctionComponent=()=>{
    const location = useLocation();
    return(
        <header className={styles.header}>
            {MENU_ITEMS.map((item, index)=>
                <Link to={item.link} key={item.key}>
                    <div className={location.pathname === item.link ? styles.activeLink : ''}>
                        {item.key}
                    </div>
                </Link>
            )}
        </header>
    )
}