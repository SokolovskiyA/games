import React from 'react'
import useCanvas from './useCanvas';
import './canvas.scss'


function Canvas(props) {
    const {draw, ...rest} = props
    const ref = useCanvas(draw);

    return (
        <canvas ref={ref} className='canvas' {...rest}/>
    )
}

export default Canvas