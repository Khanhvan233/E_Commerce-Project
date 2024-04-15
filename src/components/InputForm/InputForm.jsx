import React, { useState } from 'react'
import {Input} from 'antd'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const [valueInput, setvalueInput] =useState('')
    const {placeholder ='Nhap text', ...rests} =props
  return (
        <WrapperInputStyle placeholder= {placeholder} valueInput = {valueInput} {...rests}/>
  )
}

export default InputForm