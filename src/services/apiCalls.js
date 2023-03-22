import axios from 'axios'

const root = "https://goodsmile-production.up.railway.app/"

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

    return await axios.get(`${root}users/all`, config);
}

export const registerUser = async (body) => {

  return await axios.post(`${root}users`, body)

}

export const appointmentsAll = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}appointments/doctor`, config)

}

export const bookAppointment = async (body, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.post(`${root}appointments`, body, config)

}

export const bringAppointments = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}appointments`, config);
}




