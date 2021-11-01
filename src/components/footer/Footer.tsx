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
                        УНП 400002435
                    </span>
                    <span className={styles.footerBlockContentItem}>
                        246050, г. Гомель, ул. Гагарина, 59
                    </span>
                    <span className={styles.footerBlockContentItem}>
                        Тел.: 8 0232 50-61-73
                    </span>
                    <span className={styles.footerBlockContentItem}>
                        E-mail: gomops@mail.ru
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