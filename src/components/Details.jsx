import React, { useState } from 'react'
import { useWindowSize } from '../helpers/useWindowSize'

import * as styles from '../styles/detail.module.scss'

const Detail = ({ details }) => {
    const [changeZ, setChangeZ] = useState(false)
    const size = useWindowSize()
    
    return (
        <div 
            className={styles.container}
            style={{
                zIndex: changeZ ? 3 : 10,
            }}
            onClick={() => setChangeZ(!changeZ)}    
        >
            <h1>{details.title}</h1>
            <p>in</p>
            <h2>{details.medium}</h2>
            <p className={styles.study}>(study)</p>
            <h3>historical photos and acrylic on canvas</h3>
            <div className={styles.sizeWrap}>
                <h4>80cm x 80cm</h4>
                <h5>2022</h5>
            </div>
        </div>
    )
}

export default Detail