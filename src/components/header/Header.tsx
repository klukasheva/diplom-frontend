import * as React from 'react';
import {FunctionComponent} from "react";
import styles from './HeaderStyles.module.sass'
import {MENU_ITEMS} from "../../mock";
import { Link } from 'react-router-dom';
import {useLocation} from "react-router";
import belkoopsouz from "../../static/images/belkoopsouz.jpg"

export const Header:FunctionComponent=()=>{
    const location = useLocation();
    return(
        <header className={styles.header}>
            <img className={styles.logo} src={belkoopsouz} alt="" />
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