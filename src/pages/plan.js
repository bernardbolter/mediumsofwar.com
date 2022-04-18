import React, { useContext, useMemo } from 'react'
import { motion } from 'framer-motion'
import { navigate } from 'gatsby'
import { useWindowSize } from "../helpers/useWindowSize"
import { WarContext } from '../providers/WarProvider'

import Logo from '../components/Logo'
import Sketch from '../components/Sketch'
import Intro from '../components/Intro'
import So from '../components/So'
import Sketches from '../components/Sketches'
import Support from '../components/Support'

import {
    first,
    left,
    right
  } from '../animations/paintingAnimations'

import * as styles from '../styles/plan.module.scss'

const Plan = () => {
    const size = useWindowSize()
    const [war, setWar] = useContext(WarContext)
    console.log(war)

    const plan = useMemo(() => {
        var slide
        var short
            if (war.planPosition === 0) {
                slide = <Intro />
            } else if (war.planPosition === 1) {
                slide = <So />
            } else if (war.planPosition === 2) {
                slide = <Sketches />
            } else {
                slide = <Support />
            }
        return (
            <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={
                        war.planPosition == 0 && war.firstLoad
                        ? first 
                        : war.planPosition === 0
                        ? left
                        : right    
                    }
                    transition={{
                        duration: 1.4
                    }}
                    key={war.planPosition}
                    className={styles.planContainer}
                >
                    {slide}
            </motion.div>
        )
    }, [war.planPosition])

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

                {war.planPosition !== 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={styles.leftLink}
                        onClick={() => setWar(state => ({ ...state, planPosition: state.planPosition - 1, firstLoad: false }))}
                    >
                        <p>Intro</p>
                        <svg viewBox="0 0 50 89">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                        </svg>
                    </motion.div>
                 )}

                {plan}

                {war.planPosition !== 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={styles.rightLink}
                        onClick={() => setWar(state => ({ ...state, planPosition: state.planPosition + 1, firstLoad: false }))}
                    >
                        <p>So</p>
                        <svg viewBox="0 0 50 89">
                            <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                        </svg>
                    </motion.div>
                )}
            </motion.div>
            <div 
                className={styles.paintingsLink}
                onClick={() => {
                    setWar(state => ({  ...state, enterPrint: false }))
                    navigate('/')
                }} 
            >
                <p>Paintings</p>
                <svg viewBox="0 0 50 89">
                    <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                </svg>
            </div>
            <div 
                className={styles.printsLink}
                onClick={() => {
                    setWar(state => ({  ...state, enterPrint: false }))
                    navigate('/prints')
                }} 
            >
                <p>Prints</p>
                <svg viewBox="0 0 50 89">
                    <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                </svg>
            </div>
        </>
    )
}

export default Plan