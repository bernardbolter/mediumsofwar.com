import React from 'react'
import { navigate } from 'gatsby'

import * as styles from '../styles/logo.module.scss'

const Logo = () => {
    return (
        <div 
            className={styles.container}
            onClick={() => navigate("/")}
        >
            <h1>MEDIUMS</h1>
            <div className={styles.header}>
                <p>of</p>
                <h2>WAR</h2>
            </div>
        </div>
    )
}

export default Logo