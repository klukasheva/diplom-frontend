import * as React from 'react'
import styles from './StaticPages.module.sass'


export const LeadersPage = () => {
    return(
        <div className={styles.leaders}>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                    Кулак Александр Иванович
                </div>
                <div className={styles.leaderWork}>
                    Председатель правления облпотребсоюза
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон:(8 0232) 50-61-73
                </div>
            </div>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                    Коржова Ольга Владимировна
                </div>
                <div className={styles.leaderWork}>
                    Первый заместитель председателя правления
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон:(8 0232) 51-71-41
                </div>
            </div>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                    Петрукович Людмила Михайловна
                </div>
                <div className={styles.leaderWork}>
                    Заместитель председателя правления
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон:(8 0232) 50-61-54
                </div>
            </div>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                    Короткевич Светлана Ивановна
                </div>
                <div className={styles.leaderWork}>
                    Заместитель председателя правления
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон: (8 0232) 50-61-37
                </div>
            </div>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                    Козловская Елена Петровна
                </div>
                <div className={styles.leaderWork}>
                    Начальник контрольно-аналитического
                    управления
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон:(8 0232) 33-38-59
                </div>
            </div>
        </div>
    )
}