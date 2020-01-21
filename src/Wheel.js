import React from 'react';

const Wheel = props => {
  const wheelStyle = {
    position: 'absolute',
    width: '60px',
    height: '110px',
    background: '#000',
    borderRadius: '40px',
    left: props.wheelPositionLeft,
    top: props.wheelPositionTop,
  }

  return(
    <div style = {wheelStyle}></div>
  )
}

export default Wheel;