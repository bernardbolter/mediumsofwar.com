import React, { useContext } from 'react'
import { WarContext } from '../providers/WarProvider'
import { motion } from 'framer-motion'

import * as styles from '../styles/pitch.module.scss'

const Pitch = () => {
    const [war] = useContext(WarContext)

    return (
        <motion.div 
            className={styles.container}
        >
            <p>Pitch</p>
        </motion.div>
    )
}

export default Pitch