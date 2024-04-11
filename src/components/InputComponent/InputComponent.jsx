import React from 'react'
import {Input} from 'antd'

const InputComponent = ({style, placeholder, bordered, size, ...rests}) => {
  return (
   <Input
        size={size} 
        placeholder={placeholder} 
        bordered={bordered} 
        style={style}
        {...rests}
    /> 
  )
}

export default InputComponent