import React from 'react'
import { useParams } from 'react-router-dom'
import * as ProductService from  '../../services/ProductService.js'
import { useQuery } from '@tanstack/react-query'
import CardComponent from '../../components/CardComponent/CardComponent.jsx'
import { Col, Row } from 'antd'
import { WrapperProducts } from './style'
const SearchPage = () => {

  const {data} =useParams()
  const dataType = {
    keyword: data
  }
  const getSearchProduct = async() => {
    const res = ProductService.searchProduct(dataType.keyword)
    return res
  }
   const { data : products} = useQuery({queryKey: ['products'], queryFn: getSearchProduct})
  return (
    <div style={{height: '1000px'}}>
    <div style={{height: '100%',width: '100%', background: '#efefef'}}>
      <div style={{width: '1270', margin: '0 auto'}}>
        <Row style={{flexWrap: 'nowrap', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
          <Col span = {1}>
          </Col>
          <Col span = {22} style={{marginLeft:'30px',}}>
            <WrapperProducts>
              {products?.map((product) => {
                return (
                  <CardComponent
                    Name = {product.Name}
                    Quantity = {product.Quantity}
                    Description = {product.Description}
                    type_ID = {product.type_ID}
                    Price = {product.PriceApply}
                    Image = {product.Image}
                    Id ={product.Id}
                  />
                )
              })}
            </WrapperProducts>
          </Col>
          <Col span = {1}>
          </Col>
        </Row>
      </div>
      <div style={{height:'50px'}}></div>
    </div>
    </div>
  )
}

export default SearchPage