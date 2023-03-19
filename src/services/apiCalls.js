import axios from 'axios'

const root = "http://localhost:3000/"

/*export const bringUsers = async () => {

    return await axios.get("https://dummyjson.com/users")
};*/

export const logMe = async(body) => {
    return await axios.post(`${root}login`, body)
}

export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}/api/users`, config);
}