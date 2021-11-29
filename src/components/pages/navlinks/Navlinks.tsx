import * as React from 'react'
import {FunctionComponent, useEffect, useState} from "react";
import styles from './NavlinksStyles.module.sass';
import {useParams} from "react-router";
import {config, url} from "../../../apiConfig";

export const Navlinks: FunctionComponent = () => {
    const {id} = useParams<{id: string}>();
    const [link, setLink] = useState<{id: number, title: string, description: string}>({
        description: "",
        id: 0,
        title: ""
    })
    
    useEffect(()=>{
        fetch(url(`${config.endpoints.navlinks}/${id}`)).then(res=>{
            return res.json()
        }).then(data=> setLink(data))
    },[id]);

    return(
        <div className={styles.navlinksPage}>
            <div>
                {link.description}
            </div>
        </div>
    )
}