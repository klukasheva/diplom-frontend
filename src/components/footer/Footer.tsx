import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './FooterStyles.module.sass'

export const Footer: FunctionComponent = (props) => {
    return(
        <footer>
            <div className={styles.footerBlock}>
                <div className={styles.footerBlockTitle}>
                    Контакты
                </div>
                <div className={styles.footerBlockContent}>
                    <span className={styles.footerBlockContentItem}>
                        УНП 400158558
                    </span>
                    <span className={styles.footerBlockContentItem}>
                        247673, г. Рогачев, ул. Володарского, 90
                    </span>
                    <span className={styles.footerBlockContentItem}>
                        Тел.: 8 02339 3-70-58
                    </span>
                    <span className={styles.footerBlockContentItem}>
                        E-mail: raiporog2016@mail.ru
                    </span>
                </div>
            </div>
            <div className={styles.footerBlock}>
                <div className={styles.footerBlockTitle}>
                    Режим работы
                </div>
                <div className={styles.footerBlockContent}>
                    <span className={styles.footerBlockContentItem}>
                         Понедельник- Пятница
                    </span>
                    <span className={styles.footerBlockContentItem}>
                        с 8:30 - до 17:30
                    </span>
                    <span className={styles.footerBlockContentItem}>
                        обед с 12:30 - до 13:30
                    </span>
                </div>
            </div>
        </footer>
    )
}