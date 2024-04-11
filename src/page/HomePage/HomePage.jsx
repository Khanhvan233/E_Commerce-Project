import React from 'react'
import { TypeProduct } from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/slider.webp'
import slider2 from '../../assets/images/slider2.ws.jpg'
import slider3 from '../../assets/images/slider3.ws.jpg'
import slider4 from '../../assets/images/slider4.ws.jpg'
import slider5 from '../../assets/images/slider5.ws.jpg'
import slider6 from '../../assets/images/slider6.ws.jpg'
import SliderComponent from '../../components/SliderComponent/SliderComponet'

const HomePage = () => {
  const arr =['Rèm Cửa', 'Rem Ngủ', 'Rèm Cầu Vồng','Rèm Nhà Tắm']
  return (
    <>
      <div style={{padding: '10px 120px'}}>
        <WrapperTypeProduct>
          {arr.map((item)=> {
            return (
              <TypeProduct name={item} key={item}/>  
            )
          })}
        </WrapperTypeProduct>
        </div>
        <div id="container" style={{backgroundColor: 'efefef', padding: '0px 120px'}}>

          <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5, slider6]} />
        </div>
    </>
  )
}

export default HomePage