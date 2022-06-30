import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import './intro.css';

export default function Intro({rollno,name,pinkcolor}) {
  return (<>
  <div><h1>B.Tech CSE</h1></div>
  <h1 style = {{color:'red'}}>Chitkara University {name}</h1>
  <h1 style={outsideStyle}> Riya </h1>
 <div><Stp>{rollno}</Stp></div>
 <div className ="yellow">Yellow Text</div>
 <button style ={{color :pinkcolor}}>Hello</button>
  </>
  )
}

Intro.defaultProps ={
    class : 'z2',
}
Intro.propTypes = {
    rollno : PropTypes.string,
}

const Stp = styled.button`
color : green;
`
const outsideStyle={
    color : 'red',
}

