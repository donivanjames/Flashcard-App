import React from 'react';

const FlipButton = ({display, setDisplay}) => {
    
    const flip = () => {
        setDisplay({
            ...display,
            front: !display.front,
            flipped: true,
        });
    }
    
    return (
        <button className='btn btn-secondary' onClick={flip}>
            Flip
        </button>
    )
}

export default FlipButton;