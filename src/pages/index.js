import React, { useState, useEffect, useContext } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from 'framer-motion'
import { WarContext } from "../providers/WarProvider"

import { useWindowSize } from "../helpers/useWindowSize"

import * as styles from '../styles/index.module.scss'
import '../styles/base.scss'

const IndexPage = () => {
  const [war, setWar] = useContext(WarContext)
  console.log(war)
  const size = useWindowSize()

  return (
    <main className={styles.container}>
      <div 
        className={styles.printLink}
        onClick={() => navigate('/prints/')}
      >
        <svg viewBox="0 0 50 89">
          <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
        </svg>
        <p>Prints</p>
      </div>
      {war.paintingPosition !== 0 && (
        <div 
          className={styles.leftLink}
          onClick={() => setWar(state => ({ ...state, paintingPosition: state.paintingPosition - 1 }))}
        >
          <p>WWI</p>
          <svg viewBox="0 0 50 89">
            <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
          </svg>
        </div>
      )}

      <motion.div
        className="paintings-container"
        style={{ width: `${war.paintings.length * 100}%` }}
      >
        {war.paintings.map(painting => {
          console.log(painting)
          // const image = getImage(painting.image)
          // console.log(image)
          return (
          <div className="painting" key={painting.id}>
            <GatsbyImage image={painting.artwork} alt="art" />
            {/* <StaticImage
              // image={image}
              src={painting.image}
              alt={painting.title}
              placeholder="tracedSVG"
              layout="fullWidth"
            /> */}
          </div>
        )})}
      </motion.div>

      {war.paintingPosition !== war.paintings.length && (
        <div 
          className={styles.rightLink}
          onClick={() => setWar(state => ({ ...state, paintingPosition: state.paintingPosition + 1 }))}
        >
          <p>WWII</p>
          <svg viewBox="0 0 50 89">
            <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
          </svg>
        </div>
      )}

      <div 
        className={styles.planLink}
        onClick={() => navigate('/plan/')}  
      >
        <p>The Plans</p>
        <svg viewBox="0 0 50 89">
            <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
          </svg>
      </div>
    </main>
  )
}

export default IndexPage