import * as React from 'react'
import {FunctionComponent, useEffect, useState} from "react";
import {config, url} from "../../../apiConfig";
import styles from './VacansyListStyles.module.sass'

export interface VacancyList{
    id:number,
    salaryStart:number,
    salaryEnd: number | null,
    offerName:string,
    offerDescription:string
}

export const VacancyList: FunctionComponent = () =>{
    const [list,setList] = useState<VacancyList[]>([]);
        console.log(list);
    useEffect(()=>{
         fetch(url(`${config.endpoints.vacansy}`), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(res=> setList(res)).catch(e=> console.error(e))
    },[])
    return(
        <div className={styles.wrap}>
            <div className={styles.vacancyList}>
                {list.map(v=>
                    <div className={styles.vacancy} key={v.id}>
                        <div className={styles.title}>
                            {v.offerName}
                        </div>
                        <div className={styles.description}>
                            {v.offerDescription}
                        </div>
                        <div className={styles.salary}>
                            {v.salaryStart} {v.salaryEnd? `- ${v.salaryEnd}` : null} руб
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}