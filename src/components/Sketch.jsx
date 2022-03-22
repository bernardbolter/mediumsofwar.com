import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../helpers/useWindowSize'

const Sketch = ({ sketch, height, dimensions }) => {
    const size = useWindowSize()
    const [sketchWidth, setSketchWidth] = useState(0)
    const [sketchHeight, setSketchHeight] = useState(0)

    console.log(sketch)

    useEffect(() => {
        if (size.width > 650 && size.width < 999) {
            setSketchWidth(size.width * .41)
            setSketchHeight(size.width * .27333)
        } else if (size.width > 1000) {
            setSketchWidth(450)
            setSketchHeight(297)
        } else {
            setSketchWidth(size.width * .8)
            setSketchHeight(size.width * .53333)
        }
    }, [size])

    return (
        <div
            style={{
                width: sketchWidth,
                height: sketchHeight,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,.8)",
                borderStyle: "solid",
                backgroundColor: "rgba(0,0,0,.06)",
                display: "inline-block",
                margin: "20px 0",
                position: "relative"
            }}
        >
            {dimensions && (
                <div 
                    style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        top: -30,
                        left: -1
                    }}
                >
                    <div
                        style={{
                            height: 20,
                            width: 1,
                            background: "rgba(0,0,0,.5)"
                        }}
                    />
                    <p
                        style={{
                            position: "absolute",
                            fontSize: 14,
                            color: "rgba(0,0,0,.5)",
                            top: -25,
                            left: sketchWidth * .4
                        }}
                    >180cm <span style={{fontSize: 11}}>| 70 3/4"</span></p>
                    <div
                        style={{
                            width: sketchWidth,
                            height: 1,
                            background: "rgba(0,0,0,.5)"
                        }}
                    />
                    <div
                        style={{
                            height: 20,
                            width: 1,
                            background: "rgba(0,0,0,.5)"
                        }}
                    />  
                </div>
            )}
            {dimensions && (
                <div 
                    style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transform: "rotate(-90deg)",
                        transformOrigin: 0,
                        left: -20,
                        bottom: -10
                    }}
                >
                    <div
                        style={{
                            height: 20,
                            width: 1,
                            background: "rgba(0,0,0,.5)"
                        }}
                    />
                    <p
                        style={{
                            position: "absolute",
                            fontSize: 14,
                            color: "rgba(0,0,0,.5)",
                            top: -25,
                            left: sketchHeight * .35
                        }}
                    >120cm <span style={{fontSize: 11}}>| 47 1/4"</span></p>
                    <div
                        style={{
                            width: sketchHeight,
                            height: 1,
                            background: "rgba(0,0,0,.5)"
                        }}
                    />
                    <div
                        style={{
                            height: 20,
                            width: 1,
                            background: "rgba(0,0,0,.5)"
                        }}
                    />
                </div>
            )}
            <p
                style={{
                    fontFamily: "sans-serif",
                    fontSize: 12,
                    padding: 0,
                    margin: 0,
                    textAlign: "center",
                    color: "rgba(0,0,0,.3)",
                    marginTop: size.width > 650
                        ? sketchWidth * height
                        : sketchHeight * height
                }}
            >Horizon Line</p>
            <div
                style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "rgba(0,0,0,.5)"
                }}
            />
        </div>
    )
}

export default Sketch