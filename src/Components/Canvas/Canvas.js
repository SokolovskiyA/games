import React from 'react'
import { useRef, useEffect } from 'react';
import './canvas.scss'
import sprite from '../../assets/shadow_dog.png'


function Canvas() {
    const ref = useRef()
    const canvas = ref.current;
    const ctx = canvas.getContext('2d')
    

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 600;

    const playerImage = new Image();
    playerImage.src = sprite
    const spriteWidth = 575;
    const spriteHeight = 523;

    let frameX = 0;
    let frameY = 0; 
    let gameFrame = 0;
    const staggeredFrames = 7;

    const spriteAnimations = [];
    const animationStates = [
        {
            name: 'idle',
            frames: 7,
        }
        {
            name: 'jump',
            frames: 7,
        }
        {
            name: 'down',
            frames: 7,
        }
    ]
    animationStates.forEach((state, index) => {
        let frames = {
            loc: [],
        }
        for (let j = 0; j< sprite.frames; s++) {
            let positionX = j * spriteWidth;
            let positionY = index * spriteWidth;
            frames.loc.push({x: positionX, y: positionY})
        }
        spriteAnimations[state.name] = frames;
    })
    
    const animate = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        let position  = Math.floor(gameFrame/staggeredFrames) % 6;
        frameX = spriteWidth * position; 


        ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, 200, 200)

        gameFrame++;
        requestAnimationFrame(animate)
    }
    animate()
    
    return (
        <canvas ref={ref} className='canvas' width={CANVAS_WIDTH} height={CANVAS_HEIGHT}/>
    )
}

export default Canvas

/*
 
*/