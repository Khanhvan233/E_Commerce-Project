import React, { Fragment } from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { Row, Col } from 'antd'
import * as ProductService from  '../../services/ProductService.js'
import { WrapperProducts, WrapperNavbar } from './style'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'


const TypeProductPage = () => {
  const {id} =useParams()
  console.log(id)
  const onChange = () => { }
  const dataType = {
    type_ID: id
  }
  console.log(dataType)
  console.log(dataType.type_ID)

  const getTypeProduct = async() => {
    const res = ProductService.getType(dataType.type_ID)
    return res
  }
   const { data : products} = useQuery({queryKey: ['products'], queryFn: getTypeProduct})
   console.log(products)
  return (
    <div style={{height: '1000px'}}>
    <div style={{height: '100%',width: '100%', background: '#efefef'}}>
      <div style={{width: '1270', margin: '0 auto'}}>
        <Row style={{flexWrap: 'nowrap', paddingTop: '10px' }}>
          <WrapperNavbar spam = {4}>
              <NavbarComponent/>
          </WrapperNavbar>  
          <Col span = {20} style={{marginLeft:'30px'}}>
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
        </Row>
      </div>
      <div style={{height:'50px'}}></div>
    </div>
    </div>
  )
}

export default TypeProductPage