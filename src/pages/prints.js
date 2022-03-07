import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import * as styles from '../styles/prints.module.scss'

const Prints = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                className={styles.container}
                initial={{
                    translateY: 0
                }}
                animate={{
                    translateY: -100
                }}
                exit={{
                    translateY: 0
                }}
                transition={{
                    duration: 5,
                    ease: "linear"
                }}
            >
                <p>Prints</p>
            </motion.div>
        </AnimatePresence>
    )
}

export default Prints