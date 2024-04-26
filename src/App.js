import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
function App() {

//test thử fetch API 
  
  // useEffect(() => {
  //   fetchAPI()
  // }, [])
  const fetchAPI = async () =>{
    const res = axios.get(`${process.env.REACT_APP_API_URL}/product_get`)
    return res.data
  }
  const query = useQuery({ queryKey: ['todos'], queryFn: fetchAPI })
  console.log('querry', query)

  return (
    <div>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            })}
          </Routes>
        </Router>
    </div>
  )
}
export default App  