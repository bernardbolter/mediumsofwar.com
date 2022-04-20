import React, { useContext } from 'react'
import { WarContext } from '../providers/WarProvider'
import { motion } from 'framer-motion'

import * as styles from '../styles/support.module.scss'

const Support = () => {
    const [war] = useContext(WarContext)

    return (
        <motion.div
            className={styles.container}
        >
            <h1>Support</h1>
        </motion.div>
    )
}

export default Support