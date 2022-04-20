import React, { useEffect, useMemo, useContext } from 'react'
import { navigate } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from 'framer-motion'
import { WarContext } from "../providers/WarProvider"
import { useWindowSize } from "../helpers/useWindowSize"

import Logo from '../components/Logo'
import SideNav from '../components/SideNav'
import Nav from '../components/Nav'
import Enlarge from '../components/Enlarge'

import {
  first,
  left,
  right
} from '../animations/paintingAnimations'

import * as styles from '../styles/index.module.scss'
import '../styles/base.scss'

const IndexPage = ({ location }) => {
  const [war, setWar] = useContext(WarContext)
  const size = useWindowSize()
  console.log("exit: ", war.movingUp)

  useEffect(() => {
    if (war.passThroughPlansToPrints) {
      setTimeout(() => {
        navigate('/prints/')
        setWar(state => ({ ...state, passThroughPlansToPrints: false }))
      }, 1500)
    } else if (war.passThroughPrintsToPlans) {
      setTimeout(() => {
        navigate('/plan/')
        setWar(state => ({ ...state, passThroughPrintsToPlans: false}))
      }, 1500)
    } else {
      setWar(state => ({
        ...state,
        passThroughPlansToPrints: false,
        passThroughPrintsToPlans: false
      }))
    }
  }, [])

  const paintings = useMemo(() => {
    if (war.paintings.length !== 0) {

      var paintingWidth

      if (size.height < size.width) {
        paintingWidth = size.height * .9
      } else {
        paintingWidth = size.width * .9
      }

      return (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={
            war.paintingPosition === 0 && war.firstLoad
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
            width: paintingWidth
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
          opacity: war.firstLoad ? 0 : 1,
          translateY: war.firstLoad 
            ? 0 
            : war.movingUp
              ? "-100vh"
              : "100vh"
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        exit={{
            translateY: war.movingUp ? "100vh" : "-100vh"
        }}
        transition={{
            duration: 1,
            ease: "linear"
        }}
      >

        <AnimatePresence inital={false}>
          {paintings}
        </AnimatePresence>
        <AnimatePresence>
          {details}
        </AnimatePresence>

        <div 
          className={styles.enlarge}
          onClick={() => setWar(state => ({ ...state, viewEnlarge: true }))}
        >
          <svg viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="30" fill="rgba(0,0,0,.2)"/>
            <path d="M46.5601 45.0386L38.8151 37.2757C41.4061 34.286 42.736 30.4073 42.5243 26.4568C42.3128 22.5059 40.5764 18.7911 37.6809 16.0953C34.7851 13.3992 30.9566 11.932 27.0008 12.0024C23.045 12.0729 19.271 13.6757 16.4734 16.4734C13.676 19.271 12.073 23.0453 12.0024 27.0008C11.9319 30.9566 13.3992 34.7855 16.0953 37.6809C18.7912 40.5767 22.5058 42.313 26.4568 42.5245C30.4074 42.7363 34.2864 41.4064 37.2757 38.8154L45.0208 46.5782C45.2121 46.8331 45.5047 46.9927 45.8226 47.0151C46.1404 47.0379 46.4526 46.9214 46.678 46.696C46.9035 46.4705 47.0199 46.1583 46.9972 45.8405C46.9747 45.5226 46.8152 45.23 46.5603 45.0387L46.5601 45.0386ZM36.5285 36.5466C34.0794 38.9938 30.7589 40.3683 27.2968 40.3676C23.8344 40.3668 20.5143 38.991 18.067 36.5428C15.619 34.0943 14.244 30.7739 14.244 27.3117C14.244 23.8494 15.619 20.5292 18.067 18.0806C20.5147 15.6321 23.8348 14.2563 27.2968 14.2555C30.7588 14.255 34.0793 15.6293 36.5285 18.0768C38.1638 19.6899 39.3414 21.7083 39.941 23.9257C40.5406 26.1431 40.5406 28.4798 39.941 30.6969C39.3414 32.9143 38.1638 34.9329 36.5285 36.546V36.5466Z" fill="black"/>
            <path d="M31.6459 26.6313H28.3801V23.3656C28.425 23.05 28.331 22.7306 28.1221 22.4896C27.9132 22.249 27.6103 22.1108 27.2917 22.1108C26.9731 22.1108 26.6699 22.249 26.461 22.4896C26.2524 22.7306 26.1581 23.05 26.2031 23.3656V26.6313H22.9409C22.6237 26.5823 22.3012 26.6745 22.0577 26.8834C21.814 27.0923 21.674 27.3972 21.674 27.718C21.674 28.0389 21.814 28.3436 22.0577 28.5525C22.3012 28.7615 22.6238 28.8536 22.9409 28.8048H26.2031V32.0706C26.2534 32.4228 26.4711 32.7293 26.7874 32.8926C27.1038 33.0558 27.4795 33.0558 27.7961 32.8926C28.1124 32.7294 28.3301 32.4229 28.3802 32.0706V28.8048H31.646C31.9631 28.8536 32.2858 28.7614 32.5293 28.5525C32.7728 28.3436 32.9131 28.0389 32.9131 27.718C32.9131 27.3972 32.7728 27.0923 32.5293 26.8834C32.2858 26.6745 31.963 26.5823 31.646 26.6313H31.6459Z" fill="black"/>
          </svg>
        </div>
        <SideNav location={location} />
      </motion.main>
      <Nav location={location} />
      <AnimatePresence exitBeforeEnter>
        {war.viewEnlarge && <Enlarge />}
      </AnimatePresence>
    </>
  )
}

export default IndexPage