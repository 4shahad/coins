import React from 'react'
import Select from 'react-select'
function Formss({coinList, onSelect}) {
  return (
    <>
  
    <Select onChange={onSelect} className='w-100' options={coinList} />

    </>
  )
}

export default Formss