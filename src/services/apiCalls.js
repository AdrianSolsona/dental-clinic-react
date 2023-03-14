import axios from 'axios'

const root = "http://localhost:3000"

export const bringUsers = async () => {

    return await axios.get("https://dummyjson.com/users")
};

export const loginMe = async(body) => {
    return await axios.post(`${root}/users`, body)
}