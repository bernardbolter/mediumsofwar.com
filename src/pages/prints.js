import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Logo from "../components/Logo"

import * as styles from '../styles/prints.module.scss'

const Prints = () => {
    return (
        <>
            <Logo />
            <motion.div
                className={styles.container}
                initial={{
                    translateY: "-100vh"
                }}
                animate={{
                    translateY: 0
                }}
                exit={{
                    translateY: "-100vh"
                }}
                transition={{
                    duration: 1,
                    ease: "linear"
                }}
            >
                <p>Prints</p>
            </motion.div>
        </>
    )
}

export default Prints