import axios from "axios"

export const loginAdmin = async(data) =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/login`)
    return res.data
}