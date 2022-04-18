import React, { useContext } from 'react'
import { WarContext } from '../providers/WarProvider'
import Sketch from '../components/Sketch'

import * as styles from '../styles/sketches.module.scss'

const Sketches = () => {
    const [war] = useContext(WarContext)
    return (
        <div>
            <h1>Sketches</h1>
            <div className={styles.sketchesContainer}>
                    {war.sketches.map((sketch, i) => {
                        return <Sketch sketch={sketch} height={.10} dimensions={i === 0 ? true : false} />
                    })}
                // </div>
        </div>
    )
}

export default Sketches