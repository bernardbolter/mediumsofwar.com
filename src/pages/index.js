import React, { useState, useEffect, useMemo, useContext } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from 'framer-motion'
import { WarContext } from "../providers/WarProvider"
import { useWindowSize } from "../helpers/useWindowSize"

import Logo from '../components/Logo'

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

      var paintingWidth
      var paintingMargin

      if (size.height < size.width) {
        paintingWidth = size.height * .9
        paintingMargin = (size.width - (size.height * .9)) / 2
      } else {
        paintingWidth = size.width * .9
        paintingMargin = size.width * .1
      }

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
              duration: 1.4
          }}
          key={war.paintingPosition}
          className={styles.painting}
          style={{ 
            zIndex: war.detailFront ? 2 : 5,
            width: paintingWidth,
            margin: paintingMargin
          }}
          onClick={() => setWar(state => ({ ...state, detailFront: !state.detailFront }))}
        >
          <GatsbyImage 
            image={war.paintings[war.paintingPosition].artwork} 
            alt={war.paintings[war.paintingPosition].title} 
          />
        </motion.div>
      )
    }
  }, [war.paintingPosition, war.paintings, war.detailFront, size])

  const details = useMemo(() => {
    if (war.paintings.length !== 0) {
      return (
        <motion.div
          initial={{ opacity: 0, translateY: 500}}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 500 }}
          transition={{  duration: 1.6, ease: "linear" }}
          key={war.paintingPosition}
          className={styles.detail}
          style={{
            zIndex: war.detailFront ? 3 : 2
          }}
          onClick={() => setWar(state => ({ ...state, detailFront: !state.detailFront }))}
        >
          <h1>{war.paintings[war.paintingPosition].title}</h1>
          <p>in</p>
          <h2>{war.paintings[war.paintingPosition].medium}</h2>
          <p className={styles.study}>(study)</p>
          <h3>historical photos</h3>
          <h3>and acrylic on canvas</h3>
          <div className={styles.sizeWrap}>
              <h4>80cm x 80cm</h4>
              <h5>2022</h5>
          </div>
        </motion.div>
      )
    }
  }, [war.paintingPosition, war.paintings, war.detailFront])

  return (
    <>
      <Logo />
      <motion.main 
        className={styles.container}
        initial={{
          translateY: war.enterPrint ? "100vh" : "-100vh"
        }}
        animate={{
          translateY: 0
        }}
        exit={{
            translateY: war.enterPrint ? "100vh" : "-100vh"
        }}
        transition={{
            duration: 1,
            ease: "linear"
        }}
      >
        <div 
          className={styles.printLink}
          onClick={() => {
            setWar(state => ({  ...state, enterPrint: true }))
            navigate('/plan/')
          }}
        >
          <svg viewBox="0 0 50 89">
            <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
          </svg>
          <p>the Plan</p>
        </div>
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

        <AnimatePresence inital={false}>
          {paintings}
        </AnimatePresence>
        <AnimatePresence>
          {details}
        </AnimatePresence>

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

        <div 
          className={styles.planLink}
          onClick={() => {
            setWar(state => ({  ...state, enterPrint: false }))
            navigate('/prints/')
          }} 
        >
          <p>Prints</p>
          <svg viewBox="0 0 50 89">
              <path fillRule="evenodd" clipRule="evenodd" d="M50 88.7903V70.8187L25.0889 50.7118L0 70.9963L0.177667 88.7903L24.9111 68.1495L50 88.7903ZM50 38.0784V20.2845L25.0889 0L0 20.2845L0.177667 38.0784L24.9111 17.6163L50 38.0784ZM50 63.345V45.551L25.0889 25.2666L0 45.551L0.177667 63.345L24.9111 42.8829L50 63.345Z" />
            </svg>
        </div>
      </motion.main>
    </>
  )
}

export default IndexPage