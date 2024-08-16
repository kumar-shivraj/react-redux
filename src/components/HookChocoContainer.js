import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChoco } from '../redux';

const HookChocoContainer = () => {
    const numOfChoco = useSelector(state => state.choco.numOfChoco);
    const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Choco : {numOfChoco}</h2>
      <button onClick={() => dispatch(buyChoco())}>Buy Choco</button>
    </div>
  )
}

export default HookChocoContainer
