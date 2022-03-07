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
                id
                image
                imageSlug
                medium
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
        paintings: []
    })

    useEffect(() => {
        const paintingsArray = []
        if (data.allPaintingsJson.edges.length !== 0) {
            data.allPaintingsJson.edges.map(painting => {
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
            })
            
        }
        console.log(paintingsArray)
        setWar(state => ({ ...state, paintings: paintingsArray }))
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