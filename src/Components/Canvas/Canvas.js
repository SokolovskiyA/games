import React from 'react'
import { useRef, useEffect, useState } from 'react';
import './canvas.scss'
import sprite from '../../assets/shadow_dog.png'


function Canvas() {
    //hooks
    const ref = useRef()
    const [count, setCount] = useState(0);

      //variables
    const CANVAS_WIDTH = 1440;
    const CANVAS_HEIGHT = 800;
    const spriteWidth = 575;
    const spriteHeight = 523;
    const playerImage = new Image();
    playerImage.src = sprite

    let gameFrame = 0;
    let staggeredFrames = 2;

     //method of automatically destructuring the sprite sheet into the array of different anymations based on frame amount.
    let spriteAnimations = [];
    let animationStates = [
        {
            name: 'idle',
            frames: 7,
        },
        {
            name: 'jump',
            frames: 7,
        },
        {
            name: 'fall',
            frames: 7,
        },
        {
            name: 'run',
            frames: 9,
        },
        {
            name: 'dizzy',
            frames: 11,
        },
        {
            name: 'sit',
            frames: 5,
        },
        {
            name: 'roll',
            frames: 7,
        },
        {
            name: 'bite',
            frames: 7,
        },
        {
            name: 'ko',
            frames: 12,
        },
        {
            name: 'get hit',
            frames: 4,
        },
    ]

    // populate spriteAnimations array with coordinates of each frame
    animationStates.forEach((state, index) => {
        let frames = {
            loc: []
        }
        for (let j = 0; j < state.frames; j++) {
            let positionX = j * spriteWidth;
            let positionY = index * spriteHeight;
            frames.loc.push({x: positionX, y: positionY})
        }
        spriteAnimations[index] = frames;
    })

    const changeUp = () => {
        if (count < spriteAnimations.length - 1) {
            setCount(count + 1)
        }
    }
    const changeDown = () => {
        if (count !== 0 ) {
            setCount(count - 1)
        }
    }

    useEffect(()=> {
        //define canvas
        const canvas = ref.current;
        const ctx = canvas.getContext('2d')
    
        // define animation \

        const animate = () => {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            let position = Math.floor(gameFrame/ staggeredFrames) % spriteAnimations[count].loc.length; //amount of frames in animation
            let frameX = spriteAnimations[count].loc[position].x;
            let frameY = spriteAnimations[count].loc[position].y;
            ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, 100, 100)
            gameFrame++;   
            requestAnimationFrame(animate)
        }

        animate()

    })





    return (
        <div>
            <button onClick={()=> changeUp()}>up</button>
            <button onClick={()=> changeDown()}>down</button>
            <canvas ref={ref} className='canvas' width={CANVAS_WIDTH} height={CANVAS_HEIGHT}/>
        </div>
    )
}

export default Canvas