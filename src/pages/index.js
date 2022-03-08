import React, { useState, useEffect, useMemo, useContext } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from 'framer-motion'
import { WarContext } from "../providers/WarProvider"

import { useWindowSize } from "../helpers/useWindowSize"

import {
  first,
  left,
  right
} from '../animations/paintingAnimations'

import * as styles from '../styles/index.module.scss'
import '../styles/base.scss'

const IndexPage = () => {
  const [war, setWar] = useContext(WarContext)
  console.log(war)
  const size = useWindowSize()

  const paintings = useMemo(() => {
    if (war.paintings.length !== 0) {
      return (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={
            war.paintingPosition == 0 && war.firstLoad
            ? first 
            : war.paintingPosition === 0
              ? left
              : right    
          }
          transition={{
              duration: 2
          }}
          key={war.paintingPosition}
          className={styles.painting}
        >
          <GatsbyImage 
            image={war.paintings[war.paintingPosition].artwork} 
            alt={war.paintings[war.paintingPosition].title} 
          />
        </motion.div>
      )
    }
  }, [war.paintingPosition, war.paintings])

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
          onClick={() => setWar(state => ({ ...state, paintingPosition: state.paintingPosition - 1, firstLoad: false }))}
        >
          <p>WWI</p>
          <svg viewBox="0 0 50 89">
            <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
          </svg>
        </div>
      )}

      <AnimatePresence inital={false}>
        {paintings}
      </AnimatePresence>

      {war.paintingPosition !== war.paintings.length - 1 && (
        <div 
          className={styles.rightLink}
          onClick={() => setWar(state => ({ ...state, paintingPosition: state.paintingPosition + 1, firstLoad: false }))}
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