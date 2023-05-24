import React, { useState } from "react"
import styled from 'styled-components'

const PickerWrapper = styled.div`
    .swatch {
        width: 100px;
        height: 50px;
        background: ${(p) => p.color}
    }
`
export default function Picker() {
    const [color, setColor] = useState('#000')

    return (
        <>
          <PickerWrapper color={color}>
            <div className='swatch' />
          </PickerWrapper>
        </>
    )
}


