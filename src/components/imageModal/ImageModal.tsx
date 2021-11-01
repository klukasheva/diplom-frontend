import * as React from 'react'
import {FunctionComponent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux";
import Icon from "@mdi/react";
import {mdiClose} from "@mdi/js";
import {url} from "../../apiConfig";
import styles from './ImageModalStyles.module.sass'
import {ImageModalAction} from "../../redux/image";



export const ImageModal: FunctionComponent = () => {
    const data = useSelector((state: RootState) => state.ImageModalReducer);
    const dispatch = useDispatch();
    return (
       <div className={styles.wrapper}>
           <div className={styles.modal}>
               <div className={styles.header}>
                   <div>
                       {data.title}
                   </div>
                   <div onClick={()=> dispatch(ImageModalAction({isOpen:false}))}>
                       <Icon path={mdiClose} size={1}/>
                   </div>
               </div>
               <img src={url((`files/${data.link}`))}/>
           </div>
       </div>
    )
}