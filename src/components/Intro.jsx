import React from 'react'

import * as styles from '../styles/intro.module.scss'

const Intro = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.first}>The mediums that we capture War in, is how we see War.</h1>
            <h2 className={styles.second}>This series is about the evolution the image and technology through past conflicts.</h2>
            <h3 className={styles.third}>If we don't learn from history, we are doomed to repeat it.</h3>
        </div>
    )
}

export default Intro