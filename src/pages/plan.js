import React, { useContext, useMemo } from 'react'
import { motion } from 'framer-motion'
import { WarContext } from '../providers/WarProvider'

import Logo from '../components/Logo'
import SideNav from '../components/SideNav'
import Nav from '../components/Nav'
import About from '../components/About'
import Pitch from '../components/Pitch'
import Sketches from '../components/Sketches'
import Support from '../components/Support'

import * as styles from '../styles/plan.module.scss'

const Plan = ({ location }) => {
    const [war] = useContext(WarContext)

    const plan = useMemo(() => {
        if (war.planPosition === 0) {
            return  <About />
        } else if (war.planPosition === 1) {
            return  <Pitch />
        } else if (war.planPosition === 2) {
            return <Sketches />
        } else {
            return <Support />
        }
    })

    return (
        <>
            <Logo />
            <motion.div
                className={styles.container}
                initial={{
                    opacity: war.firstLoad ? 0 : 1,
                    translateY: war.firstLoad ? 0 : "-100vh"
                }}
                animate={{
                    opacity: 1,
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

                {plan}

            </motion.div>
            <SideNav location={location} />
            <Nav location={location}/>
        </>
    )
}

export default Plan