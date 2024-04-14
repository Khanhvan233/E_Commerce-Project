import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'

const ProductDetailPage = () => {
  return (
    <div style={{padding: '0 120px', background: '#efefef'}}>
      <h5 style={{fontSize: '10px'}}>Trang chủ</h5>
      <div style={{display:'flex', background:'#fff'}}>
        <ProductDetailComponent ></ProductDetailComponent>
      </div>
      
      
    </div>
  )
}
export default ProductDetailPage
