import React from 'react'
import WarProvider from '../providers/WarProvider'

const RootLayout = ({ element }) => (
    <WarProvider>
        {element}
    </WarProvider>
)

export default RootLayout