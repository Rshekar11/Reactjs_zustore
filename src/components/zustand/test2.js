import React from 'react'
import { useNameStore } from '../../store/useNameStore'

const Test2 = () => {
    const setNumber = useNameStore((s)=>s.setNumber);
    const number = useNameStore((s)=>s.number);
function updateNumber(){
    setNumber(number)
}
  return (
    <>
    <p>{number}</p>
      <button onClick={updateNumber}>+</button>
    </>
  )
}

export default Test2