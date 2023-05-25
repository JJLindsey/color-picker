import React, { useState, useRef, useEffect } from "react"
import styled from 'styled-components'
import Modal from "./Modal"

const PickerWrapper = styled.div`
    .swatch {
        width: 100px;
        height: 50px;
        background: ${(p) => p.color}
    }
`
export default function Picker() {
    const [color, setColor] = useState('#000')
    const [show, setShow] = useState(false)

    const modal = useRef(null)

    return (
        <>
          <PickerWrapper color={color}>
            <div className='swatch' onClick={() => setShow(true)}/>
            <Modal modal={modal} show={show} onClose={() => setShow(false)}>
                <div> 😎 </div>
            </Modal>
          </PickerWrapper>
        </>
    )
}


