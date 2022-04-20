import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { WarContext } from '../providers/WarProvider'

import * as styles from '../styles/side-nav.module.scss'

const SideNav = ({ location }) => {
    const [war, setWar] = useContext(WarContext)
    const [position, setPosition] = useState(0)
    const [length, setLength] = useState(0)
    const [last, setLast] = useState(null)
    const [next, setNext] = useState(null)

    useEffect(() => {
        if (location.pathname === '/') {
            if (war.paintings.length !== 0) {
                setPosition(war.paintingPosition)
                setLength(war.paintings.length)
                setLast(war.paintingPosition !== 0 && war.paintings[war.paintingPosition - 1].short)
                setNext(war.paintingPosition !== war.paintings.length - 1 && war.paintings[war.paintingPosition + 1].short)
            }
        } else if (location.pathname === '/plan/') {
            if (war.plans.length !== 0) {
                setPosition(war.planPosition)
                setLength(war.plans.length)
                setLast(war.planPosition !== 0 && war.plans[war.planPosition - 1].short)
                setNext(war.planPosition !== war.plans.length - 1 && war.plans[war.planPosition + 1].short)
            }
        } else {
            if (war.prints.length !== 0) {
                setPosition(war.printPosition)
                setLength(war.prints.length)
                setLast(war.printPosition !== 0 && war.prints[war.printPosition - 1].short)
                setNext(war.printPosition !== war.prints.length - 1 && war.prints[war.printPosition + 1].short)
            }
        }
    }, 
    [
        war.paintingPosition,
        war.paintings, 
        war.planPosition,
        war.plans,
        war.printPosition,
        war.prints,
        location.pathname
    ])

    console.log(position, length, next, last)

    return (
        <>
            {position !== 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={styles.leftLink}
                    onClick={() => setWar(state => ({ 
                        ...state, 
                        paintingPosition: location.pathname === '/' ? state.paintingPosition - 1 : state.paintingPosition,
                        planPosition: location.pathname === '/plan/' ? state.planPosition - 1 : state.planPosition,
                        printPosition: location.pathname === '/prints/' ? state.printPosition - 1 : state.printPosition,
                        firstLoad: false 
                    }))}
                >
                    <p>{last}</p>
                    <svg viewBox="0 0 50 89">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                    </svg>
                </motion.div>
            )}

            {position !== length - 1 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={styles.rightLink}
                    onClick={() => setWar(state => ({ 
                        ...state, 
                        paintingPosition: location.pathname === '/' ? state.paintingPosition + 1 : state.paintingPosition,
                        planPosition: location.pathname === '/plan/' ? state.planPosition + 1 : state.planPosition,
                        printPosition: location.pathname === '/prints/' ? state.printPosition + 1 : state.printPosition,
                        firstLoad: false 
                    }))}
                >
                    <p>{next}</p>
                    <svg viewBox="0 0 50 89">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                    </svg>
                </motion.div>
            )}
        </>
    )
}

export default SideNav