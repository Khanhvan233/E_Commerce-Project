import axios from "axios"

export const loginAdmin = async(data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/admin`)
    return res.data
}   