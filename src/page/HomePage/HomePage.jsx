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
import * as ProductService from  '../../services/ProductService.js'
import { useQuery } from '@tanstack/react-query'

const HomePage = () => {
  const arr =['Rèm Cửa', 'Rem Ngủ', 'Rèm Cầu Vồng','Rèm Nhà Tắm']

  const getAllProducts = async() => {
    const res = await ProductService.getAllProduct()
    return res
  }
  const { data : products} = useQuery({queryKey: ['products'], queryFn: getAllProducts})

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
        <div id="container" style={{ height: '100%', width: '1660px', margin: '0 auto' }}>
          
          <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider6]} />
          <WrapperProducts>
            {products?.map((product) => {
              return (
                <CardComponent
                  ten_rem={product.ten_rem}
                  hinh_anh={product.hinh_anh}
                  trang_thai={product.trang_thai}
                  gia_goc={product.gia_goc}
                  xuat_xu={product.xuat_xu}
                  bao_hanh={product.bao_hanh}
                  chat_lieu={product.chat_lieu}
                  don_vi={product.don_vi}
                  kich_thuoc={product.kich_thuoc}
                  id={product.id}
                />
              )
            })}
          </WrapperProducts>
            <div style={{width: '100%', display: 'flex', justifyContent:'center', marginTop: '10px'}}>
              <div style={{height:'50'}}></div>
            </div>
          </div>
          </div>
    </>
  )
}

export default HomePage