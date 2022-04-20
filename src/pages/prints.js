import React, { useContext } from 'react'
import { WarContext } from '../providers/WarProvider'
import { motion } from 'framer-motion'

import Logo from "../components/Logo"
import SideNav from '../components/SideNav'
import Nav from '../components/Nav'

import * as styles from '../styles/prints.module.scss'

const Prints = ({ location }) => {
    const [war] = useContext(WarContext)

    return (
        <>
            <Logo />
            <motion.div
                className={styles.container}
                initial={{
                    opacity: war.firstLoad ? 0 : 1,
                    translateY: war.firstLoad ? 0 : "100vh"
                }}
                animate={{
                    opacity: 1,
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