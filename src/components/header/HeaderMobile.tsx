import * as React from 'react'
import {FunctionComponent, useState} from "react";
import Icon from "@mdi/react";
import {mdiClose, mdiMenu} from "@mdi/js";
import {MENU_ITEMS} from "../../mock";
import styles from './HeaderStyles.module.sass'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

export const HeaderMobile: FunctionComponent = () => {
    const [mobileNavigations, setMobileNavigations] = useState(false);
    const location = useLocation();
    return (
        <header className={styles.mobileHeader}>
            <div onClick={() => setMobileNavigations(!mobileNavigations)} className={styles.burger}>
                <Icon path={mdiMenu} size={1}/>
            </div>
            {mobileNavigations &&
            <div className={styles.nav_items}>
                <div className={styles.nav_items_header}>
                    <div>
                        Навигация
                    </div>
                    <div onClick={() => setMobileNavigations(false)}>
                        <Icon path={mdiClose} size={1}/>
                    </div>
                </div>
                <div className={styles.links}>
                    {MENU_ITEMS.map((item, index) =>
                        <Link to={item.link} key={item.key}>
                            <div onClick={() => setMobileNavigations(false)}
                                 style={{color: location.pathname === item.link ? '#b8860b' : 'initial'}}>
                                {item.key}
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            }
        </header>
    )
}