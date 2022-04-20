import React, { useContext } from 'react'
import { WarContext } from '../providers/WarProvider'
import { motion } from 'framer-motion'

import * as styles from '../styles/about.module.scss'

const About = () => {
    const [war] = useContext(WarContext)
    
    return (
        <motion.div 
            className={styles.container}
        >
            <h1 className={styles.first}>The mediums that we capture War in, is how we see War.</h1>
            <h2 className={styles.second}>This series is about the evolution the image and technology through past conflicts.</h2>
            <h3 className={styles.third}>“Those who cannot remember the past are condemned to repeat it.”</h3>
            <h4 className={styles.fourth}>George Santayana</h4>
        </motion.div>
    )
}

export default About