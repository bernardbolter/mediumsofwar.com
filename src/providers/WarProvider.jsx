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
            allPaintingsJson {
                edges {
                    node {
                        colors
                        completed
                        extension
                        how
                        id
                        imageSlug
                        medium
                        material
                        palette
                        short
                        title
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
        firstLoad: true,
        detailFront: true,
        enterPrint: true,
        planPosition: 0
    })

    useEffect(() => {
        const paintingsArray = []
        const sketchesArray = []
        if (data.allPaintingsJson.edges.length !== 0) {
            data.allPaintingsJson.edges.map(painting => {
                sketchesArray.push(painting)
                if (painting.node.completed) {
                    var paintingsObject = {}
                    data.allImageSharp.edges.map(image => {
                        
                        if (image.node.original.src.toLowerCase().includes(painting.node.imageSlug.toLowerCase())) {
                            paintingsObject = {
                                ...painting.node,
                                artwork: image.node.gatsbyImageData
                            }
                        }
                    })
                    paintingsArray.push(paintingsObject)
                }
            })
        }

        setWar(state => ({ ...state, paintings: paintingsArray, sketches: sketchesArray }))
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