import React, { useContext} from 'react'
import { WarContext } from '../providers/WarProvider'
import { motion, AnimatePresence } from 'framer-motion'

import * as styles from '../styles/enlarge.module.scss'

const Enlarge = ({ image }) => {
    const [war, setWar] = useContext(WarContext)

    return (
        // <AnimatePresence exitBeforeEnter>
            <motion.section 
                className={styles.container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                key="image"
            >
                <p>enlarge</p>
                <div 
                    className={styles.close}
                    onClick={() => {
                        setWar(state => ({ ...state, viewEnlarge: false }))
                    }}
                >
                    <h1>X</h1>
                </div>
            </motion.section>
        // </AnimatePresence>
    )
}

export default Enlarge