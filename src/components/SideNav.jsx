import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { WarContext } from '../providers/WarProvider'

import * as styles from '../styles/side-nav.module.scss'

const SideNav = ({ slides }) => {
    const [war, setWar] = useContext(WarContext)
    return (
        <>
            {war.paintingPosition !== 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={styles.leftLink}
                    onClick={() => setWar(state => ({ ...state, paintingPosition: state.paintingPosition - 1, firstLoad: false }))}
                >
                    <p>{war.paintings.length !== 0 && war.paintings[war.paintingPosition - 1].short}</p>
                    <svg viewBox="0 0 50 89">
                    <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                    </svg>
                </motion.div>
            )}
            {war.paintingPosition !== war.paintings.length - 1 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={styles.rightLink}
                    onClick={() => setWar(state => ({ ...state, paintingPosition: state.paintingPosition + 1, firstLoad: false }))}
                >
                    <p>{war.paintings.length !== 0 && war.paintings[war.paintingPosition + 1].short}</p>
                    <svg viewBox="0 0 50 89">
                        <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
                    </svg>
                </motion.div>
            )}
        </>
    )
}

export default SideNav