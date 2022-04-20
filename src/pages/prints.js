import React from 'react'
import { motion } from 'framer-motion'

import Logo from "../components/Logo"
import SideNav from '../components/SideNav'
import Nav from '../components/Nav'

import * as styles from '../styles/prints.module.scss'

const Prints = ({ location }) => {
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
                <h1>Prints</h1>
            </motion.div>
            <SideNav />
            <Nav location={location} />
        </>
    )
}

export default Prints