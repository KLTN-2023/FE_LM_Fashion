import React, { useMemo } from "react";
import headerItem from '@/app/static/header-item.json'
import styles from './styles.module.scss'
// ----------------------------------------------
type HeaderItem = {
    key: number;
    label: string;
}
// ----------------------------------------------
function HeaderItems() {
    const menuItem = { ...headerItem?.menuItem } || []

    const items: HeaderItem[] =
        Array(Object.keys(menuItem).length)
            .fill(null)
            .map((_, index) => {
                const key = index + 1;
                return {
                    key,
                    label: `${menuItem[index].label}`
                }
            })

    return (
        <React.Fragment >
            <ul className={styles.menu}>
                {
                    items.map((item) => (
                        <li key={item.key} className={styles.menu}>{item.label}</li>
                    ))
                }
            </ul>
        </React.Fragment>
    )
}

export default React.memo(HeaderItems);