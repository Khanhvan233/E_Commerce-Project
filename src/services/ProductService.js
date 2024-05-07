import axios from "axios"

export const createProduct = async(data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product_add`, data)
    return res.data
}