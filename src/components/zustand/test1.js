import React from 'react'
import { useNameStore } from '../../store/useNameStore'

const Test1 = () => {
  const number = useNameStore((s) => s.number);
  return (
    <>
      <p>{number}</p>
    </>
  )
}

export default Test1