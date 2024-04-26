import React from 'react'
import { TypeProduct } from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/slider.webp'
import slider2 from '../../assets/images/slider2.ws.jpg'
import slider3 from '../../assets/images/slider3.ws.jpg'
import slider4 from '../../assets/images/slider4.ws.jpg'
import slider5 from '../../assets/images/slider5.ws.jpg'
import slider6 from '../../assets/images/slider6.ws.jpg'
import SliderComponent from '../../components/SliderComponent/SliderComponet'
import CardComponent from '../../components/CardComponent/CardComponent.jsx'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent.jsx'

const HomePage = () => {
  const arr =['Rèm Cửa', 'Rem Ngủ', 'Rèm Cầu Vồng','Rèm Nhà Tắm']
  return (
    <>
      <div style={{padding: '10px 120px', width: '1900px', margin: '0 auto'}}>
        <WrapperTypeProduct>
          {arr.map((item)=> {
            return (
              <TypeProduct name={item} key={item}/>  
            )
          })}
        </WrapperTypeProduct>
        </div>
        <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
        <div id="container" style={{ height: '1000px', width: '1660px', margin: '0 auto' }}>
          
          <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider6]} />
            <WrapperProducts>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </WrapperProducts>
            <div style={{width: '100%', display: 'flex', justifyContent:'center', marginTop: '10px'}}>
              <WrapperButtonMore textButton="Xem thêm" type="outline"
                styleButton={{
                  border: '1px solid rgb(11, 116, 229)', 
                  color: 'rgb(11, 116, 229)',
                  width: '240px',
                  height: '38px',
                  borderRadius: '4px'
                }}
                styleTextButton={{fontWeight: 500}}
              />
            </div>
          </div>
          </div>
    </>
  )
}

export default HomePage