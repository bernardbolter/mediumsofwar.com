import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import { motion } from 'framer-motion'
import { WarContext } from '../providers/WarProvider'

import * as styles from '../styles/nav.module.scss'

const Nav = ({ location }) => {
    const [war, setWar] = useContext(WarContext)

    return (
        <>
            {(location.pathname === '/' || location.pathname === '/plan/') && (
                <motion.div
                    key='prints'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5, ease: "linear" }}
                    
                    className={`${styles.link} ${styles.printLink}`}
                    onClick={() => {
                        setWar(state => ({  
                            ...state,
                            passThroughPlansToPrints: location.pathname === '/plan/' ? true : false,
                            movingUp : false,
                            firstLoad: false
                        }))
                        if (location.pathname === '/plan/') {
                            navigate('/')
                        } else {
                            navigate('/prints/')
                        }
                    }} 
                >
                    <p>Prints</p>
                    <svg viewBox="0 0 50 89">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                    </svg>
                </motion.div>
            )}

            {(location.pathname === '/' || location.pathname === '/prints/') && (
                <motion.div
                    key="plan"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    
                    className={`${styles.link} ${styles.planLink}`}
                    onClick={() => {
                        setWar(state => ({  
                            ...state,
                            movingUp: true,
                            passThroughPrintsToPlans: location.pathname === '/prints/' ? true : false,
                            firstLoad: false
                        }))
                        if (location.pathname === '/prints/') {
                            navigate('/')
                        } else {
                            navigate('/plan/')
                        }
                    }}
                    >
                    <svg viewBox="0 0 50 89">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                    </svg>
                    <p>the Plan</p>
                </motion.div>
            )}

            {location.pathname === '/prints/' && (
                <motion.div
                    key="paintings"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5, ease: "linear" }}
                    
                    className={`${styles.link} ${styles.paintingsLinkPrints}`}
                    onClick={() => {
                        setWar(state => ({  
                            ...state,
                            movingUp: true,
                            firstLoad: false
                        }))
                        navigate('/')
                    }} 
                >
                    <svg viewBox="0 0 50 89">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                    </svg>
                    <p>Paintings</p>
                </motion.div>
            )}

            {location.pathname === '/plan/' && (
                <motion.div
                    key="paintings"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5, ease: "linear" }}
                    
                    className={`${styles.link} ${styles.paintingsLinkPlan}`}
                    onClick={() => {
                        setWar(state => ({  
                            ...state, 
                            movingUp: false,
                            firstLoad: false
                        }))
                        navigate('/')
                    }} 
                >
                    <p>Paintings</p>
                    <svg viewBox="0 0 50 89">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                    </svg>
                </motion.div>
            )}
        </>
    )
}


export default Nav