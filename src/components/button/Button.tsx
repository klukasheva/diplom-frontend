import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './ButtonStyles.module.sass'
import clsx from "clsx";

export interface ButtonProps extends Omit<Partial<HTMLButtonElement>, 'onclick'> {
    onClick: () => void,
    content: string | number | HTMLElement,
    alignSelf?: 'center' | 'start' | 'end',
    size?: ButtonSize,
    color?: ButtonColor
    type?: 'button' | 'submit'
}

export enum ButtonSize {
    DEFAULT,
    SMALL
}

export enum ButtonColor {
    ERROR,
    GOLD,
    GREEN,
    BLUE,
    ERROR_BG,
    GOLD_BG,
    GREEN_BG,
    BLUE_BG
}


export const Button: FunctionComponent<ButtonProps> = (props) => {
    const {onClick, content, alignSelf, size, color} = props;
    const classes = clsx(
        {
            [styles.button]: true,
            [styles.DEFAULT_BUTTON]: !color && !size,
            [styles.DEFAULT]: size === ButtonSize.DEFAULT,
            [styles.SMALL]: size === ButtonSize.SMALL,
            [styles.GOLD]: color === ButtonColor.GOLD,
            [styles.ERROR]: color === ButtonColor.ERROR,
            [styles.GREEN]: color === ButtonColor.GREEN,
            [styles.BLUE]: color === ButtonColor.BLUE,
            [styles.ERROR_BG]: color === ButtonColor.ERROR_BG,
            [styles.GOLD_BG]: color === ButtonColor.GOLD_BG,
            [styles.GREEN_BG]: color === ButtonColor.GREEN_BG,
            [styles.BLUE_BG]: color === ButtonColor.BLUE_BG,


        }
    )
    return (
        <button onClick={onClick} className={classes} style={{alignSelf: alignSelf ?? 'start'}}>
            {content}
        </button>
    )
}