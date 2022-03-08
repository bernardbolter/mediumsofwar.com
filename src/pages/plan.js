import React from 'react'
import { motion } from 'framer-motion'

import Logo from '../components/Logo'

import * as styles from '../styles/plan.module.scss'

const Plan = () => {
    return (
        <>
            <Logo />
            <motion.div
                className={styles.container}
                initial={{
                    translateY: "100vh"
                }}
                animate={{
                    translateY: 0
                }}
                exit={{
                    translateY: "100vh"
                }}
                transition={{
                    duration: 1,
                    ease: "linear"
                }}
            >
                <p>PLAN</p>
            </motion.div>
        </>
    )
}

export default Plan