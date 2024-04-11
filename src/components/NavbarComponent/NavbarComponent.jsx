import React from 'react'
import { Checkbox, Row, Col } from 'antd';

import { WrapperLabelText,WrapperTextValue , WrapperContent} from './style'
import { type } from '@testing-library/user-event/dist/type'
import { ColorFactory } from 'antd/es/color-picker/color';
const NavbarComponent = () => {
    const onchange = () => { }
    const renderContent =(type,options) => {
        switch (type){
            case 'text':
                return options.map((option) => {
                   return <WrapperTextValue>{option}</WrapperTextValue>
                    
                })
            case 'checkbox':
                return (
                <Checkbox.Group style={{width: '100%', display:'flex', flexDirection:'column'}} onChange={onchange}>
                    {options.map((option) => {
                        return (
                            <Checkbox value={option.value }>{option.label}</Checkbox>
                        )
                    })}
                </Checkbox.Group>
            )
            // eslint-disable-next-line no-fallthrough
            default:
                return   {}
        }
    }

    return (
    <div>
        <WrapperLabelText>Label</WrapperLabelText>
        < WrapperContent>
            {renderContent('text',['Tu Lanh','TV','MAYGIAT'])}
            {renderContent('checkbox',[
                {value: 'a', label:' A'},
                {value: 'b', label: 'B'}
                ])}
        </WrapperContent>
        
    </div>
  )
}

export default NavbarComponent
