import axios from 'axios'

// user api section


const apiUrl = "http://localhost:8000/api/v1"

const userApi = apiUrl + "/user";

export const postUser = async (obj) => {
    try {
       const {data} = await  axios.post(userApi, obj)
       console.log(data)
       return data
    } catch (error) {
        return {
            status:"success",
            message:error.message
        }
        
    }
}
//transaction api section

