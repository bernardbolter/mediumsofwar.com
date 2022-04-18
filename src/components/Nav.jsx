import React, { useContext } from 'react'
import { WarContext } from '../providers/WarProvider'

import * as styles from '../styles/nav.module.scss'

const Nav = () => {
    const [war] = useContext(WarContext)
    return (
        <section className={styles.container}>
            <p>nav</p>
        </section>
    )
}

export default Nav