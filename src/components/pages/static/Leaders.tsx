import * as React from 'react'
import styles from './StaticPages.module.sass'


export const LeadersPage = () => {
    return(
        <div className={styles.leaders}>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                    Гончаров Павел Александрович
                </div>
                <div className={styles.leaderWork}>
                    Директор Рогачевского филиала
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон:(8 02339) 3-70-58
                </div>
            </div>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                    Евдокимова Наталья Леонидовна
                </div>
                <div className={styles.leaderWork}>
                    Заместитель директора Рогачевского филиала
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон:(8 02339) 3-70-94
                </div>
            </div>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                  Стрелков Алексей Константинович
                </div>
                <div className={styles.leaderWork}>
                    Начальник сектора контрольно-инвентаризационной работы
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон:(8 02339) 3-44-72
                </div>
            </div>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                   Леонова Ольга Михайловна
                </div>
                <div className={styles.leaderWork}>
                    И. О. Главного бухгалтера
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон:(8 02339) 3-42-23
                </div>
            </div>
            <div className={styles.leadersItem}>
                <div className={styles.leaderName}>
                    Харченко Владимир Николаевич
                </div>
                <div className={styles.leaderWork}>
                    Начальник отдела заготовок, промышленности и ВЭД
                </div>
                <div className={styles.leaderPhone}>
                    контактный телефон: (8 02339) 3-41-46
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