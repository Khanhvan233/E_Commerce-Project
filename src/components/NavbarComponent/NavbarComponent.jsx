import React from 'react'
import { Checkbox, Row, Col, Rate } from 'antd';

import { WrapperLabelText,WrapperTextValue , WrapperContent,WrapperTextPrice} from './style'
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
            case 'star':
                 
                return options.map((option) => {
                    console.log('check',option)
                    return (
                        <div style={{display:'flex'}}>
                            <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                            <span>{`tu ${option} sao`}</span>
                        </div>
                    )
                 })
            case 'price':
                 
                return options.map((option) => {
                    
                    return (
                        <WrapperTextPrice>
                            {option}
                        </WrapperTextPrice>
                    )
                 })     
            // eslint-disable-next-line no-fallthrough
            default:
                return   {}
        }
    }

    return (
    <div style={{background: '#fff'}}>
        <WrapperLabelText>Label</WrapperLabelText>
        < WrapperContent>
            {renderContent('text',['Tu Lanh','TV','MAYGIAT'])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('checkbox',[
                    {value: 'a', label:' A'},
                    {value: 'b', label: 'B'}
                    ])}
        </WrapperContent>
        < WrapperContent>
            {renderContent('star',[3,4,5])}
        </WrapperContent>
        < WrapperContent>
            {renderContent('price',['Dưới 100.000','Dưới 500.000','Trên 1.000.000'])}
        </WrapperContent>            

        
    </div>
  )
}

export default NavbarComponent
