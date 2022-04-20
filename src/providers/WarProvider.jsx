import React, { useState, useEffect, createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const WarContext = createContext()

const WarProvider = ({ children }) => {
    const data = useStaticQuery(graphql`
        query WarQuery {
            allImageSharp {
                edges {
                    node {
                    gatsbyImageData
                        original {
                            src
                        }
                    }
                }
            }
            allDataJson {
                edges {
                    node {
                        paintings {
                            colors
                            completed
                            extension
                            how
                            image
                            imageSlug
                            material
                            medium
                            palette
                            short
                            title
                        }
                        plans {
                            slug
                            short
                        }
                        prints {
                            slug
                            short
                        }
                    }
                }
            }
        }
    `)

    console.log(data);

    const [war, setWar] = useState({
        paintingPosition: 0,
        paintings: [],
        sketches: [],

        planPosition: 0,
        plans: [],

        printPosition: 0,
        prints: [],
        
        firstLoad: true,
        detailFront: true,

        movingUp: false,
        passThroughPlansToPrints: false,
        passThroughPrintsToPlans: false,

        viewEnlarge: false,
        controlledPosition: { x: 0, y: 0 },
        bounds: { left: 0, top: 0, right: 0, bottom: 0 }
    })

    useEffect(() => {
        var rawPaintings = []
        const paintingsArray = []
        const sketchesArray = []
        var plansArray = []
        var printsArray = []

        data.allDataJson.edges.forEach(page => {
            plansArray = page.node['plans']
            printsArray = page.node['prints']
            rawPaintings = page.node['paintings']
        })

        rawPaintings.map(painting => {
            sketchesArray.push(painting)
            if (painting.completed) {
                var paintingsObject = {}
                data.allImageSharp.edges.forEach(image => {
                    if (image.node.original.src.toLowerCase().includes(painting.imageSlug.toLowerCase())) {
                        paintingsObject = {
                            ...painting,
                            artwork: image.node.gatsbyImageData
                        }
                    }
                })
                return paintingsArray.push(paintingsObject)
            }

            return null
        })

        setWar(state => ({ 
            ...state,
            plans: plansArray,
            prints: printsArray,
            paintings: paintingsArray, 
            sketches: sketchesArray 
        }))
    }, [data])
    
    return (
        <WarContext.Provider
            value={[war, setWar]}
        >
            {children}
        </WarContext.Provider>
    )
}

export default WarProvider