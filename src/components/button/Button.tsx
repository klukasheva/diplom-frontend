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
    BLUE
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
            [styles.BLUE]: color === ButtonColor.BLUE
        }
    )
    return (
        <button onClick={onClick} className={classes} style={{alignSelf: alignSelf ?? 'start'}}>
            {content}
        </button>
    )
}