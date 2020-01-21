import React from 'react';

const Body = props => {
  const bodyStyle = {
    position: 'absolute',
    width: '200px',
    height: '400px',
    background: props.color,
    borderRadius: '40px',
    left: '155px',
    top: '50px',
  }

  return(
    <div style = {bodyStyle}></div>
  )
}

export default Body;